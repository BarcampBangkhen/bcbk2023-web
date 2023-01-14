import { useEffect } from 'react'
import 'flowbite'
import { displaydateFormat } from '../Utils'
import { EventDate } from '../../Constant'
import { timetableData } from '../TimeTable'

export default function TimeTableMobile() {
  return (
    <div
      className="md:hidden container max-w-7xl mx-auto mt-36 px-6"
      id="mytimetable"
    >
      <div>
        <div className="border-b-2 border-Falu100 text-lg mt-4">
          <h1 className="text-3xl text-Falu100 font-bold">Timetable</h1>
        </div>
      </div>

      <article className="max-w-4xl ml-auto mt-6">
        <div className="flex justify-between">
          <h5 className="font-normal text-2xl">
            {displaydateFormat(EventDate)}
          </h5>
          <a
            className="border border-Falu100 py-[6px] px-[15px] font-medium text-Falu100 text-xl rounded hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in"
            href="https://calendar.google.com/calendar/ical/c_4179edfb1c5c58f507cd872efd2e53e3db535d0c596052e1ca2f51938d3727cd%40group.calendar.google.com/public/basic.ics"
          >
            Add to calendar
          </a>
        </div>

        <div className="mt-8">
          <div className="border-b-2 pb-2 mb-6 border-Neutral02">
            <TimeItem
              period={timetableData[0].period}
              icons={timetableData[0].icons}
              target={timetableData[0].target}
            />
            <TimeItem
              period={timetableData[1].period}
              icons={timetableData[1].icons}
              target={timetableData[1].target}
            />
            <TimeItem
              period={timetableData[2].period}
              icons={timetableData[2].icons}
              target={timetableData[2].target}
            />
          </div>
          <div className="border-b-2 pb-2 mb-6 border-Neutral02">
            <TimeItem
              period={timetableData[3].period}
              icons={timetableData[3].icons}
              target={timetableData[3].target}
            />
            <TimeItem
              period={timetableData[4].period}
              icons={timetableData[4].icons}
              target={timetableData[4].target}
            />
          </div>
          <div className="border-b-2 pb-2 mb-6 border-Neutral02">
            <TimeItem
              period={timetableData[5].period}
              icons={timetableData[5].icons}
              target={timetableData[5].target}
            />
          </div>
          <div className="border-b-2 pb-2 mb-6 border-Neutral02">
            <TimeItem
              period={timetableData[6].period}
              icons={timetableData[6].icons}
              target={timetableData[6].target}
            />
            <TimeItem
              period={timetableData[7].period}
              icons={timetableData[7].icons}
              target={timetableData[7].target}
            />
            <TimeItem
              period={timetableData[8].period}
              icons={timetableData[8].icons}
              target={timetableData[8].target}
            />
            <TimeItem
              period={timetableData[9].period}
              icons={timetableData[9].icons}
              target={timetableData[9].target}
            />
          </div>
          <div className="pb-2">
            <TimeItem
              period={timetableData[10].period}
              icons={timetableData[10].icons}
              target={timetableData[10].target}
            />
          </div>
        </div>
      </article>
    </div>
  )
}

interface TimeItemProp {
  period: string
  target: string
  icons: string
}

const TimeItem = ({ period, target, icons }: TimeItemProp) => {
  return (
    <div className="flex items-center justify-center mb-3">
      <div className="w-full h-14 bg-Blond20 rounded-3xl flex drop-shadow-[2px_4px_48px_rgba(0,0,0,0.1)]">
        <div className="flex items-center ml-2">
          <img src={icons} alt="tableIconOne" />
        </div>
        <div className="text-Neutral03 text-base font-normal flex items-center ml-3 basis-[105px]">
          {period}
        </div>
        <div className="font-normal text-base flex items-center flex-1">
          <span>{target}</span>
        </div>
      </div>
    </div>
  )
}
