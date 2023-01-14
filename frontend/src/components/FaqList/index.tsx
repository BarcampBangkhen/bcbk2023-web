import React, { useState } from 'react'

interface FaqListProps {
  title: string
  description: string
}

const FaqList = (props: FaqListProps) => {
  const [expand, setExpand] = useState(false)

  return (
    <div className="mb-3">
      <h2>
        <button
          type="button"
          className={
            `flex items-center justify-between w-full p-5 font-medium` +
            (expand
              ? ' bg-Blond100 border-x border-t border-Neutral01 rounded-t-xl'
              : ' bg-Blond20 drop-shadow-lg rounded-xl')
          }
          onClick={() => setExpand(!expand)}
        >
          <span>{props.title}</span>
          <img
            src="./iconAccordion.svg"
            alt="iconAccordion"
            className={expand ? 'rotate-180' : ''}
          />
        </button>
      </h2>
      <div
        className={`bg-Blond100 rounded-b-lg fade` + (expand ? '' : ' hidden')}
      >
        <div className="pb-3 px-5 font-light border-x border-b border-Neutral01 text-Neutral03 rounded-b-lg whitespace-pre-line">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqList
