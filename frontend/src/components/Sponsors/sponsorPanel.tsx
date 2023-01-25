import React from 'react'

export interface SponsorSectionProp {
    imageSize: string;
    imageList: string[];
}

const SponsorPanel:React.FC<SponsorSectionProp> = ({imageSize, imageList}) => {

    const getClassName = (imageSize: string) => {
        if (imageSize == "large") {
            return "lg:w-4/12 md:w-6/12 md:px-5 px-10 w-full text py-10"
        } else if (imageSize == "medium") {
            return "lg:w-[20%] md:w-4/12 md:px-5 px-2 w-6/12 text py-10"
        } else {
            return "lg:w-2/12 md:w-3/12 md:px-5 px-1 w-4/12 text py-10"
        }
    }

    return (
        <div className="flex flex-wrap justify-center py-10">
            {imageList.map((imageSrc: string) => {
                return (
                    <div className={getClassName(imageSize)}>
                        <img src={imageSrc}/>
                    </div>
                )
            })}
      </div>
    )
}

export default SponsorPanel