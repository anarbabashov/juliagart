"use client"

import PhotoAlbum from "react-photo-album"
import { photos } from "@/data/photos"
import { Blurhash } from "react-blurhash"

<Blurhash hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" width={400} height={300} />

export default function GalleryPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Photo Gallery</h1>
      <PhotoAlbum layout="masonry" photos={photos} />
    </div>
  )
}