import { Document, Schema, model } from 'mongoose'

export interface IAskedQuestion extends Document {
  question: string
  answer?: string
}

const askedQuestionSchema = new Schema<IAskedQuestion>({
    question: { type: String, required: true },
    answer: { type: String }
})

export const AskedQuestion = model<IAskedQuestion>('AskedQuestion', askedQuestionSchema)
