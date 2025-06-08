export interface RegisterDTO {
  email: string
  password: string
  role: 'jobSeeker' | 'recruiter' | 'admin'
  name?: string
}