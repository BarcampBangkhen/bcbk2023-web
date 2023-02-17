import { Document, Schema, model } from 'mongoose'

export interface IAdmin extends Document {
  credential: string
}

const adminSchema = new Schema<IAdmin>({
  credential: { type: String, required: true }
})
export const Admin = model<IAdmin>('Admin', adminSchema)

const sponsorAdminSchema = new Schema<IAdmin>({
  credential:{ type: String, required: true }
})
export const SponsorAdmin = model<IAdmin>('SponsorAdmin', sponsorAdminSchema)