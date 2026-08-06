import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
})

export async function uploadImage(file) {
  const key = `gallery/${Date.now()}-${file.name}`
  const buffer = await file.arrayBuffer()

  await s3.send(new PutObjectCommand({
    Bucket: import.meta.env.VITE_AWS_S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: file.type,
  }))

  return `https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${key}`
}
