import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import heic2any from 'heic2any'

const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
})

export async function uploadImage(file) {
  let finalFile = file

  if (file.name.toLowerCase().endsWith('.heic') || file.type === 'image/heic' || file.type === 'image/heif') {
    const blob = await heic2any({
      blob: file,
      toType: 'image/jpeg',
      quality: 0.9,
    })

    const convertedBlob = blob instanceof Blob ? blob : blob[0]
    const newName = file.name.replace(/\.heic$/i, '.jpeg').replace(/\.heif$/i, '.jpeg')
    finalFile = new File([convertedBlob], newName, { type: 'image/jpeg' })
  }

  const key = `gallery/${Date.now()}-${finalFile.name}`
  const buffer = await finalFile.arrayBuffer()

  await s3.send(new PutObjectCommand({
    Bucket: import.meta.env.VITE_AWS_S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: 'image/jpeg',
  }))

  return `https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${key}`
}

export async function listS3Images(maxKeys = 50, continuationToken) {
  const response = await s3.send(new ListObjectsV2Command({
    Bucket: import.meta.env.VITE_AWS_S3_BUCKET,
    MaxKeys: maxKeys,
    ContinuationToken: continuationToken,
  }))

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.heic', '.heif']
  const images = []
  if (response.Contents) {
    for (const object of response.Contents) {
      const key = object.Key || ''
      const lowerKey = key.toLowerCase()
      if (imageExtensions.some(ext => lowerKey.endsWith(ext))) {
        images.push({
          url: `https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${key}`,
          caption: key.split('/').pop(),
          key,
        })
      }
    }
  }

  return {
    images,
    nextContinuationToken: response.IsTruncated ? response.NextContinuationToken : undefined,
  }
}
