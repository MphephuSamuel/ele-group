'use client'

import { useState } from 'react'

type ProductGalleryProps = {
  name: string
  images: string[]
}

export function ProductGallery({ name, images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="product-gallery">
      <img className="product-gallery-main" src={selectedImage} alt={name} />
      {images.length > 1 && (
        <div className="product-gallery-thumbnails" aria-label={`${name} images`}>
          {images.map((image, index) => (
            <button
              className={selectedImage === image ? 'is-active' : ''}
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Show ${name} view ${index + 1}`}
              aria-pressed={selectedImage === image}
            >
              <img src={image} alt={`${name} view ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
