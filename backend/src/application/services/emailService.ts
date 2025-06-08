import * as nodemailer from 'nodemailer'
import { config } from '../../config'

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: false,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
})

export const sendOtpEmail = async (email: string, otp: string) => {
  const mailOptions = {
    from: config.smtp.user,
    to: email,
    subject: 'JobConnect - Verify Your Email',
    text: `Your OTP for email verification is: ${otp}. It expires in 10 minutes.`,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`OTP sent to ${email}`)
  } catch (error) {
    console.error('Error sending OTP email:', error)
    throw new Error('Failed to send OTP email')
  }
}