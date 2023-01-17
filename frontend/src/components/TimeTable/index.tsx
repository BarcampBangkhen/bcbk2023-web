import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'flowbite'
import { displaydateFormat } from '../Utils'
import { ApiBaseUrl, EventDate } from '../../Constant'
import { ITimetable } from '../../models/TImetable'
import axios from 'axios'

export default function TimeTable() {
  const navigate = useNavigate()
  const [timetableData, setTimetableData] = useState<ITimetable[]>([])

  useEffect(() => {
    window.addEventListener('resize', RedirectPath)

    return () => {
      window.removeEventListener('resize', RedirectPath)
    }
  }, [])

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

  //* ฟังชันก์ให้ redirect ไปยัง path /
  function RedirectPath() {
    if (window.outerWidth < 768) navigate('/#mytimetable')
  }

  return (
    <div className="container max-w-7xl mx-auto mt-4 md:mt-12 px-6 xl:px-0">
      <div className="flex justify-between">
        <h3 className="text-5xl text-Falu100 font-medium">Timetable</h3>
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
    <div className="flex items-center justify-between mb-3">
      <div className="text-Neutral03 text-base font-normal">{period}</div>
      <div className="w-[600px] screenTable:w-[680px] lg:w-[750px] h-14 bg-Blond20 rounded-3xl flex drop-shadow-[2px_4px_48px_rgba(0,0,0,0.1)] ">
        <div className="flex items-center ml-2">
          <img src={icons} alt="tableIconOne" />
        </div>
        <div className="font-normal text-xl flex items-center ml-14">
          <span>{target}</span>
        </div>
      </div>
    </div>
  )
}
