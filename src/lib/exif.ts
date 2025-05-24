import exif from "ts-exif-parser"

export function parseExif(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      try {
        const buffer = Buffer.from(reader.result as ArrayBuffer)
        const parser = exif.create(buffer)
        const result = parser.parse()
        resolve(result.tags)
      } catch (e) {
        reject(e)
      }
    }

    reader.onerror = reject
    reader.readAsArrayBuffer(file)
  })
}