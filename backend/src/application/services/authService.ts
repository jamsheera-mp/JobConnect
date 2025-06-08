import * as bcrypt from 'bcryptjs'
import { Otp } from '../../infrastructure/database/models/Otp'
import { RegisterDTO } from '../dtos/userDTO'
import { sendOtpEmail } from './emailService'

export class AuthService {
  async registerUser(dto: RegisterDTO): Promise<void> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(dto.email)) {
      throw new Error('Invalid email format')
    }

    const existingOtp = await Otp.findOne({ email: dto.email })
    if (existingOtp) {
      throw new Error('Email is already in the verification process')
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10)

    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    const otpDoc = new Otp({
      email: dto.email,
      otp,
      type: 'emailVerification',
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      userData: {
        password: hashedPassword,
        role: dto.role,
        name: dto.name,
      },
    })

    await otpDoc.save()
    await sendOtpEmail(dto.email, otp)
  }
}