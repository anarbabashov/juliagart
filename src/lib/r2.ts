import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { env } from "@/env"

export const r2 = new S3Client({
  region: "auto",
  endpoint: env.R2_ENDPOINT,
  credentials: {
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  },
})

export async function uploadToR2(file: File, key: string) {
  const buffer = await file.arrayBuffer()

  await r2.send(
    new PutObjectCommand({
      Bucket: env.R2_BUCKET,
      Key: key,
      Body: Buffer.from(buffer),
      ContentType: file.type,
    })
  )

  return `https://${env.R2_BUCKET}.${env.R2_ENDPOINT}/${key}`
} 