import React from "react";
import {Routes , Route} from "react-router-dom"
import "flowbite";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App():JSX.Element {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App
