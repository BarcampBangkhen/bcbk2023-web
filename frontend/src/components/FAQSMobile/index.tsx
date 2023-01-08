import React from "react";
import { useRef , useState } from "react";
import "flowbite";
import "../../App.css"

export default function FAQSMobile() {
  const accordionBtn = useRef<HTMLButtonElement[] | null[]>([])
  const accordionBody = useRef<HTMLDivElement[] | null[]>([])
  const cardAskQuestion = useRef<HTMLDivElement>(null)

  //* create temporary data as serverside haven't generate yet
  const [data,setData] = useState<string[]>(["1","2","3","4"])


	const checkOpenAccordion = (indexElement:number,dataUpdate:string[]) => {
		if (accordionBody.current[indexElement]?.classList.contains("hidden")){
			accordionBody.current[indexElement]!.className = "bg-Blond100 rounded-b-lg animationAccordion"
			accordionBtn.current[indexElement]!.className =  "bg-Blond100 flex items-center justify-between w-full p-5 font-medium rounded-t-xl"
			accordionBtn.current[indexElement]!.children[1].classList.add("rotate-180")

    	}else {
			accordionBody.current[indexElement]!.className = "hidden bg-Blond100 rounded-b-lg animationAccordion"
			accordionBtn.current[indexElement]!.className =  "drop-shadow-lg bg-Blond20 flex items-center justify-between w-full p-5 font-medium rounded-xl"
			accordionBtn.current[indexElement]!.children[1].classList.remove("rotate-180")
    	}

	
		for (let i=0;i<dataUpdate.length;i++){
			if (indexElement !== i){
				accordionBody.current[i]!.className = "hidden bg-Blond100 rounded-b-lg"
				accordionBtn.current[i]!.className =  "drop-shadow-lg bg-Blond20 flex items-center justify-between w-full p-5 font-medium rounded-xl"
				accordionBtn.current[i]!.children[1].classList.remove("rotate-180")
			}
		}
  }


	const askQuestion = () => {
		cardAskQuestion.current?.classList.toggle("hidden")
		cardAskQuestion.current?.classList.toggle("flex")
	}
  
  return (
    <div className='md:hidden container max-w-7xl mx-auto mt-36' id="myfaqs">

    <div className="px-8">
        <div className="border-b-2 border-Falu100 text-lg mt-4">
            <h1 className="text-3xl text-Falu100 font-bold">FAQs</h1>
        </div>
    </div>

	  {/* list item */}
      <div className="max-w-4xl mt-8 mx-auto px-6">
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
        <div className="max-w-[346px] min-h-[296px] bg-Blond20 drop-shadow-[2px_2px_32px_rgba(0,0,0,0.25)] rounded-lg"> 
          <div className="flex justify-between px-8 pt-5 w-full">
            <span className="text-2xl font-medium">Ask a question <span className="text-red-600">*</span></span>
            <img src="./cross.svg" alt="cross" className="cursor-pointer" onClick={askQuestion}/>
          </div>

          <div className="w-full flex justify-center mt-6 px-8">
            <textarea cols={10} rows={5} placeholder="Ask us anything" className="border border-Neutral02 bg-transparent rounded-lg w-[530px] focus:outline-none focus:ring-0 focus:border-Neutral02" />
          </div>

          <div className="w-full mt-5 flex justify-center pb-5">
            <button type="button" className="w-[138px] py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded mr-3 hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in">
              Discard
            </button>
            <button className='w-[134px] bg-Falu100 py-2 px-6 font-medium text-white text-xl rounded'>Submit</button>
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

      <div ref={(el) => refBody.current[indexElement] = el} className="hidden bg-Blond100 rounded-b-lg animationAccordion">
        <div className="pb-3 px-5 font-light text-Neutral03 rounded-b-lg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia porro, enim sit sequi voluptates impedit molestias cum veritatis placeat error amet commodi similique autem nam laboriosam delectus, consequatur doloremque!</p>
        </div>
      </div>
    </div>
  )
}
