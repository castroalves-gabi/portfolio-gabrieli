import { achievements } from './achievements'
import { certificates } from './certificates'
import { education } from './education'

export type CredentialCategory = 'certificate' | 'achievement' | 'education'
export type CredentialCategoryFilter = 'all' | 'certificates' | 'achievements' | 'education'

export type CredentialItem = {
  id: string
  category: CredentialCategory
  title: string
  description?: string
  institution?: string
  date: string
  workload?: string
  tags: string[]
  learnings: string[]
  practicalApplication?: string
  image?: string
  imageCaption?: string
  document?: string
  verificationUrl?: string
  evidence?: string
  relatedCertificateId?: string
  curriculum?: { title: string; workload: number }[]
  totalWorkload?: number
  featured: boolean
  priority: number
}

export const credentialItems: CredentialItem[] = [
  ...certificates.map((item): CredentialItem => ({
    id: item.id, category: 'certificate', title: item.title, institution: item.institution,
    date: item.date, workload: item.workload, tags: item.tags, learnings: item.learnings,
    practicalApplication: item.practicalApplication, image: item.image, document: item.document,
    verificationUrl: item.verificationUrl, featured: item.featured, priority: item.priority,
  })),
  ...achievements.map((item): CredentialItem => ({
    id: item.id, category: 'achievement', title: item.title, description: item.description,
    institution: item.institution, date: item.date, tags: item.tags, learnings: [],
    evidence: item.evidence, image: item.image, relatedCertificateId: item.relatedCertificateId,
    featured: item.featured, priority: item.priority,
  })),
  ...education.map((item): CredentialItem => ({
    id: item.id, category: 'education', title: item.course, description: item.period,
    institution: item.institution, date: item.date, workload: item.workload, tags: item.tags,
    learnings: item.learnings ?? [], practicalApplication: item.practicalApplication,
    image: item.image, imageCaption: item.imageCaption, document: item.document, verificationUrl: item.verificationUrl,
    curriculum: item.curriculum, totalWorkload: item.totalWorkload,
    featured: item.featured, priority: item.priority,
  })),
]

export const credentialCategories: { value: CredentialCategoryFilter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'certificates', label: 'Certificados' },
  { value: 'achievements', label: 'Conquistas' },
  { value: 'education', label: 'Formação' },
]

const commonTags = [
  'React', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Node.js', 'Git/GitHub',
  'APIs REST', 'HTML', 'CSS', 'UX/UI',
]

export const credentialTags = [...new Set([...commonTags, ...credentialItems.flatMap((item) => item.tags)])]
  .sort((a, b) => a.localeCompare(b, 'pt-BR'))

export type CredentialFilters = {
  category: CredentialCategoryFilter
  tags: string[]
  query: string
}

export function filterAndSortCredentials(items: CredentialItem[], filters: CredentialFilters): CredentialItem[] {
  const query = normalize(filters.query.trim())
  const selectedTags = new Set(filters.tags.map(normalize))

  return items
    .filter((item) => {
      const categoryMatches = filters.category === 'all'
        || (filters.category === 'certificates' && item.category === 'certificate')
        || (filters.category === 'achievements' && item.category === 'achievement')
        || (filters.category === 'education' && item.category === 'education')
      const tagsMatch = selectedTags.size === 0 || item.tags.some((tag) => selectedTags.has(normalize(tag)))
      const searchable = normalize([
        item.title, item.institution, item.description, item.date, ...item.tags,
        ...item.learnings, item.practicalApplication,
      ].filter(Boolean).join(' '))
      return categoryMatches && tagsMatch && (!query || searchable.includes(query))
    })
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1
      if (a.featured && b.featured && a.priority !== b.priority) return a.priority - b.priority
      return dateValue(b.date) - dateValue(a.date)
    })
}

export function normalize(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR')
}

function dateValue(value: string): number {
  const normalized = value.trim()
  const brazilianDate = normalized.match(/^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{4})$/)
  if (brazilianDate) return Date.UTC(Number(brazilianDate[3]), Number(brazilianDate[2]) - 1, Number(brazilianDate[1]))
  const monthAndYear = normalized.match(/^(\d{1,2})[/.\-](\d{4})$/)
  if (monthAndYear) return Date.UTC(Number(monthAndYear[2]), Number(monthAndYear[1]) - 1, 1)
  const yearOnly = normalized.match(/^\d{4}$/)
  if (yearOnly) return Date.UTC(Number(normalized), 0, 1)
  const timestamp = Date.parse(normalized)
  return Number.isNaN(timestamp) ? 0 : timestamp
}
