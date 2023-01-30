import { Document, Schema, model } from 'mongoose'

export enum SponsorLogoSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface ISponsor extends Document {
  img_url: string
  size: SponsorLogoSize
  name?: string
}

const sponsorSchema = new Schema<ISponsor>({
  img_url: { type: String, required: true },
  size: { type: String, required: true },
  name: { type: String }
})

export const Sponsor = model<ISponsor>('Sponsor', sponsorSchema)
