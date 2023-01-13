import { Request, Response } from 'express'
import { AskedQuestion } from '../models/AskedQuestion.model'
import {
  AnswerAskedQuestionInput,
  CreateAskedQuestionInput
} from '../schemas/faq.schema'

export const GetAllQuestions = async (req: Request, res: Response) => {
  const questions = await AskedQuestion.find()
  res.status(200).json(questions)
}

export const GetAllAnsweredQuestions = async (req: Request, res: Response) => {
  const faqs = await AskedQuestion.find({ answer: { $ne: null } })
  res.status(200).json(faqs)
}

export const PutQuestion = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    CreateAskedQuestionInput
  >,
  res: Response
) => {
  const faq = new AskedQuestion()
  faq.question = req.body.question
  faq
    .save()
    .then((item) => {
      res.status(200).json(item)
    })
    .catch((err) => {
      res.status(400).json({})
    })
}

export const PatchQuestion = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    AnswerAskedQuestionInput
  >,
  res: Response
) => {
  const faq = await AskedQuestion.findById(req.body.id).exec()
  if (faq !== null) {
    faq.answer = req.body.answer
    const item = await faq.save()
    res.status(200).json(item)
  }
  return res.status(400).json({})
}
