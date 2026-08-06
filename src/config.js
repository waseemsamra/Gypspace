export const AWS_S3_BASE_URL = 'https://gypspace.s3.us-east-1.amazonaws.com'
export const AWS_REGION = 'us-east-1'
export const AWS_S3_BUCKET = 'gypspace'

export const resolveImageUrl = (src, storage = 'local') => {
  if (!src) return ''
  if (storage === 's3') {
    return `${AWS_S3_BASE_URL}/${src.replace(/^\//, '')}`
  }
  return src.startsWith('/') ? src : `/${src}`
}

export const getImageStorage = (src) => {
  if (!src) return 'local'
  if (src.startsWith('http://') || src.startsWith('https://')) return 's3'
  return 'local'
}
