import apiClient from '../../application/services/apiService'
import { RegisterDTO } from '../../application/dtos/registerDTO'

export const authApi = {
  register: async (dto: RegisterDTO) => {
    const response = await apiClient.post('/auth/register', dto)
    return response.data
  },
}