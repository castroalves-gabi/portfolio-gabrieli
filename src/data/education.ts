export type Education = {
  id: string
  institution: string
  course: string
  period: string
  date: string
  tags: string[]
  workload?: string
  learnings?: string[]
  practicalApplication?: string
  image?: string
  imageCaption?: string
  document?: string
  verificationUrl?: string
  curriculum?: { title: string; workload: number }[]
  totalWorkload?: number
  featured: boolean
  priority: number
}

export const education: Education[] = [
  {
    id: 'ads-gran', institution: 'Gran Faculdade', course: 'Análise e Desenvolvimento de Sistemas',
    period: 'Previsão de conclusão: 1º semestre de 2028', date: 'Previsão: 1º semestre de 2028',
    curriculum: [
      { title: 'Carreira e Futuro', workload: 60 },
      { title: 'Arquitetura de Computadores e Sistemas Operacionais', workload: 60 },
      { title: 'Práticas de Programação', workload: 60 },
      { title: 'Engenharia de Software', workload: 60 },
      { title: 'Projeto Integrador: Carreira e Futuro', workload: 40 },
      { title: 'Atividade Extensionista 1', workload: 60 },
    ],
    totalWorkload: 340,
    image: '/certificates/ads-intermediate-certificate.png',
    imageCaption: 'Certificado intermediário em Ciência da Computação · Hands-on Professional / Front-end Developer · 22/07/2025 · 340 horas.',
    document: '/certificates/ads-intermediate-certificate.pdf',
    tags: [], featured: true, priority: 1,
  },
  {
    id: 'freecodecamp-responsive-web-design',
    institution: 'freeCodeCamp',
    course: 'Responsive Web Design Developer Certification',
    period: 'Developer Certification',
    date: '02/06/2024',
    workload: 'aproximadamente 300 horas',
    tags: ['HTML', 'CSS'],
    image: '/certificates/responsive-web-design-free-code-camp.png',
    verificationUrl: 'https://freecodecamp.org/certification/castroalves-gabi/responsive-web-design',
    featured: true,
    priority: 1,
  },
  {
    id: 'dio-formacoes-e-bootcamps-formacao-cloud-fullstack-bootcamp-certificate',
    institution: 'DIO',
    course: 'Cloud Fullstack Bootcamp',
    period: 'Bootcamp concluído',
    date: '13/02/2023',
    tags: ['Cloud', 'Full Stack'],
    image: '/certificates/previews/dio-formacoes-e-bootcamps-formacao-cloud-fullstack-bootcamp-certificate.webp',
    document: 'https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/DIO/Forma%C3%A7%C3%B5es%20e%20Bootcamps/forma%C3%A7%C3%A3o/cloud-fullstack-bootcamp-certificate.pdf',
    featured: true,
    priority: 2,
  },
  {
    id: 'dio-formacoes-e-bootcamps-formacao-orange-tech-backend-bootcamp-certificate',
    institution: 'DIO',
    course: 'Orange Tech Backend Bootcamp',
    period: 'Bootcamp concluído',
    date: '23/02/2023',
    tags: ['Backend'],
    image: '/certificates/previews/dio-formacoes-e-bootcamps-formacao-orange-tech-backend-bootcamp-certificate.webp',
    document: 'https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/DIO/Forma%C3%A7%C3%B5es%20e%20Bootcamps/forma%C3%A7%C3%A3o/orange-tech-backend-bootcamp-certificate.pdf',
    featured: true,
    priority: 3,
  },
  {
    id: 'dio-formacoes-e-bootcamps-formacao-react-developer-bootcamp-certificate',
    institution: 'DIO',
    course: 'React Developer Bootcamp',
    period: 'Bootcamp concluído',
    date: '31/01/2024',
    tags: ['React'],
    image: '/certificates/previews/dio-formacoes-e-bootcamps-formacao-react-developer-bootcamp-certificate.webp',
    document: 'https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/DIO/Forma%C3%A7%C3%B5es%20e%20Bootcamps/forma%C3%A7%C3%A3o/react-developer-bootcamp-certificate.pdf',
    featured: false,
    priority: 4,
  },
  {
    id: 'dio-formacoes-e-bootcamps-formacao-orange-tech-bootcamp-certificate',
    institution: 'DIO',
    course: 'Orange Tech Bootcamp',
    period: 'Bootcamp concluído',
    date: '14/12/2022',
    tags: [],
    image: '/certificates/previews/dio-formacoes-e-bootcamps-formacao-orange-tech-bootcamp-certificate.webp',
    document: 'https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/DIO/Forma%C3%A7%C3%B5es%20e%20Bootcamps/forma%C3%A7%C3%A3o/orange-tech-bootcamp-certificate.pdf',
    featured: false,
    priority: 5,
  },
]
