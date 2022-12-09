import React from "react"
import { useRef } from "react"
import {NavLink} from "react-router-dom"

export default function Navbar() {

      const drawer = useRef<HTMLDivElement>(null)

      const closeDrawer = (value:string) => {
            if (value === "Action Close") drawer.current?.classList.add("-translate-x-full")

      }

      const openDrawer = (value:string) => {
            if (value === "Action Open") drawer.current?.classList.remove("-translate-x-full")
      }

      return (
            <React.Fragment>
                  <nav className="h-[120px] bg-transparent flex items-center w-full">
                        <div className="container relative flex items-center flex-shrink-0 justify-between mx-auto">
                              <span className="hidden md:flex items-center md:ml-4 lg:ml-12">
                                    <img src="./Logo.svg" className=" w-[125px] h-[70px]" alt="Flowbite Logo"/>
                              </span>
                              
                              <div className="md:hidden w-10 h-12 p-1 ml-8">
                                    <button className="w-10 flex justify-center" type="button" onClick={() => openDrawer("Action Open")}>
                                          <img src="./iconHamberger.svg" className="w-12 object-cover" />
                                    </button>
                              </div>
                              
                              <span className="md:hidden">
                                    <img src="./LogoBarcamp.svg" className=" w-[210px] h-[66px]" alt="Flowbite Logo" />
                              </span>

                              <div className="hidden md:flex md:order-2 lg:mr-12">
                                    <button type="button" className="py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded">Register</button>
                              </div>
                              <div className="hidden w-full md:flex md:items-center md:justify-around" id="navbar-sticky">
                                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 lg:space-x-20 md:mt-0 md:text-md md:font-medium">
                                          <li>
                                                <NavLink to="/home" className="block text-Falu100 text-xl pt-2">Home</NavLink>
                                          </li>
                                          <li>
                                                <NavLink to="/about"  className="block text-Falu100 text-xl pt-2">About</NavLink>
                                          </li>
                                          <li>
                                                <NavLink to="/faqs" className="block text-Falu100 text-xl pt-2">FAQS</NavLink>
                                          </li>
                                          <li>
                                                <NavLink to="/timetable" className="block text-Falu100 text-xl pt-2">Timetable</NavLink>
                                          </li>
                                          <li>
                                                <NavLink to="/session" className="block text-Falu100 text-xl pt-2">Session</NavLink>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>
                  
                  <div className="bg-Blond20 w-[300px] fixed top-0 left-0 h-screen rounded-r-xl shadow-2xl -translate-x-full transition-transform duration-300 ease-in" ref={drawer}>
                        <div className="flex justify-end py-5">
                              <button className="mr-5 p-2" onClick={() => closeDrawer("Action Close")}>
                                    <span>
                                          <img src="./cross.svg" alt="cross" />
                                    </span>
                              </button>
                        </div>

                        <div>
                              <ul>
                                    <li className="flex mt-12">
                                          <img src="./iconAbout.svg" className="ml-12 w-7"/>
                                          <NavLink to="/about"  className="mb-2 ml-5 text-Falu100 text-xl pt-2 font-semibold">About</NavLink>
                                    </li>
                                    <li className="flex mt-6"> 
                                          <img src="./iconFAQS.svg" className="ml-12 w-7"/>
                                          <NavLink to="/faqs" className="mb-2 ml-5  text-Falu100 text-xl pt-2 font-semibold">FAQS</NavLink>
                                    </li>
                                    <li className="flex mt-6">
                                          <img src="./iconTimetable.svg" className="ml-12 w-7"/>
                                          <NavLink to="/timetable" className="mb-2 ml-5  text-Falu100 text-xl pt-2 font-semibold">Timetable</NavLink>
                                    </li>
                                    <li className="flex mt-6">
                                          <img src="./iconSession.svg" className="ml-12 w-7"/>
                                          <NavLink to="/session" className="mb-2 ml-5  text-Falu100 text-xl pt-2 font-semibold">Session</NavLink>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </React.Fragment>
      )
}
