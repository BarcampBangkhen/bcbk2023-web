import { useEffect, useState } from 'react'

const MobileSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [displayUpBtn, setDisplayUpBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', AutomaticCloseDrawer)
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('resize', AutomaticCloseDrawer)
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  //* ฟังชันก์ให้ปิด Drawer อัตโนมัติ
  function AutomaticCloseDrawer() {
    if (window.outerWidth >= 768) {
      collapseSidebar()
    }
  }

  const scrollHandler = () => {
    setDisplayUpBtn(window.scrollY > 400)
  }

  const getSidebarTranslateClass = (isSidebarOpen: boolean) =>
    isSidebarOpen ? '' : '-translate-x-full'

  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState)

  const collapseSidebar = () => setSidebarOpen(false)

  const comebackHome = () => {
    window.location.href = '#mytop'
  }

  return (
    <div className="md:hidden" id="mytop">
      <div className="flex justify-between items-center ml-8 mt-4">
        <div className="flex justify-center ml-3">
          <button className="w-10 h-16" type="button" onClick={toggleSidebar}>
            <img src="./assets/iconHamberger.svg" className="object-cover w-full" />
          </button>
        </div>

        <div className="flex justify-center">
          <img src="./assets/LogoBarcamp.svg"></img>
        </div>
      </div>

      <aside
        className={`bg-Blond20 w-[300px] z-50 fixed top-0 left-0 h-screen rounded-r-xl shadow-2xl transition-transform duration-300 ease-in ${getSidebarTranslateClass(
          isSidebarOpen
        )}`}
      >
        <div className="flex justify-end py-5">
          <button className="mr-5 p-2" onClick={toggleSidebar}>
            <span>
              <img src="./assets/cross.svg" alt="cross" />
            </span>
          </button>
        </div>

        <div>
          <ul>
            <SidebarListItem
              title="Home"
              icon="./assets/iconHome.svg"
              onClick={collapseSidebar}
              id="mytop"
            />
            <SidebarListItem
              title="About"
              icon="./assets/iconAbout.svg"
              onClick={collapseSidebar}
              id="about"
            />
            <SidebarListItem
              title="FAQS"
              icon="./assets/iconFAQS.svg"
              onClick={collapseSidebar}
              id="myfaqs"
            />
            <SidebarListItem
              title="Timetable"
              icon="./assets/iconTimetable.svg"
              onClick={collapseSidebar}
              id="mytimetable"
            />
          </ul>
        </div>

        <div className="absolute left-2/4 bottom-32 -translate-x-2/4">
          <button className="bg-Falu100 w-44 py-[6px] px-[12px] font-medium text-white text-xl rounded">
            Register
          </button>
        </div>
      </aside>

      <div
        className={
          'fixed bottom-8 right-5 z-40' +
          (displayUpBtn ? '' : ' hidden')
        }
      >
        <div
          className="border w-[55px] h-[55px] cursor-pointer bg-Blond100 border-Rusty100 rounded-full flex justify-center items-center"
          onClick={comebackHome}
        >
          <img src="./assets/iconUp.svg" alt="iconUp" />
        </div>
      </div>
    </div>
  )
}

interface SidebarListItemProps {
  title: string
  icon: string
  id: string
  onClick: () => void
}

const SidebarListItem = ({
  title,
  icon,
  onClick,
  id
}: SidebarListItemProps) => {
  return (
    <li className="flex mt-6">
      <img src={icon} className="ml-12 w-7" />
      <a
        href={`/#${id}`}
        onClick={onClick}
        className="mb-2 ml-5 cursor-pointer  text-Falu100 text-xl pt-2 font-semibold"
      >
        {title}
      </a>
    </li>
  )
}

export default MobileSidebar
