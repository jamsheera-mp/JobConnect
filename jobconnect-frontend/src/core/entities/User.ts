export interface User {
  email: string
  role: 'jobSeeker' | 'recruiter' | 'admin'
  name?: string
}