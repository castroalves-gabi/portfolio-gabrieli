export type Project = {
  id: string
  title: string
  category: string
  description: string
  summary: string
  technologies: string[]
  status: string
  statusKind: 'planned' | 'published'
  features: string[]
  technicalDecisions: string
  challenges: string
  results: string
  images: { src: string; alt: string }[]
  github?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'lifeos', title: 'LifeOS', category: 'Produto digital · Gestão pessoal',
    description: 'Sistema de gestão pessoal e financeira que reúne organização, planejamento e acompanhamento em um só lugar.',
    summary: 'Uma aplicação para organizar diferentes áreas da rotina pessoal.',
    technologies: ['React', 'TypeScript', 'Supabase'], status: 'Em desenvolvimento', statusKind: 'planned', featured: true,
    features: ['Autenticação', 'Gerenciamento financeiro', 'Dashboard', 'Tarefas e projetos', 'Agenda', 'Persistência de dados'],
    technicalDecisions: 'A arquitetura e as decisões técnicas serão documentadas conforme o projeto evoluir.',
    challenges: 'Placeholder editável: registrar aqui os desafios técnicos encontrados durante o desenvolvimento.',
    results: 'Placeholder editável: adicionar resultados observáveis quando houver uma versão validada.',
    images: [],
  },
  {
    id: 'ecommerce', title: 'E-commerce', category: 'Produto digital · Comércio eletrônico',
    description: 'Loja virtual própria com experiências voltadas a clientes e administradores.',
    summary: 'Uma loja digital com catálogo, fluxo de pedidos e recursos administrativos planejados.',
    technologies: [], status: 'Planejado', statusKind: 'planned', featured: true,
    features: ['Catálogo', 'Carrinho', 'Pedidos', 'Autenticação', 'Painel administrativo', 'Integração de pagamento', 'Webhooks', 'API de CEP', 'Cálculo de frete'],
    technicalDecisions: 'Placeholder editável: registrar arquitetura, integrações e escolhas técnicas quando forem definidas.',
    challenges: 'Placeholder editável: registrar aqui os desafios técnicos encontrados durante o desenvolvimento.',
    results: 'Placeholder editável: adicionar resultados observáveis quando houver uma versão validada.',
    images: [],
  },
  {
    id: 'clinicflow', title: 'ClinicFlow', category: 'Produto digital · Gestão de clínica',
    description: 'Sistema de agendamento e gestão para apoiar rotinas de clínicas e profissionais de saúde.',
    summary: 'Uma solução para organizar cadastros, agenda e informações de atendimento.',
    technologies: [], status: 'Planejado', statusKind: 'planned', featured: true,
    features: ['Cadastro de pacientes', 'Cadastro de profissionais', 'Agendamento', 'Disponibilidade', 'Histórico', 'Controle de permissões', 'Dashboard'],
    technicalDecisions: 'Placeholder editável: registrar arquitetura, modelo de dados e regras de acesso quando forem definidos.',
    challenges: 'Placeholder editável: registrar aqui os desafios técnicos encontrados durante o desenvolvimento.',
    results: 'Placeholder editável: adicionar resultados observáveis quando houver uma versão validada.',
    images: [],
  },
  {
    id: 'pokedex', title: 'Pokédex', category: 'Projeto complementar · Consumo de API',
    description: 'Pokédex construída com HTML, CSS e JavaScript, com consumo de API para consultar Pokémon.',
    summary: 'Projeto complementar de interface e integração com a PokéAPI.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PokéAPI'], status: 'Repositório público', statusKind: 'published', featured: false,
    features: ['Consumo da PokéAPI', 'Busca', 'Filtros', 'Paginação', 'Favoritos', 'Persistência', 'Tratamento de erros'],
    technicalDecisions: 'A versão pública foi construída com HTML, CSS e JavaScript e consulta uma API externa.',
    challenges: 'Placeholder editável: documentar os desafios técnicos quando forem revisados no projeto.',
    results: 'Placeholder editável: registrar resultados e melhorias futuras após avaliação do projeto.',
    images: [], github: 'https://github.com/castroalves-gabi/js-pokedex',
  },
]
