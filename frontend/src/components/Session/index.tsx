import { useState , useRef , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "flowbite";


const tempSessionInfo:CardSessionProps[] = [
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odio.",
    owner:"Jane Doe",
  },
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odioม id posuere nulla auctor non. Morbi nec enim non metus vestibulum hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    owner:"Jane Doe",
  },
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odio.",
    owner:"Jane Doe",
  },
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odio.",
    owner:"Jane Doe",
  },
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odio.",
    owner:"Jane Doe",
  },
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odioม id posuere nulla auctor non. Morbi nec enim non metus vestibulum hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget commodo dui. Duis commodo erat sit amet est facilisis pellentesque.",
    owner:"Jane Doe",
  },
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odio id posuere nulla auctor non. Morbi nec enim non metus vestibulum hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    owner:"Jane Doe",
  },
  {
    title:"Lorem ipsum",
    text: "Nam varius turpis vitae gravida elementum. Curabitur aliquet ligula ut neque pulvinar aliquam. Integer semper sodales odio.",
    owner:"Jane Doe",
  },
]

export default function Session() {
  const [session , setSession] = useState<CardSessionProps[]>(tempSessionInfo)
	const cardCreateSession = useRef<HTMLDivElement>(null)

	const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("resize",RedirectPath)

    return () => {
      window.removeEventListener("resize",RedirectPath)
    }
  },[])


  //* ฟังชันก์ให้ redirect ไปยัง path /
  function RedirectPath(){
    if (window.outerWidth < 768)  navigate("/")
  }

	const toggleSession = () => {
		cardCreateSession.current?.classList.toggle("hidden")
		cardCreateSession.current?.classList.toggle("flex")
  }

  return (
    <div className='container max-w-[1300px] mx-auto mt-4 md:mt-16 px-6 xl:px-0'>
      <div className='flex justify-between'>
        <h3 className='text-5xl text-Falu100 font-medium'>Session</h3>
        <button onClick={toggleSession} className='bg-Falu100 py-[6px] px-[15px] font-medium text-white text-xl rounded'>Create new session</button>
      </div>
    
      <article className='flex mt-20 gap-x-6'>
        <div className='flex flex-col gap-y-6'>
          {session.filter((e,i) => i % 3 === 0).map((e,i) => {
            return <CardSession key={i} title={e.title} text={e.text} owner={e.owner}/>
          })}
        </div>

        <div className='flex flex-col gap-y-6'>
          {session.filter((e,i) => i % 3 === 1).map((e,i) => {
            return <CardSession key={i} title={e.title} text={e.text} owner={e.owner}/>
          })}
        </div>

        <div className='flex flex-col gap-y-6'>
          {session.filter((e,i) => i % 3 === 2).map((e,i) => {
            return <CardSession key={i} title={e.title} text={e.text} owner={e.owner}/>
          })}
        </div>
      </article>

			{/* toggle session */}
      <div className="hidden fixed top-0 left-0 right-0 bottom-0 z-40 justify-center items-center" ref={cardCreateSession}>
					<div className="w-[594px] h-[478px] p-4 bg-Blond20 rounded-lg drop-shadow-[2px_2px_32px_rgba(0,0,0,0.25)]">
						<div className="flex justify-between px-4 mt-4 w-full">
							<span className="text-2xl font-medium">Create New Session</span>
							<img src="./cross.svg" alt="cross" className="cursor-pointer" onClick={toggleSession}/>
						</div>

						<div className="w-full flex flex-col justify-center mt-3 px-4">
							<label className="font-normal text-xl mt-2">Session name <span className="text-red-600">*</span></label>
							<input type="text" placeholder="Name of your session" className="mt-2 border border-Neutral02 bg-transparent rounded w-[530px] focus:outline-none focus:ring-1 focus:ring-Neutral02 focus:border-Neutral02" />
						</div>

						<div className="w-full flex flex-col justify-center mt-2 px-4">
							<label className="font-normal text-xl mt-2">Session detail <span className="text-red-600">*</span></label>
							<textarea rows={5} cols={10} placeholder="Short description about your session" className="mt-2 border border-Neutral02 bg-transparent rounded w-[530px] focus:outline-none focus:ring-1 focus:ring-Neutral02 focus:border-Neutral02" />
						</div>

						<div className="text-end mt-2 mr-4">
							<span className=" font-medium text-base text-Neutral03">By Jane Doe</span>
						</div>

						<div className="w-full mt-3 flex justify-end">
							<button type="button" className="w-[138px] py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded mr-3 hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in">
								Discard
							</button>
							<button className='w-[134px] bg-Falu100 py-2 px-6 font-medium text-white text-xl rounded mr-4'>Submit</button>
						</div>
					</div>
      
			</div>
    </div>
  )
}

interface CardSessionProps {
  title:string
  text:string,
  owner:string
}

const CardSession = ({title , text , owner}:CardSessionProps) => {
  return (
    <div className='max-w-[417px] bg-Blond20 rounded-lg p-6 drop-shadow-[2px_4px_48px_rgba(0,0,0,0.1)]'>
      <h4 className=' text-2xl font-normal '>{title}</h4>
      <div className='mt-4 text-Neutral03'>{text}</div>
      <div className='mt-2 flex justify-end'>
        <span className='text-base font-normal text-Rusty70'>By {owner}</span>
      </div>
    </div>
  )
}