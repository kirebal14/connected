export interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
  posted: string
}

export interface JobApplication {
  id: string
  jobId: number
  name: string
  email: string
  phone: string
  resume: string
  coverLetter: string
  appliedAt: Date
  status: "pending" | "reviewing" | "interview" | "rejected" | "hired"
}

export interface JobFilters {
  department?: string
  location?: string
  type?: string
  search?: string
}
