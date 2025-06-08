import mongoose, { Schema, Document } from 'mongoose'

export interface IOtp extends Document {
  email: string
  otp: string
  type: 'passwordReset' | 'emailVerification'
  expiresAt: Date
  userData: {
    password: string
    role: 'jobSeeker' | 'recruiter' | 'admin'
    name?: string
  }
  createdAt: Date
}

const otpSchema = new Schema<IOtp>(
  {
    email: { type: String, required: true, index: true },
    otp: { type: String, required: true },
    type: {
      type: String,
      enum: ['passwordReset', 'emailVerification'],
      required: true,
    },
    expiresAt: { type: Date, required: true, expires: 600, index: true },
    userData: {
      password: { type: String, required: true },
      role: {
        type: String,
        enum: ['jobSeeker', 'recruiter', 'admin'],
        required: true,
      },
      name: { type: String },
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const Otp = mongoose.model<IOtp>('Otp', otpSchema)