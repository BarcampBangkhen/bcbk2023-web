import React from 'react'
import { useEffect , useState } from 'react'

import AboutMobile from '../AboutMobile'

export default function About() {

  const [displayAboutMobile,setDisplayAboutMobile] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("resize",() => {
      //console.log(window.outerWidth)
      if (window.outerWidth <= 1300){
        setDisplayAboutMobile(true)
      }else{
        setDisplayAboutMobile(false)
      }
    })
  },[])

  

  return (
    <React.Fragment>
      <div className='container xl:relative max-w-7xl mx-auto mt-4 md:mt-16 h-auto lg:h-[650px]'>
      <h1 className="text-6xl font-bold pl-20">About us</h1>
      
      <div className='flex flex-col items-center xl:block mt-8 xl:mt-0'>
        <div className="bg-Blond20 xl:absolute xl:top-0 xl:right-12 z-20 p-12 pl-14 max-w-[550px] rounded-3xl drop-shadow-xl">
          <h2 className="text-5xl font-bold mb-6">
            What is <span className='text-Rusty100'>Barcamp</span> ?
          </h2>
          <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae inventore veniam deserunt temporibus ea repellendus error modi, molestias deleniti, recusandae tenetur sapiente alias quisquam nam dolor! Ipsum enim magni architecto, assumenda blanditiis vitae voluptates aut modi debitis, dolor atque inventore quod sint quisquam consequuntur minima earum minus? Ab nobis quis provident neque, ipsam explicabo, commodi repellendus tempora, assumenda libero deleniti sint facere perspiciatis molestiae velit. Sit amet voluptate deserunt?</p>
        </div>
        
        <div className="bg-Blond20 mt-8 xl:mt-0 xl:absolute z-10 xl:top-60 xl:left-44 p-12 pl-14 max-w-[550px] rounded-3xl drop-shadow-xl">
          <h2 className="text-5xl font-bold mb-6">Participants</h2>
          <p className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae inventore veniam deserunt temporibus ea repellendus error modi, molestias deleniti, recusandae tenetur sapiente alias quisquam nam dolor! Ipsum enim magni architecto, assumenda blanditiis vitae voluptates aut modi debitis, dolor atque inventore quod sint quisquam consequuntur minima earum minus? Ab nobis quis provident neque, ipsam explicabo, commodi repellendus tempora, assumenda libero deleniti sint facere perspiciatis molestiae velit. Sit amet voluptate deserunt?</p>
        </div>
      </div>
    </div>

    </React.Fragment>
    
  )
}
