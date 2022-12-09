import React from 'react'

export default function About() {
  return (
    <div>
      <h1 className="text-7xl font-bold mt-32 ml-24">About Us</h1>
      {/* Right Div */}
      <div className="bg-Blond20 absolute z-20 top-[20rem] left-[40%] py-14 px-12 max-w-[550px] rounded-3xl drop-shadow-[2px_4px_48px_rgba(0,0,0,0.1)]">
        <h2 className="text-5xl font-bold mb-6">
          What is <span className='text-Rusty'>Barcamp</span> ?
        </h2>
        <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      {/* Left Div */}
      <div className="bg-Blond20 z-10 absolute top-[40rem] left-[15%] py-14 px-12 max-w-[550px] rounded-3xl drop-shadow-[2px_4px_48px_rgba(0,0,0,0.1)]">
        <h2 className="text-5xl font-bold mb-6">Participants</h2>
        <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}
