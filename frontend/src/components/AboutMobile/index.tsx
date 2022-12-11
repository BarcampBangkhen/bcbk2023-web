import React from 'react'
import "flowbite";

export default function AboutMobile() {
  return (
      <div className='container max-w-7xl mx-auto mt-52 md:mt-16' id="myabout">
            <h1 className="text-3xl text-Falu100 font-bold pl-8">About us</h1>
            
            <div className='px-8'>
                  <div className='h-1 border-b-2 border-Falu100 text-lg mt-4'/>
            </div>
            
            <div className='flex flex-col items-center mt-8'>
                  <div className="bg-Blond20 z-20 p-12 pl-14 max-w-[390px] rounded-3xl drop-shadow-lg">
                        <h2 className="text-center text-2xl font-bold mb-6">
                              What is <span className='text-Rusty100'>Barcamp</span> ?
                        </h2>
                        <p className="font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat dolor vitae omnis amet rerum nulla consectetur! Eaque harum quibusdam delectus eos nostrum nisi, fugit quis ducimus dolor? Voluptas, nesciunt, quibusdam officia fugiat in inventore quidem, vero numquam possimus eveniet maiores.</p>
                  </div>
                  <div className="bg-Blond20 mt-6 p-12 pl-14 max-w-[390px] rounded-3xl drop-shadow-lg">
                        <h2 className="text-center text-2xl font-bold mb-6">Participants</h2>
                        <p className="font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptatum blanditiis perspiciatis in repellendus officiis maxime distinctio minima porro et, tenetur enim maiores amet itaque cum! Iusto aperiam officia, officiis commodi nobis dolor qui, necessitatibus, fugiat dolorum natus quia dignissimos?</p>
                  </div>
            </div>
      </div>
  )
}