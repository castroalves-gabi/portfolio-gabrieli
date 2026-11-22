export type ProjectRoadmap = {
  title: string
  items: string[]
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  summary: string
  technologies: string[]
  plannedTechnologies?: string[]
  status: string
  statusKind: 'planned' | 'in-progress' | 'published'
  releaseStatus?: string
  implementedFeatures: string[]
  plannedFeatures: string[]
  roadmap?: ProjectRoadmap[]
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
    id: 'lifeos',
    title: 'LifeOS',
    category: 'Produto digital · Gestão pessoal',
    description: 'Sistema de gestão pessoal e financeira para organizar tarefas, projetos e lançamentos financeiros em um só lugar.',
    summary: 'Dashboard e módulos de tarefas, finanças e projetos com persistência local.',
    technologies: ['React', 'TypeScript', 'Vite', 'localStorage'],
    plannedTechnologies: ['Supabase'],
    status: 'Em desenvolvimento',
    statusKind: 'in-progress',
    implementedFeatures: [
      'Dashboard com visão geral dos módulos e resumos dos dados cadastrados',
      'Tarefas: cadastrar, editar título e categoria, concluir, reabrir e excluir',
      'Finanças: cadastrar e editar receitas e despesas com título, valor, tipo e categoria; excluir lançamentos e atualizar totais',
      'Projetos: cadastrar, editar nome e categoria, excluir e atualizar o progresso',
      'Persistência em localStorage, mantendo os dados após atualizar a página',
      'Operações de dados separadas em serviços para tarefas, finanças, projetos e armazenamento',
    ],
    plannedFeatures: [
      'Agenda funcional com visualização mensal, semanal e diária, eventos, horários e navegação entre datas',
      'Integração entre tarefas, prazos de projetos, agenda e dashboard',
      'Componentização da interface, formulários e modais',
      'Validações, testes automatizados, responsividade e verificação em diferentes navegadores',
      'Supabase: banco de dados, autenticação, migração dos dados e políticas de segurança RLS',
      'Preparação multiusuário para a evolução do produto como SaaS',
    ],
    roadmap: [
      { title: '1 · Agenda', items: ['Visualizações mensal, semanal e diária', 'Cadastro, edição e exclusão de eventos com data e horário', 'Conexão de eventos com tarefas e prazos de projetos'] },
      { title: '2 · Integração dos módulos', items: ['Compartilhamento consistente de dados entre tarefas, projetos, finanças e dashboard', 'Evitar duplicação de informações'] },
      { title: '3 · Estrutura e interface', items: ['Dividir responsabilidades atualmente concentradas no App.tsx', 'Padronizar componentes, formulários e modais'] },
      { title: '4 · Testes e estabilidade', items: ['Cobrir fluxos e integrações com testes', 'Revisar validações, responsividade e navegadores'] },
      { title: '5 · Supabase e SaaS', items: ['Criar tabelas e autenticação', 'Migrar do armazenamento local para dados na nuvem', 'Aplicar RLS para isolar dados de cada usuário'] },
    ],
    technicalDecisions: 'A persistência atual usa localStorage e as operações de dados foram separadas em serviços. Isso mantém os dados no navegador; sincronização entre dispositivos, autenticação e banco de dados central ainda fazem parte do roadmap.',
    challenges: 'A agenda ainda não é um módulo completo e hoje se apoia em informações de tarefas. A integração dos módulos e a componentização da interface são próximos desafios.',
    results: 'Os fluxos principais de cadastro, edição e exclusão dos três módulos e a persistência após atualizar a página foram testados manualmente, conforme o registro do projeto. A demo pública está acessível pela Vercel.',
    images: [{ src: '/images/projects/lifeos.png', alt: 'Dashboard do LifeOS com resumos financeiros, tarefas e projetos.' }],
    github: 'https://github.com/castroalves-gabi/lifeos',
    demo: 'https://lifeos-5jxx.vercel.app/',
    featured: true,
  },
  {
    id: 'ecommerce', title: 'E-commerce', category: 'Produto digital · Comércio eletrônico',
    description: 'Loja virtual própria com experiências voltadas a clientes e administradores.',
    summary: 'Uma loja digital com catálogo, fluxo de pedidos e recursos administrativos planejados.',
    technologies: [], status: 'Planejado', statusKind: 'planned', featured: true,
    implementedFeatures: [],
    plannedFeatures: ['Catálogo', 'Carrinho', 'Pedidos', 'Autenticação', 'Painel administrativo', 'Integração de pagamento', 'Webhooks', 'API de CEP', 'Cálculo de frete'],
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
    implementedFeatures: [],
    plannedFeatures: ['Cadastro de pacientes', 'Cadastro de profissionais', 'Agendamento', 'Disponibilidade', 'Histórico', 'Controle de permissões', 'Dashboard'],
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
    implementedFeatures: ['Interface construída com HTML, CSS e JavaScript', 'Consumo da PokéAPI'],
    plannedFeatures: ['Busca', 'Filtros', 'Paginação', 'Favoritos', 'Persistência', 'Tratamento de erros'],
    technicalDecisions: 'A versão pública foi construída com HTML, CSS e JavaScript e consulta uma API externa.',
    challenges: 'Placeholder editável: documentar os desafios técnicos quando forem revisados no projeto.',
    results: 'Placeholder editável: registrar resultados e melhorias futuras após avaliação do projeto.',
    images: [], github: 'https://github.com/castroalves-gabi/js-pokedex',
  },
]
