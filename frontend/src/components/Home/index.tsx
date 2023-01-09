import React from 'react'
import "flowbite";

import AboutMobile from '../AboutMobile'
import FAQSMobile from '../FAQSMobile'
import SessionMobile from '../SessionMobile';
import TimeTableMobile from '../TimeTableMobile';

export default function Home() {  
  return (
    <React.Fragment>
      <div className='container max-w-7xl mx-auto mt-4 md:mt-20'>
        <div className='flex flex-col-reverse items-center md:items-stretch md:flex-row '>
          
          {/* Scope Left */}
          <div className='ml-4'>
            <img src="./LogoBarcamp.svg" alt="LogoBarcamp" className='hidden md:block md:w-[692px] md:h-[217px]'/>
            
            <div className='mt-4 text-center md:text-start md:mt-12 md:ml-6 lg:ml-32'>
              <p className='text-4xl text-Falu100 font-bold md:text-black md:text-xl md:font-semibold'>11 February 2023</p>
              <p className='text-lg mt-1 md:mt-0 font-semibold'>At IUP Building 17,Kasetsart University</p>
            </div>
            
            <div className='flex justify-center md:justify-start mt-8 md:ml-6 lg:ml-32'>
              <button className='bg-Falu100 py-[6px] px-[12px] font-medium text-white text-xl rounded'>Register now</button>
              <span className='hidden md:inline-flex border-2 border-Rusty100 ml-5 py-[4px] px-[10px] items-center rounded-3xl font-medium text-lg'>
                <img src="./iconhourglass.svg" alt="hourglass" className='mr-2' />
                100 Days left
              </span>
            </div>
          </div>
          
          {/* Scope Right */}
          <div className='w-[385px] h-[240px] md:w-[825px] md:h-[514px]'>
            <img src="./Logo.svg" alt="LogoBarcamp" className='w-full md:ml-5'/>
          </div>
        </div>
      </div>

      {/* display page AboutMobile when the size screen < 768px */}
      <AboutMobile />
      <FAQSMobile/>
      <SessionMobile/>
      <TimeTableMobile/>
    </React.Fragment>
  )
}
