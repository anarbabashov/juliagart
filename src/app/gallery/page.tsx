import PhotoAlbum from "react-photo-album"
import { db } from "@/db"
import { photos } from "@/db/schema"

export default async function GalleryPage() {
  const photoList = await db.select().from(photos)

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>
      <PhotoAlbum
        layout="masonry"
        photos={photoList.map((photo) => ({
          src: photo.url,
          width: 1000,
          height: 1000,
          alt: photo.title || "Photo",
        }))}
      />
    </div>
  )
}