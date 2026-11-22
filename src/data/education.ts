export type Education = {
  id: string
  institution: string
  course: string
  period: string
  date: string
  tags: string[]
  featured: boolean
  priority: number
}

export const education: Education[] = [
  {
    id: 'ads-gran', institution: 'Gran Faculdade', course: 'Análise e Desenvolvimento de Sistemas',
    period: 'Previsão de conclusão: 1º semestre de 2028', date: 'Previsão: 1º semestre de 2028',
    tags: [], featured: true, priority: 1,
  },
]
