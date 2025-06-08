import {  type RegisterDTO } from '../../dtos/registerDTO'
import { authApi } from '../../../infrastructure/api/authApi'

export const registerUser = async (dto: RegisterDTO): Promise<void> => {
  try {
    await authApi.register(dto)
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed')
  }
}