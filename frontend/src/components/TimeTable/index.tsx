import "flowbite";

export default function TimeTable() {
  return (
    <div className='container max-w-7xl mx-auto mt-4 md:mt-12'>
      <div className='flex justify-between'>
        <h3 className='text-5xl text-Falu100 font-medium'>Timetable</h3>
      </div>

      <article className='max-w-4xl ml-auto mt-6'>
        <div className="flex justify-between">
          <h5 className='font-normal text-2xl'>11 February 2023</h5>
          <button className='border border-Falu100 py-[6px] px-[15px] font-medium text-Falu100 text-xl rounded'>Add to calendar</button>
        </div>
        
        <div className="mt-8">
          <div className="border-b-4 pb-2 border-Neutral02">
            <TimeItem/>
            <TimeItem/>
            <TimeItem/>
            <TimeItem/>
          </div>
        </div>
      </article>
    </div>
  )
}



const TimeItem = () => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="text-Neutral03 text-base font-normal">08.00 - 09.30</div>
      <div className="w-[750px] h-14 bg-Blond20 rounded-3xl flex drop-shadow-[2px_4px_48px_rgba(0,0,0,0.1)] ">
        <div className="flex items-center ml-2">
          <img src="./TableIconOne.svg" alt="tableIconOne" />
        </div>
        <div className="font-normal text-xl flex items-center ml-14">
          <span>ลงทะเบียนเข้าร่วมกิจกรรม</span>
        </div>
      </div>
    </div>
    
  )
}

