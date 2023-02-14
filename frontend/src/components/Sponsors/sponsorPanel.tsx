import React from 'react'

export interface SponsorSectionProp {
  imageSize: string
  imageList: string[]
}

const SponsorPanel: React.FC<SponsorSectionProp> = ({
  imageSize,
  imageList
}) => {
  const getClassName = (imageSize: string) => {
    if (imageSize == 'large') {
      return 'lg:w-4/12 md:w-6/12 md:px-5 px-10 w-full text py-10 grid place-content-center'
    } else if (imageSize == 'medium') {
      return 'lg:w-[20%] md:w-4/12 md:px-12 px-8 w-6/12 text py-10 grid place-content-center'
    } else {
      return 'lg:w-2/12 md:w-3/12 md:px-22 px-1 w-4/12 text py-10 grid place-content-center max-h-[80px] max-w-[80px]'
    }
  }

  return (
    <div
      className={
        'flex flex-wrap justify-center py-10' +
        (imageSize === 'small' ? ' gap-12' : '')
      }
    >
      {imageList.map((imageSrc, index) => {
        return (
          <div key={index} className={getClassName(imageSize)}>
            <img src={imageSrc} className="object-cover" />
          </div>
        )
      })}
    </div>
  )
}

export default SponsorPanel
