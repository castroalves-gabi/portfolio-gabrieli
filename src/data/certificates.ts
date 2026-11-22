export type Certificate = {
  id: string
  title: string
  institution: string
  date: string
  workload?: string
  tags: string[]
  learnings: string[]
  practicalApplication?: string
  image?: string
  document?: string
  verificationUrl?: string
  featured: boolean
  priority: number
}

// Registre aqui somente certificados confirmados. Não há certificados cadastrados ainda.
export const certificates: Certificate[] = []
