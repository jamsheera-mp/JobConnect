export interface Job {
  id: string
  title: string
  company: string
  location: string
  experience: string
  postedDays: number
  category: string
}
export interface JobCategory {
  id: string
  name: string
  icon: React.ReactNode
  jobCount: number
}