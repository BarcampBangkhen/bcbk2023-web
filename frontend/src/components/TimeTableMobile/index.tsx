import { useEffect, useState } from 'react'
import 'flowbite'
import { displaydateFormat } from '../Utils'
import { ApiBaseUrl, EventDate } from '../../Constant'
import axios from 'axios'
import { ITimetable } from '../../models/TImetable'
import { useNavigate } from 'react-router-dom'

export default function TimeTableMobile() {
  const [timetableData, setTimetableData] = useState<ITimetable[]>([])
  const navigate = useNavigate()

  const getTimetable = async () => {
    axios
      .get<ITimetable[]>(ApiBaseUrl + '/timetable')
      .then((res) => {
        setTimetableData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getTimetable()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', RedirectPath)

    return () => {
      window.removeEventListener('resize', RedirectPath)
    }
  }, [])

  //* ฟังชันก์ให้ redirect ไปยัง path /timetable
  function RedirectPath() {
    if (window.outerWidth >= 768) navigate('/timetable')
  }

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
          {timetableData.map((time) => {
            if (time.icon === '-') {
              return <div className="border-b-2 pb-2 mb-6 border-Neutral02" />
            }
            return (
              <TimeItem
                period={time.time}
                icons={'icons/timetable/' + time.icon}
                target={time.title}
              />
            )
          })}
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
