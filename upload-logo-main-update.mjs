import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const REGION = 'us-east-1'
const BUCKET = 'gypspace'
const ACCESS_KEY_ID = process.env.VITE_AWS_ACCESS_KEY_ID
const SECRET_ACCESS_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY
const BASE_URL = `https://${BUCKET}.s3.${REGION}.amazonaws.com`

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
})

async function uploadFile() {
  const localPath = path.join(__dirname, 'public', 'logo_main_update.png')
  const key = 'logo_main_update.png'
  const buffer = fs.readFileSync(localPath)

  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: buffer,
    ContentType: 'image/png',
  }))

  const s3Url = `${BASE_URL}/${key}`
  console.log(`Uploaded: ${s3Url}`)
  console.log(`S3_URL=${s3Url}`)
}

uploadFile().catch(err => {
  console.error(err)
  process.exit(1)
})
