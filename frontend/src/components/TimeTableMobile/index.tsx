import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'flowbite'
import { displaydateFormat } from '../Utils'
import { EventDate } from '../../Constant'

const timetableData: TimeItemProp[] = [
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
    period: '10.50 - 11.10',
    target: 'รอบบรรยายที่ 1',
    icons: './TableIconFive.svg'
  },
  {
    period: '11.10 - 11.35',
    target: 'รอบบรรยายที่ 2',
    icons: './TableIconFive.svg'
  },
  {
    period: '12.05 - 13.00',
    target: 'รับประทานอาหารเที่ยง ณ โรงอาหาร IUP',
    icons: './TableIconSix.svg'
  },
  {
    period: '13.00 - 13.25',
    target: 'รอบบรรยายที่ 3',
    icons: './TableIconFive.svg'
  },
  {
    period: '13.30 - 13.55',
    target: 'รอบบรรยายที่ 4',
    icons: './TableIconFive.svg'
  },
  {
    period: '14.00 - 14.25',
    target: 'รอบบรรยายที่ 5',
    icons: './TableIconFive.svg'
  },
  {
    period: '14.30 - 14.55',
    target: 'รอบบรรยายที่ 6',
    icons: './TableIconFive.svg'
  },
  {
    period: '15.00 - 15.30',
    target: 'After Party',
    icons: './TableIconThree.svg'
  }
]

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
          <button className="border border-Falu100 py-[6px] px-[15px] font-medium text-Falu100 text-xl rounded hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in">
            Add to calendar
          </button>
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
