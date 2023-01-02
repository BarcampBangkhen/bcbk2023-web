import React , { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "flowbite";

export default function About() {
  
  const navigate = useNavigate()
  
  useEffect(() => {
    window.addEventListener("resize",RedirectPath)
    
    return () => {
      window.removeEventListener("resize",RedirectPath)
    } 
  },[])

  //* ฟังชันก์ให้ redirect ไปยัง path /
  function RedirectPath(){
    if (window.outerWidth <= 768)  navigate("/")
  }
  
  return (
    <React.Fragment>
      <div className='container xl:relative max-w-7xl mx-auto md:mt-16 h-auto lg:h-[650px]'>
        <h1 className="text-5xl text-Falu100 font-bold pl-20">About us</h1>
        
        <div className='flex flex-col items-center xl:block mt-8 xl:mt-0'>
          <div className="bg-Blond20 xl:absolute xl:top-24 xl:right-20 z-20 p-12 pl-14 max-w-[530px] rounded-3xl drop-shadow-xl">
            <h2 className="text-5xl font-bold mb-6">
              What is <span className='text-Rusty100'>Barcamp</span> ?
            </h2>
            <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sollicitudin diam. Aliquam malesuada malesuada mollis. Ut nec urna lectus. Fusce neque urna, ornare ut sollicitudin at, volutpat quis ex. Donec tempor ac sapien sit amet hendrerit. Duis vestibulum purus nisl, ac vulputate nibh sodales ut. Maecenas accumsan mauris sit amet diam malesuada mattis.</p>
          </div>
          
          <div className="bg-Blond20 mt-8 xl:mt-0 xl:absolute z-10 xl:top-72 xl:left-44 p-12 pl-14 max-w-[550px] rounded-3xl drop-shadow-xl">
            <h2 className="text-5xl font-bold mb-6">Participants</h2>
            <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sollicitudin diam. Aliquam malesuada malesuada mollis. Ut nec urna lectus. Fusce neque urna, ornare ut sollicitudin at, volutpat quis ex. Donec tempor ac sapien sit amet hendrerit. Duis vestibulum purus nisl, ac vulputate nibh sodales ut. Maecenas accumsan mauris sit amet diam malesuada mattis.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
