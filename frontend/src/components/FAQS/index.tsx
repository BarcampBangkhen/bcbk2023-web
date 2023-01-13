import React, { useEffect , useRef , useState } from "react";
import { useNavigate } from "react-router-dom";
import "flowbite";
import "../../App.css"

export default function FAQS() {
  const accordionBtn = useRef<HTMLButtonElement[] | null[]>([])
  const accordionBody = useRef<HTMLDivElement[] | null[]>([])
  const cardAskQuestion = useRef<HTMLDivElement>(null)

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

  //* create temporary data as serverside haven't generate yet
  const [data,setData] = useState<string[]>(["1","2","3","4"])


  const checkOpenAccordion = (indexElement:number,dataUpdate:string[]) => {
    if (accordionBody.current[indexElement]?.classList.contains("hidden")){
      accordionBody.current[indexElement]!.className = "bg-Blond100 rounded-b-lg fade"
      accordionBtn.current[indexElement]!.className =  "bg-Blond100 flex items-center justify-between w-full p-5 font-medium border-x border-t border-Neutral01 rounded-t-xl"
      accordionBtn.current[indexElement]!.children[1].classList.add("rotate-180")

    }else {
      accordionBody.current[indexElement]!.className = "hidden bg-Blond100 rounded-b-lg fade"
      accordionBtn.current[indexElement]!.className =  "drop-shadow-lg bg-Blond20 flex items-center justify-between w-full p-5 font-medium rounded-xl"
      accordionBtn.current[indexElement]!.children[1].classList.remove("rotate-180")
    }

    dataUpdate.forEach((e,i) => {
      if (indexElement !== i){
        accordionBody.current[i]!.className = "hidden bg-Blond100 rounded-b-lg"
        accordionBtn.current[i]!.className =  "drop-shadow-lg bg-Blond20 flex items-center justify-between w-full p-5 font-medium rounded-xl"
        accordionBtn.current[i]!.children[1].classList.remove("rotate-180")
      }
    })
  }


  const askQuestion = () => {
    cardAskQuestion.current?.classList.toggle("hidden")
    cardAskQuestion.current?.classList.toggle("flex")
  }
  
  return (
    <div className='container max-w-7xl mx-auto md:mt-12'>

      <div className="text-center mb-16">
        <h2 className="font-medium text-5xl text-Falu100">FAQs</h2>
        <p className=" font-normal text-2xl text-Falu70">Frequently Asked Questions</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {data.map((e,i) => {
          return <ListFAQS key={i} refButton={accordionBtn} refBody={accordionBody} onclick={checkOpenAccordion} indexElement={i} dataUpdate={data}/>
        })}
      </div>

      <div className="text-center mt-16">
        <h2 className="font-normal text-xl text-Neutral04">Still have a question ?</h2>
        <button
          type="button"
          className="py-2 px-6 mt-3 text-Falu100 text-xl font-medium border border-Falu100 rounded hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in"
          onClick={askQuestion}
        >
          Ask a question
        </button>
      </div>

      {/* card question */}    
      <div className="hidden fixed top-0 left-0 right-0 bottom-0 z-40 justify-center items-center" ref={cardAskQuestion}>
        <div className="max-w-[594px] min-h-[320px] bg-Blond20 drop-shadow-[2px_2px_32px_rgba(0,0,0,0.25)] rounded-lg fadeModal">
          <div className="flex justify-between px-8 pt-8 w-full">
            <span className="text-2xl font-medium">Ask a question <span className="text-red-600">*</span></span>
            <img src="./cross.svg" alt="cross" className="cursor-pointer" onClick={askQuestion}/>
          </div>

          <div className="w-full flex justify-center mt-6 px-8">
            <textarea cols={10} rows={5} placeholder="Ask us anything" className="border border-Neutral02 bg-transparent rounded-lg w-[530px] focus:outline-none focus:ring-0 focus:border-Neutral02" />
          </div>

          <div className="w-full mt-5 text-right">
            <button type="button" className="py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded mr-4 hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in">
              Discard
            </button>
            <button className='bg-Falu100 py-2 px-6 font-medium text-white text-xl rounded mr-8'>Send question</button>
          </div>
        </div>
      </div>
    </div>
  )
}


interface ListFAQSProp {
    onclick: (indexElement:number,dataUpdate:string[]) => void
    refButton: React.MutableRefObject<HTMLButtonElement[] | null[]>
    refBody: React.MutableRefObject<null[] | HTMLDivElement[]>
    indexElement:number
    dataUpdate:string[]
}

const ListFAQS = ({refButton , refBody, onclick , indexElement , dataUpdate}:ListFAQSProp) => {
  return (
    <div className="mb-3">
      <h2 onClick={() => onclick(indexElement,dataUpdate)} >
        <button ref={(el) => refButton.current[indexElement] = el} type="button" className="drop-shadow-lg bg-Blond20 flex items-center justify-between w-full py-5 px-3 font-medium rounded-xl">
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit</span>
          <img src="./iconAccordion.svg" alt="iconAccordion" />
        </button>
      </h2>

      <div ref={(el) => refBody.current[indexElement] = el} className="hidden bg-Blond100 rounded-b-lg fade" >
        <div className="pb-3 px-5 font-light border-x border-b border-Neutral01 text-Neutral03 rounded-b-lg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia porro, enim sit sequi voluptates impedit molestias cum veritatis placeat error amet commodi similique autem nam laboriosam delectus, consequatur doloremque!</p>
        </div>
      </div>
    </div>
  )
}
