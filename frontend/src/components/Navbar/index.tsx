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
                  <nav className="h-[120px] bg-transparent flex items-center px-2 py-2.5 w-full z-20  border border-black">
                        <div className="container relative flex items-center justify-between mx-auto border border-black">
                              <span className="hidden md:flex items-center border border-black">
                                    <img src="./Logo.png" className=" w-[117px] h-[74px]" alt="Flowbite Logo" />
                              </span>
                              
                              <div className="text-center md:hidden">
                                    <button className="w-8 h-4 ml-1 flex justify-center" type="button" onClick={() => openDrawer("Action Open")}>
                                          <img src="./hamberger.png" className="w-full" />
                                    </button>
                              </div>
                              
                              <span className="md:hidden border border-black">
                                    <img src="./LogoBarcamp.png" className=" w-[210px] h-[66px]" alt="Flowbite Logo" />
                              </span>

                              <div className="hidden md:flex md:order-2">
                                    <button type="button" className="py-2 px-6 text-Falu text-xl font-medium border border-Falu rounded">Register</button>
                              </div>
                              <div className="hidden w-full md:flex md:items-center md:justify-around border" id="navbar-sticky">
                                    <ul className="flex flex-col p-4 mt-4 border border-black   md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
                                          <li>
                                                <a href="#" className="block  text-Falu text-xl border border-black" aria-current="page">Home</a>
                                          </li>
                                          <li>
                                                <a href="#" className="block  text-Falu text-xl border border-black">About</a>
                                          </li>
                                          <li>
                                                <a href="#" className="block  text-Falu text-xl border border-black">FAQS</a>
                                          </li>
                                          <li>
                                                <a href="#" className="block  text-Falu text-xl border border-black">Timetable</a>
                                          </li>
                                          <li>
                                                <a href="#" className="block  text-Falu text-xl border border-black">Session</a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>
                  
                  <div className="bg-Blond20 w-64 fixed top-0 left-0 h-screen rounded-r-xl shadow-2xl transition-transform duration-300 ease-in" ref={drawer}>
                        <div className="flex justify-end py-5">
                              <button className=" mr-5 p-2" onClick={() => closeDrawer("Action Close")}>
                                    <span>
                                          <img src="./cross.png" alt="cross" />
                                    </span>
                              </button>
                        </div>
                  </div>
            </React.Fragment>
      )
}
