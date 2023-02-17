import React from 'react'
import { TwitterMedia } from '../../models/TweetInfo'

export interface ImageCollageProps {
  images?: TwitterMedia[]
}

const ImageCollage = ({ images }: ImageCollageProps) => {
  const numImages = images?.length
  const getPhotoCollege = (idx: number) => {
    switch (idx) {
      case 0:
        if (numImages === 1) return 'col-span-2 row-span-2'
        if (numImages === 2) return 'col-span-2'
        if (numImages === 3) return 'row-span-2'
      case 1:
        if (numImages === 2) return 'col-span-2'
    }
    return ''
  }
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 max-h-[252px]">
      {images?.map((img, index) => {
        return (
          <img
            src={img.url}
            alt="test"
            key={index}
            className={'w-full h-full object-cover ' + getPhotoCollege(index)}
          />
        )
      })}
    </div>
  )
}

export default ImageCollage
