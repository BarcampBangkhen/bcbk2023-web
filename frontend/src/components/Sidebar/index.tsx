import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MobileSidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", AutomaticCloseDrawer)

        return () => {
            window.removeEventListener("resize", AutomaticCloseDrawer)
        }
    }, [])

    //* ฟังชันก์ให้ปิด Drawer อัตโนมัติ
    function AutomaticCloseDrawer() {
        if (window.outerWidth > 768) {
            if (!isSidebarOpen) {
                toggleSidebar()
            }
        }
    }

    const getSidebarTranslateClass = (isSidebarOpen: boolean) => isSidebarOpen ? "" : "-translate-x-full"

    const toggleSidebar = () => setSidebarOpen(prevState => !prevState)

    const collapseSidebar = () => setSidebarOpen(false)

    return (
        <div className="md:hidden">
            <div className="w-10 h-12 p-1 ml-8 mt-8">
                <button className="w-10 flex justify-center" type="button" onClick={toggleSidebar}>
                    <img src="./iconHamberger.svg" className="object-cover" />
                </button>
            </div>
            <div className={`bg-Blond20 w-[300px] fixed top-0 left-0 h-screen rounded-r-xl shadow-2xl transition-transform duration-300 ease-in ${getSidebarTranslateClass(isSidebarOpen)}`}>
                <div className="flex justify-end py-5">
                    <button className="mr-5 p-2" onClick={toggleSidebar}>
                        <span>
                            <img src="./cross.svg" alt="cross" />
                        </span>
                    </button>
                </div>

                <div>
                    <ul>
                        <SidebarListItem title="Home" icon="./iconHome.svg" onClick={collapseSidebar} />
                        <SidebarListItem title="FAQS" icon="./iconFAQS.svg" onClick={collapseSidebar} />
                        <SidebarListItem title="Timetable" icon="./iconTimetable.svg" onClick={collapseSidebar} />
                        <SidebarListItem title="Session" icon="./iconSession.svg" onClick={collapseSidebar} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

interface SidebarListItemProps {
    title: string,
    icon: string,
    onClick: () => void
}

const SidebarListItem = ({ title, icon, onClick }: SidebarListItemProps) => {
    const path = title == "Home" ? "/" : `/${title.toLowerCase()}`

    return <li className="flex mt-6">
        <img src={icon} className="ml-12 w-7" />
        <NavLink to={path} onClick={onClick} className="mb-2 ml-5  text-Falu100 text-xl pt-2 font-semibold">{title}</NavLink>
    </li>
}

export default MobileSidebar