import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'flowbite'
import { displaydateFormat } from '../Utils'
import { EventDate } from '../../Constant'

export const timetableData: TimeItemProp[] = [
  {
    period: '08.00 - 09.30',
    target: 'ลงทะเบียนเข้าร่วมกิจกรรม และ เสนอหัวข้อบรรยาย',
    icons: './TableIconOne.svg'
  },
  {
    period: '09.30 - 09.45',
    target: 'ลงคะแนนเสียง',
    icons: './TableIconTwo.svg'
  },
  {
    period: '09.45 - 10.00',
    target: 'พิธีเปิด และ ถ่ายรูปหมู่ แจกอาหารว่าง',
    icons: './TableIconThree.svg'
  },
  {
    period: '10.05 - 10.55',
    target: 'รอบบรรยายที่ 1',
    icons: './TableIconFive.svg'
  },
  {
    period: '11.00 - 11.50',
    target: 'รอบบรรยายที่ 2',
    icons: './TableIconFive.svg'
  },
  {
    period: '11.50 - 12.40',
    target: 'รับประทานอาหารเที่ยง ณ โรงอาหาร IUP',
    icons: './TableIconSix.svg'
  },
  {
    period: '12.45 - 13.35',
    target: 'รอบบรรยายที่ 3',
    icons: './TableIconFive.svg'
  },
  {
    period: '13.40 - 14.30',
    target: 'รอบบรรยายที่ 4',
    icons: './TableIconFive.svg'
  },
  {
    period: '14.35 - 15.25',
    target: 'รอบบรรยายที่ 5',
    icons: './TableIconFive.svg'
  },
  {
    period: '15.30 - 16.20',
    target: 'รอบบรรยายที่ 6',
    icons: './TableIconFive.svg'
  },
  {
    period: '16.20 - 17.20',
    target: 'After Party',
    icons: './TableIconThree.svg'
  }
]

export default function TimeTable() {
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
