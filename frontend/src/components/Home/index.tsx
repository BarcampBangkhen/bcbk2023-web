import React, { useEffect, useState } from 'react'
import 'flowbite'

import TimeTableMobile from '../TimeTableMobile'
import pluralize from 'pluralize'
import { EventDate, RegistrationLink } from '../../Constant'
import { displaydateFormat, getDateInBangkokTimezone } from '../Utils'
import About from '../About'
import FAQS from '../FAQS'
import TimeTable from '../TimeTable'

const oneSecond = 1000
const oneMinute = 60 * oneSecond
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour

export default function Home() {
  const [remaining, setRemaining] = useState<string>('')
  const [isMobileView, setMobileView] = useState(false)

  const computeRemainingDays = () => {
    const bangkokDate = getDateInBangkokTimezone(new Date())
    const diffDate = EventDate.getTime() - bangkokDate.getTime()
    const diffDays = Math.max(0, Math.floor(diffDate / oneDay))
    if (diffDays > 0) return pluralize('day', diffDays, true) + ' left'
    const diffHours = Math.max(0, Math.floor(diffDate / oneHour))
    if (diffHours > 0) return pluralize('hour', diffHours, true) + ' left'
    const diffMinutes = Math.max(0, Math.floor(diffDate / oneMinute))
    if (diffMinutes > 0) return pluralize('minute', diffMinutes, true) + ' left'
    const diffSeconds = Math.max(0, Math.floor(diffDate / oneSecond))
    if (diffSeconds > 0) return pluralize('second', diffSeconds, true) + ' left'
    return 'Event started'
  }

  const getCountdown = () => {
    const computedRemaining = computeRemainingDays()
    setRemaining(computedRemaining)
    let nextInterval = 0
    if (computedRemaining.includes('day')) nextInterval = oneDay
    else if (computedRemaining.includes('hour')) nextInterval = oneHour
    else if (computedRemaining.includes('minute')) nextInterval = oneMinute
    else if (computedRemaining.includes('second')) nextInterval = oneSecond
    return nextInterval
  }

  useEffect(() => {
    const intervalTime = getCountdown()
    if (intervalTime === 0) return () => {}
    const remainingInterval = setInterval(() => {
      getCountdown()
    }, intervalTime)
    return () => {
      clearInterval(remainingInterval)
    }
  }, [remaining])

  const checkMobileView = () => setMobileView(window.outerWidth < 768)

  useEffect(() => {
    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    return () => {
      window.removeEventListener('resize', checkMobileView)
    }
  }, [])

  return (
    <React.Fragment>
      <div className="container max-w-7xl mx-auto mt-4 md:mt-20">
        <div className="flex flex-col-reverse items-center md:items-stretch md:flex-row ">
          {/* Scope Left */}
          <div className="ml-4">
            <img
              src="./LogoBarcamp.svg"
              alt="LogoBarcamp"
              className="hidden md:block md:w-[692px] md:h-[217px]"
            />

            <div className="mt-4 text-center md:text-start md:mt-12 md:ml-6 lg:ml-32">
              <p className="text-4xl text-Falu100 font-bold md:text-black md:text-xl md:font-semibold">
                {displaydateFormat(EventDate)}
              </p>
              <p className="text-lg mt-1 md:mt-0 font-semibold">
                At IUP Building (17), Kasetsart University
              </p>
            </div>

            <div className="flex justify-center md:justify-start mt-8 md:ml-6 lg:ml-32">
              <a
                href={RegistrationLink}
                target="_blank"
                rel="Registration"
                className="bg-Falu100 py-[6px] px-[12px] font-medium text-white text-xl rounded"
              >
                Register now
              </a>
              <span className="hidden md:inline-flex border-2 border-Rusty100 ml-5 py-[4px] px-[15px] items-center rounded-3xl font-medium text-lg">
                <img
                  src="./iconhourglass.svg"
                  alt="hourglass"
                  className="mr-2"
                />
                {remaining}
              </span>
            </div>
          </div>

          {/* Scope Right */}
          <div className="w-[385px] h-[240px] md:w-[825px] md:h-[514px]">
            <img
              src="./Logo.svg"
              alt="LogoBarcamp"
              className="w-full md:ml-5"
            />
          </div>
        </div>
      </div>

      {/* display page AboutMobile when the size screen < 768px */}
      {isMobileView && <About />}
      {isMobileView && <FAQS />}
      {isMobileView && <TimeTable />}
    </React.Fragment>
  )
}
