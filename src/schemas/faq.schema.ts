import { object, string, TypeOf } from 'zod'

const createAskedQuestionSchema = object({
  body: object({
    question: string({ required_error: 'Question is required' })
  })
})

const answerAskedQuestionSchema = object({
  body: object({
    id: string({ required_error: 'Question id is required' }),
    answer: string({ required_error: 'Answer is required' })
  })
})

const deleteAskedQuestionSchema = object({
  body: object({
    id: string({ required_error: 'Question id is required' })
  })
})

export type CreateAskedQuestionInput = TypeOf<
  typeof createAskedQuestionSchema
>['body']
export type AnswerAskedQuestionInput = TypeOf<
  typeof answerAskedQuestionSchema
>['body']
export type deleteAskedQuestionInput = TypeOf<
  typeof deleteAskedQuestionSchema
>['body']
