import React from "react";
import {Routes , Route} from "react-router-dom"
import "flowbite";

import Home from "./components/Home";
import About from "./components/About";
import FAQS from "./components/FAQS";
import TimeTable from "./components/TimeTable";
import Session from "./components/Session";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App():JSX.Element {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="faqs" element={<FAQS/>} />
        <Route path="timetable" element={<TimeTable/>} />
        <Route path="session" element={<Session/>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}

export default App
