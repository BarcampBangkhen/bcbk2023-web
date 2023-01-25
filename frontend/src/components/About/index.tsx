import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'flowbite'
import {
  ParticipationDescription,
  WhatIsBarcampDescription
} from '../../Constant'

export default function About() {
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('resize', RedirectPath)

    return () => {
      window.removeEventListener('resize', RedirectPath)
    }
  }, [])

  //* ฟังชันก์ให้ redirect ไปยัง path /
  function RedirectPath() {
    if (window.outerWidth < 768) navigate('/')
  }

  return (
    <React.Fragment>
      <div className="container xl:relative max-w-7xl mx-auto md:mt-16 h-auto lg:h-[650px]" id="about">
        <div className="px-8 md:pl-20">
          <h1 className="text-3xl md:text-5xl text-Falu100 font-bold border-b-2 border-Falu100 md:border-0">
            About us
          </h1>
        </div>

        <div className="flex flex-col items-center xl:block mt-8 xl:mt-0 px-4 md:px-0">
          <div className="bg-Blond20 xl:absolute xl:top-24 xl:right-20 z-20 p-12 pl-14 max-w-[390px] md:max-w-[530px] rounded-3xl drop-shadow-lg md:drop-shadow-xl">
            <h2 className="text-2xl md:text-5xl text-center md:text-left font-bold mb-6">
              What is <span className="text-Rusty100">Barcamp</span> ?
            </h2>
            <p>{WhatIsBarcampDescription}</p>
          </div>

          <div className="bg-Blond20 mt-6 md:mt-8 xl:mt-0 xl:absolute z-10 xl:top-72 xl:left-44 p-12 pl-14 max-w-[390px] md:max-w-[550px] rounded-3xl drop-shadow-lg md:drop-shadow-xl">
            <h2 className="text-2xl md:text-5xl text-center md:text-left font-bold mb-6">
              Participants
            </h2>
            <p className="whitespace-pre-line">{ParticipationDescription}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
