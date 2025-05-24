"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { uploadToR2 } from "@/src/lib/r2"
import { parseExif } from "@/src/lib/exif"

export default function UploadPage() {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const exifData = await parseExif(file)
    console.log("EXIF:", exifData)

    const uploadedUrl = await uploadToR2(file, `uploads/${file.name}`)
    console.log("Uploaded:", uploadedUrl)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className="p-10 border border-dashed rounded text-center">
      <input {...getInputProps()} />
      <p>Drag & drop a photo here, or click to select</p>
    </div>
  )
}