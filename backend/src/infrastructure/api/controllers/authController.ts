import { Request, Response } from 'express'
import { AuthService } from '../../../application/services/authService'
import { RegisterDTO } from '../../../application/dtos/userDTO'

const authService = new AuthService()

export const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const dto: RegisterDTO = req.body
      await authService.registerUser(dto)
      res.status(201).json({ message: 'OTP sent to email. Please verify.' })
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  },
}