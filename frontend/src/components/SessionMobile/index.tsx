import { useState , useRef} from "react";
import "flowbite";
import "../../App.css"


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

export default function SessionMobile() {
  const [session , setSession] = useState<CardSessionProps[]>(tempSessionInfo)
	const cardCreateSession = useRef<HTMLDivElement>(null)

	const toggleSession = () => {
		cardCreateSession.current?.classList.toggle("hidden")
		cardCreateSession.current?.classList.toggle("flex")
    }

  return (
    <div className='md:hidden container max-w-[1300px] mx-auto mt-36 md:mt-16 px-6' id="mysession">

        <div>
            <div className="border-b-2 border-Falu100 text-lg mt-4">
                <h1 className="text-3xl text-Falu100 font-bold">Session</h1>
            </div>
        </div>
      
        <div className='flex justify-center mt-8'>
            <button onClick={toggleSession} className='bg-Falu100 py-[6px] px-[15px] font-medium text-white text-xl rounded'>Create new session</button>
        </div>
    
        <article className='flex mt-14 gap-x-6'>
            <div className='hidden sm:flex flex-col gap-y-6'>
            {session.filter((e,i) => i % 2 === 0).map((e,i) => {
                return <CardSession key={i} title={e.title} text={e.text} owner={e.owner}/>
            })}
            </div>

            <div className='hidden sm:flex flex-col gap-y-6'>
            {session.filter((e,i) => i % 2 === 1).map((e,i) => {
                return <CardSession key={i} title={e.title} text={e.text} owner={e.owner}/>
            })}
            </div>

            <div className='flex flex-col items-center sm:hidden gap-y-6 w-full'>
            {session.map((e,i) => {
                return <CardSession key={i} title={e.title} text={e.text} owner={e.owner}/>
            })}
            </div>
        </article>

	    {/* toggle session */}
        <div className="hidden fixed top-0 left-0 right-0 bottom-0 z-40 justify-center items-center" ref={cardCreateSession}>
            <div className="max-w-[380px] h-[470px] p-4 bg-Blond20 rounded-lg drop-shadow-[2px_2px_32px_rgba(0,0,0,0.25)] fadeModal">
                <div className="flex justify-between px-4 mt-3 w-full">
                    <span className="text-2xl font-medium">Create New Session</span>
                    <img src="./cross.svg" alt="cross" className="cursor-pointer" onClick={toggleSession}/>
                </div>

                <div className="w-full flex flex-col justify-center mt-3 px-4">
                    <label className="font-normal text-xl mt-2">Session name <span className="text-red-600">*</span></label>
                    <input type="text" placeholder="Name of your session" className="mt-2 border border-Neutral02 bg-transparent rounded w-[285px] focus:outline-none focus:ring-1 focus:ring-Neutral02 focus:border-Neutral02" />
                </div>

                <div className="w-full flex flex-col justify-center mt-2 px-4">
                    <label className="font-normal text-xl mt-2">Session detail <span className="text-red-600">*</span></label>
                    <textarea rows={5} cols={5} placeholder="Short description about your session" className="mt-2 border border-Neutral02 bg-transparent rounded w-[285px] focus:outline-none focus:ring-1 focus:ring-Neutral02 focus:border-Neutral02" />
                </div>

                <div className="text-end mt-2 mr-4">
                    <span className=" font-medium text-base text-Neutral03">By Jane Doe</span>
                </div>

                <div className="w-full mt-5 flex justify-end">
                    <button type="button" className="w-[138px] py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded mr-3 hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in">
                        Discard
                    </button>
                    <button className='w-[134px] bg-Falu100 py-2 px-6 font-medium text-white text-xl rounded mr-3'>Submit</button>
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