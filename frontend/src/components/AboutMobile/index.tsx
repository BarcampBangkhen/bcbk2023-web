import 'flowbite'
import {
  ParticipationDescription,
  WhatIsBarcampDescription
} from '../../Constant'

export default function AboutMobile() {
  return (
    <div className="md:hidden container max-w-7xl mt-52 md:mt-16" id="myabout">
      <div className="px-8">
        <h1 className="text-3xl text-Falu100 font-bold border-b-2 border-Falu100">
          About us
        </h1>
      </div>

      <div className="flex flex-col items-center mt-8 px-4">
        <div className="bg-Blond20 z-20 p-12 pl-14 max-w-[390px] rounded-3xl drop-shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-6">
            What is <span className="text-Rusty100">Barcamp</span> ?
          </h2>
          <p>{WhatIsBarcampDescription}</p>
        </div>
        <div className="bg-Blond20 mt-6 p-12 pl-14 max-w-[390px] rounded-3xl drop-shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-6">Participants</h2>
          <p className="whitespace-pre-line">{ParticipationDescription}</p>
        </div>
      </div>
    </div>
  )
}
