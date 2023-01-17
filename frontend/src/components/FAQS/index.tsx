import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'flowbite'
import '../../App.css'
import axios from 'axios'
import { ApiBaseUrl } from '../../Constant'
import { IFaq } from '../../models/Faq'
import FaqList from '../FaqList'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function FAQS() {
  const cardAskQuestion = useRef<HTMLDivElement>(null)
  const [questions, setQuestions] = useState<IFaq[]>([])
  const [askQuestionValue, setAskQuestionValue] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('resize', RedirectPath)

    return () => {
      window.removeEventListener('resize', RedirectPath)
    }
  }, [])

  //* ฟังชันก์ให้ redirect ไปยัง path /
  function RedirectPath() {
    if (window.outerWidth < 768) navigate('/#myfaqs')
  }

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

  return (
    <div className="container max-w-7xl mx-auto md:mt-12">
      <div className="text-center mb-16">
        <h2 className="font-medium text-5xl text-Falu100">FAQs</h2>
        <p className=" font-normal text-2xl text-Falu70">
          Frequently Asked Questions
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
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
        <div className="max-w-[594px] min-h-[320px] bg-Blond20 drop-shadow-[2px_2px_32px_rgba(0,0,0,0.25)] rounded-lg fadeModal">
          <div className="flex justify-between px-8 pt-8 w-full">
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

          <div className="w-full mt-5 text-right">
            <button
              type="button"
              className="py-2 px-6 text-Falu100 text-xl font-medium border border-Falu100 rounded mr-4 hover:bg-Falu100 hover:text-white transition-colors duration-75 ease-in"
              onClick={(e) => {
                setAskQuestionValue('')
                askQuestion()
              }}
            >
              Discard
            </button>
            <button
              className="bg-Falu100 py-2 px-6 font-medium text-white text-xl rounded mr-8"
              onClick={sendQuestion}
            >
              Send question
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
