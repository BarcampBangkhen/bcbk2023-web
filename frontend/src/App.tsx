import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import FAQS from './components/FAQS'
import TimeTable from './components/TimeTable'
import Session from './components/Session'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileSidebar from './components/Sidebar'
import InProgress from './components/InProgress'

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Navbar />
      <MobileSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<FAQS />} />
        {/* TODO: Change from InProgress to target page */}
        <Route path="timetable" element={<TimeTable />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
