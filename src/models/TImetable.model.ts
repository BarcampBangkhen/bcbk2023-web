import { Document, Schema, model } from 'mongoose'

export interface ITimetable extends Document {
  title: string
  time: string
  icon: string
}

const timetableSchema = new Schema<ITimetable>({
  title: { type: String },
  time: { type: String },
  icon: { type: String }
})

export const Timetable = model<ITimetable>('Timetable', timetableSchema)
