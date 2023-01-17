import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import 'flowbite'
import '../../App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FaqList from '../FaqList'
import axios from 'axios'
import { ApiBaseUrl } from '../../Constant'
import { IFaq } from '../../models/Faq'
import { useNavigate } from 'react-router-dom'

export default function FAQSMobile() {
  const cardAskQuestion = useRef<HTMLDivElement>(null)
  const [questions, setQuestions] = useState<IFaq[]>([])
  const [askQuestionValue, setAskQuestionValue] = useState('')
  const navigate = useNavigate()

  const askQuestion = () => {
    cardAskQuestion.current?.classList.toggle('hidden')
    cardAskQuestion.current?.classList.toggle('flex')
  }

  const getQuestions = () => {
    axios
      .get<IFaq[]>(ApiBaseUrl + '/faq')
      .then((res) => {
        setQuestions(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const sendQuestion = () => {
    axios
      .put(ApiBaseUrl + '/faq', { question: askQuestionValue })
      .then((res) => {
        toast.success('Question submitted', { autoClose: 2000 })
        setAskQuestionValue('')
        askQuestion()
      })
      .catch((err) => alert('Question submission failed'))
  }

  useEffect(() => {
    getQuestions()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', RedirectPath)

    return () => {
      window.removeEventListener('resize', RedirectPath)
    }
  }, [])

  //* ฟังชันก์ให้ redirect ไปยัง path /faqs
  function RedirectPath() {
    if (window.outerWidth >= 768) navigate('/faqs')
  }

  return (
    <div className="md:hidden container max-w-7xl mx-auto mt-36" id="myfaqs">
      <div className="px-8">
        <div className="border-b-2 border-Falu100 text-lg mt-4">
          <h1 className="text-3xl text-Falu100 font-bold">FAQs</h1>
        </div>
      </div>

      {/* list item */}
      <div className="max-w-4xl mt-8 mx-auto px-6">
        {questions.map((faq, index) => {
          return (
            <FaqList
              key={index}
              title={faq.question}
              description={faq.answer}
            />
          )
        })}
      </div>

      <div className="text-center mt-16">
        <h2 className="font-normal text-xl text-Neutral04">
          Still have a question ?
        </h2>
        <button
          type="button"
          className="py-2 px-6 mt-3 text-Falu100 text-xl font-medium border border-Falu100 rounded hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in"
          onClick={askQuestion}
        >
          Ask a question
        </button>
      </div>

      {/* card question */}
      <div
        className="hidden fixed top-0 left-0 right-0 bottom-0 z-40 justify-center items-center"
        ref={cardAskQuestion}
      >
        <div className="max-w-[346px] min-h-[296px] bg-Blond20 drop-shadow-[2px_2px_32px_rgba(0,0,0,0.25)] rounded-lg fadeModal">
          <div className="flex justify-between px-8 pt-5 w-full">
            <span className="text-2xl font-medium">
              Ask a question <span className="text-red-600">*</span>
            </span>
            <img
              src="./cross.svg"
              alt="cross"
              className="cursor-pointer"
              onClick={askQuestion}
            />
          </div>

          <div className="w-full flex justify-center mt-6 px-8">
            <textarea
              cols={10}
              rows={5}
              placeholder="Ask us anything"
              className="border border-Neutral02 bg-transparent rounded-lg w-[530px] focus:outline-none focus:ring-0 focus:border-Neutral02"
              value={askQuestionValue}
              onChange={(e) => setAskQuestionValue(e.target.value)}
            />
          </div>

          <div className="w-full mt-5 flex justify-center pb-5">
            <button
              type="button"
              className="w-[138px] py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded mr-3 hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in"
              onClick={(e) => {
                setAskQuestionValue('')
                askQuestion()
              }}
            >
              Discard
            </button>
            <button
              className="w-[134px] bg-Falu100 py-2 px-6 font-medium text-white text-xl rounded"
              onClick={sendQuestion}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
