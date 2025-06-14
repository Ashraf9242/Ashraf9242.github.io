import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Project {
  id: string
  title: string
  description: string
  image_url: string
  technologies: string[]
  github_url: string
  live_url: string
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  date: string
  image_url: string
  pdf_url: string
  verification_url: string
  skills: string[]
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
  created_at: string
}
