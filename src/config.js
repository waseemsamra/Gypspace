export const AWS_S3_BASE_URL = import.meta.env.VITE_AWS_S3_BASE_URL || 'https://gypspace.s3.us-east-1.amazonaws.com'
export const AWS_REGION = import.meta.env.VITE_AWS_REGION || 'us-east-1'
export const AWS_S3_BUCKET = import.meta.env.VITE_AWS_S3_BUCKET || 'gypspace'
export const AWS_ACCESS_KEY_ID = import.meta.env.VITE_AWS_ACCESS_KEY_ID || ''
export const AWS_SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || ''

export const resolveImageUrl = (src, storage = 'local') => {
  if (!src) return ''
  if (storage === 's3') {
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src
    }
    return `${AWS_S3_BASE_URL}/${src.replace(/^\//, '')}`
  }
  return src.startsWith('/') ? src : `/${src}`
}

export const getImageStorage = (src) => {
  if (!src) return 'local'
  if (src.startsWith('http://') || src.startsWith('https://')) return 's3'
  return 'local'
}

export const getPresignedUploadUrl = async (fileName, fileType, keyPrefix = 'gallery') => {
  const baseUrl = import.meta.env.VITE_PRESIGNED_URL_API_URL
  if (!baseUrl) {
    throw new Error('Presigned URL API not configured. Set VITE_PRESIGNED_URL_API_URL in .env')
  }

  const response = await fetch(`${baseUrl}?fileName=${encodeURIComponent(fileName)}&fileType=${encodeURIComponent(fileType)}&keyPrefix=${encodeURIComponent(keyPrefix)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to get presigned URL: ${response.statusText}`)
  }

  return response.json()
}
