"use client"

import PhotoAlbum from "react-photo-album"
import { photos } from "@/data/photos"

export default function GalleryPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  )
}