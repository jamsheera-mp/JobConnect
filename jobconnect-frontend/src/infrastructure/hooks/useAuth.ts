import { useState } from 'react'
import { registerUser } from '../../application/use-cases/auth/registerUser'
import { RegisterDTO } from '../../application/dtos/registerDTO'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const register = async (dto: RegisterDTO) => {
    setLoading(true)
    setError(null)
    try {
      await registerUser(dto)
      setLoading(false)
    } catch (err: any) {
      setError(err.message || 'Registration failed')
      setLoading(false)
    }
  }

  return { register, loading, error }
}