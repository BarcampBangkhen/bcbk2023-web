import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* Footer Div */}
        <div className="bg-Blond70 mx-24 my-10 px-[82px] py-[30px] rounded-lg">
            {/* Top Div */}
            <div className="mb-10 flex justify-between">
                <img src="LogoBarcamp.png" className="w-[289px] h-[91px] inline"></img>
                <div className="inline-block">
                    <p className="">ร่วมสนับสนุน Barcamp Bangkhen ติดต่อ</p>
                    <p className="text-3xl font-bold">barcamp.bkn@gmail.com</p>
                </div>
            </div>
            <hr className="mb-10 border border-Black border-[1px]"/>
            {/* Bottom Div */}
            <div className="mb-10 flex justify-between">
                {/* Left */}
                <div className="table">
                    <div className="table-header-group text-2xl font-semibold">
                        <p className="table-cell w-[200px]">About Us</p>
                        <p className="table-cell">Menu</p>
                    </div>
                    <div className="table-row-group text-Falu text-lg font-semibold">
                        <p className="table-cell">About</p>
                        <p className="table-cell">Timetable</p>
                    </div>
                    <div className="table-row-group text-Falu text-lg font-semibold">
                        <p className="table-cell">FAQs</p>
                        <p className="table-cell">Session</p>
                    </div>
                </div>
                {/* Right */}
                <div>
                    <p className="text-2xl font-semibold">Keep in Touch</p>
                    <p>ติดตามข่าวสารของพวกเรา</p>
                    <img src="#"></img>
                    <img src="#"></img>
                    <img src="#"></img>
                </div>
            </div>
            <p>Copyright © 2022 Barcamp Bangkhen. All Rights Reserved.</p>
        </div>
    </div>
  )
}
