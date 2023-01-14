import 'flowbite'
import {
  FacebookProfile,
  InstagramProfile,
  TwitterProfile
} from '../../Constant'

export default function Footer() {
  return (
    <div className="container max-w-7xl mx-auto mt-14 md:mt-32 lg:mt-60 xl:mt-48 md:p-8 md:pb-16">
      <div className=" bg-Blond20 md:bg-Blond70 w-full px-[55px] lg:px-[80px] py-[30px] md:rounded-lg md:drop-shadow-2xl flex flex-col items-center md:block md:items-start">
        {/* block 1 */}
        <div className="w-80 text-center mb-8 md:w-auto md:mb-0 md:flex md:justify-between md:items-center">
          <img
            src="./LogoBarcamp.svg"
            className="hidden md:block w-[250px] h-[90px]"
          ></img>
          <div>
            <p className="text-base">ร่วมสนับสนุน Barcamp Bangkhen ติดต่อ</p>
            <a
              className="font-medium md:text-2xl lg:text-3xl md:font-semibold"
              href="mailto:barcamp.bkn@gmail.com"
            >
              barcamp.bkn@gmail.com
            </a>
          </div>
        </div>

        <hr className="hidden md:block md:my-14 md:border-black" />

        {/* block 2 */}
        <div className="flex">
          <div className="hidden md:block">
            <div className="table w-80 h-full">
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

          <div className="w-72 md:w-full flex md:justify-end">
            <div className="w-full md:basis-[270px] lg:basis-[340px]">
              <p className="text-center font-medium md:text-start text-xl md:font-semibold">
                Keep in Touch
              </p>
              <p className="text-center md:text-start font-medium">
                ติดตามข่าวสารของพวกเรา
              </p>
              <div className="flex mt-4 justify-center md:justify-start">
                <a
                  href={FacebookProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./iconFacebook.svg" />
                </a>
                <a
                  href={TwitterProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/iconTwitter.svg" className="ml-4" />
                </a>
                <a
                  href={InstagramProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/iconInstagram.svg" className="ml-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* block 3 */}
        <div className="mt-20 md:mt-10 text-base text-center md:text-start md:text-lg">
          Copyright © 2022 Barcamp Bangkhen. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}
