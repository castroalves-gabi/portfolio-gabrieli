export type Achievement = {
  id: string
  title: string
  description: string
  date: string
  institution?: string
  evidence?: string
  image?: string
  relatedCertificateId?: string
  tags: string[]
  featured: boolean
  priority: number
}

export const achievements: Achievement[] = [
  {
    id: 'small-talk-b2-level', title: 'Small Talk B2 Level',
    description: 'Comprovação de nível B2 em inglês.',
    date: '', institution: 'smalltalk2me',
    evidence: 'https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Ingl%C3%AAs/small-talk-b2-level.pdf',
    image: '/certificates/previews/ingles-small-talk-b2-level.webp',
    tags: ['Inglês', 'Idiomas'], featured: true, priority: 1,
  },
  {
    id: 'bootcamp-top-10', title: 'Destaque em bootcamps de tecnologia',
    description: 'Entre as 10 melhores participantes em mais de três bootcamps, com milhares de participantes.',
    date: 'Data não informada', tags: ['Bootcamps', 'Tecnologia'], featured: true, priority: 2,
  },
  {
    id: 'technology-writing-awards', title: 'Premiações em concursos de escrita',
    description: '1º e 3º lugares em concursos de escrita relacionados à tecnologia.',
    date: 'Data não informada', tags: ['Escrita', 'Tecnologia'], featured: true, priority: 3,
  },
]
