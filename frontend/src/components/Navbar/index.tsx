import React , { useRef , useEffect } from "react"
import {NavLink} from "react-router-dom"
import "flowbite";


export default function Navbar() {
      return (
            <>
                  <nav className="hidden md:flex h-[120px] bg-transparent items-center w-full">
                        <div className="container relative flex items-center flex-shrink-0 justify-between mx-auto">
                              
                              {/* Logo Bicycle */}
                              <span className="hidden md:flex items-center md:ml-4 lg:ml-16">
                                    <img src="./Logo.svg" className=" w-[125px] h-[70px]" alt="Flowbite Logo"/>
                              </span>
                              <div className="hidden w-full md:flex md:items-center md:justify-around" id="navbar-sticky">
                                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 lg:space-x-20 md:mt-0 md:text-md md:font-medium">
                                          <li>
                                                <NavLink to="/" className="block text-Falu100 text-xl pt-2">Home</NavLink>
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
                                          <li>
                                                <button type="button" className="py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded">Register</button>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>
            </>
      )
}
