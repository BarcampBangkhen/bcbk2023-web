import React from 'react'


export default function Footer() {
  return (
    <div className='container max-w-7xl mx-auto mt-8 md:mt-32 lg:mt-72  xl:mt-48 p-4 pb-16'>
        <div className=" bg-Blond20 md:bg-Blond70 w-full px-[82px] py-[30px] rounded-lg drop-shadow-xl flex flex-col items-center md:block md:items-start">
            
             <div className="w-80 text-center mb-8 md:w-auto md:mb-0 md:flex md:justify-between md:items-center">
                <img src="./LogoBarcamp.svg" className="hidden md:block w-[289px] h-[91px]"></img>
                <div>
                    <p className="text-base">ร่วมสนับสนุน Barcamp Bangkhen ติดต่อ</p>
                    <p className="text-2xl font-medium md:text-3xl md:font-semibold">barcamp.bkn@gmail.com</p>
                </div>
            </div>
            
            <hr className="hidden md:block md:my-14 md:border-black"/>
            
            <div className="block md:grid md:grid-cols-2">

                <div className='hidden md:block'>
                    <div className='table w-80 h-full'>
                        <div className="table-header-group">
                            <div className="table-row text-2xl">
                                <div className="table-cell ">About Us</div>
                                <div className="table-cell ">Menu</div>
                            </div>
                        </div>
                        <div className="table-row-group">
                            <div className="table-row text-xl font-medium text-Falu100">
                                <p className="table-cell pt-6 ">About</p>
                                <p className="table-cell pt-6 ">Timetable</p>
                            </div>

                            <div className="table-row text-xl font-medium text-Falu100">
                                <p className="table-cell pt-1 ">FAQs</p>
                                <p className="table-cell pt-1 ">Session</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-72 md:w-auto'>
                    <div className='w-full ml-0 md:ml-36 lg:ml-52 md:justify-start md:justify-self-end'>
                        <p className="text-center font-medium md:text-start text-xl md:font-semibold">Keep in Touch</p>
                        <p className='text-center md:text-start font-medium'>ติดตามข่าวสารของพวกเรา</p>
                        <div className='flex mt-4 justify-center md:justify-start'>
                            <img src="./iconFacebook.svg" />
                            <img src="/iconTwitter.svg" className='ml-4' />
                            <img src="/iconInstagram.svg" className='ml-4' />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mt-12 md:mt-4 text-base text-center md:text-start md:text-lg'>
                Copyright © 2022 Barcamp Bangkhen. All Rights Reserved.
            </div>
        </div>
    </div>
  )
}
