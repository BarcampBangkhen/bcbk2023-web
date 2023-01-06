import { NavLink } from "react-router-dom";
import "flowbite";

export default function Navbar():JSX.Element {
  return (
    <>
      <nav className="px-3 max-w-[1350px] mx-auto hidden md:flex h-[120px] bg-transparent items-center">
        <div className="flex justify-around w-full">
          
          {/* Logo Bicycle */}
          <span className="hidden md:flex items-center flex-shrink-0">
            <img
              src="./Logo.svg"
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
                <a href="/faqs" className="block text-Falu100 text-xl pt-2">
                  FAQS
                </a>
              </li>
              <li>
                <NavLink
                  to="/timetable"
                  className="block text-Falu100 text-xl pt-2"
                >
                  Timetable
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/session"
                  className="block text-Falu100 text-xl pt-2"
                >
                  Session
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="self-center">
            <button
              type="button"
              className="py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
