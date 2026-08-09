import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import sharp from 'sharp'

const REGION = 'us-east-1'
const BUCKET = 'gypspace'
const ACCESS_KEY_ID = process.env.VITE_AWS_ACCESS_KEY_ID
const SECRET_ACCESS_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
})

async function convertSvgToPng() {
  const svgKey = 'roche-bobois.svg'
  const pngKey = 'roche-bobois.png'

  const response = await s3.send(new GetObjectCommand({
    Bucket: BUCKET,
    Key: svgKey,
  }))

  const svgBuffer = await response.Body.transformToByteArray()
  const pngBuffer = await sharp(svgBuffer).png().toBuffer()

  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: pngKey,
    Body: pngBuffer,
    ContentType: 'image/png',
    ACL: 'public-read',
  }))

  console.log(`Converted and uploaded: https://${BUCKET}.s3.${REGION}.amazonaws.com/${pngKey}`)
}

convertSvgToPng().catch(err => {
  console.error(err)
  process.exit(1)
})
