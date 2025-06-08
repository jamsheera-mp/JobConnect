export enum Role {
  JobSeeker = 'jobSeeker',
  Recruiter = 'recruiter',
}

export interface User {
  id: string
  fullName: string
  email: string
  phone: string
  password: string
  role: Role
  companyName?: string
}

export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  role: 'jobSeeker' | 'recruiter'
  name: string
}