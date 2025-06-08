import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  email: string
  password: string
  role: 'admin' | 'recruiter' | 'jobSeeker'
  name?: string
  isBlocked: boolean
  isDeleted: boolean
  deletionRequestedAt?: Date
  sessions: Array<{ token: string; expiresAt: Date }>
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'recruiter', 'jobSeeker'],
      required: true,
    },
    name: { type: String },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    deletionRequestedAt: { type: Date },
    sessions: [
      {
        token: { type: String, required: true },
        expiresAt: { type: Date, required: true },
      },
    ],
    lastLogin: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const User = mongoose.model<IUser>('User', userSchema)