export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  role: 'jobSeeker' | 'recruiter'
  name: string
}