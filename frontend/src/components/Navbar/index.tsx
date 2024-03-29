import { NavLink } from 'react-router-dom'
import 'flowbite'
import { RegistrationLink } from '../../Constant'

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="pl-2 pr-6 max-w-[1350px] mx-auto hidden md:flex h-[120px] bg-transparent items-center">
        <div className="flex justify-around w-full">
          {/* Logo Bicycle */}
          <span className="hidden md:flex items-center flex-shrink-0">
            <img
              src="./assets/Logo.svg"
              className=" w-[125px] h-[70px]"
              alt="Flowbite Logo"
            />
          </span>

          {/* menu */}
          <div className="hidden md:flex flex-grow items-center justify-around">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-10 lg:space-x-24 md:mt-0 md:text-md md:font-medium">
              <li>
                <NavLink to="/" className="block text-Falu100 text-xl pt-2">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block text-Falu100 text-xl pt-2"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/faqs" className="block text-Falu100 text-xl pt-2">
                  FAQS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/timetable"
                  className="block text-Falu100 text-xl pt-2"
                >
                  Timetable
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="self-center">
            <a
              href={RegistrationLink}
              target="_blank"
              rel="Registration"
              className="py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
