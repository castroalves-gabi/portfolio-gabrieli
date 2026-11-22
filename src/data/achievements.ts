export type Achievement = {
  id: string
  title: string
  description: string
  date: string
  institution?: string
  evidence?: string
  relatedCertificateId?: string
  tags: string[]
  featured: boolean
  priority: number
}

export const achievements: Achievement[] = [
  {
    id: 'bootcamp-top-10', title: 'Destaque em bootcamps de tecnologia',
    description: 'Entre as 10 melhores participantes em mais de três bootcamps, com milhares de participantes.',
    date: 'Data não informada', tags: ['Bootcamps', 'Tecnologia'], featured: true, priority: 1,
  },
  {
    id: 'technology-writing-awards', title: 'Premiações em concursos de escrita',
    description: '1º e 3º lugares em concursos de escrita relacionados à tecnologia.',
    date: 'Data não informada', tags: ['Escrita', 'Tecnologia'], featured: true, priority: 2,
  },
]
