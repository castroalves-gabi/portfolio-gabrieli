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

// Registros importados do repositório público de certificados; datas ausentes na origem ficam ocultas.
// Fonte: https://github.com/castroalves-gabi/certificados (snapshot efae8ec17b29c7381369b9b7b073a65141496731).
export const certificates: Certificate[] = [
  {
    "id": "angular-angular-dio-inicial-comecando-no-framework-24h",
    "title": "Começando no Framework",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "24 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-inicial-comecando-no-framework-24h.pdf",
    "featured": false,
    "priority": 1000,
    "image": "/certificates/previews/angular-angular-dio-inicial-comecando-no-framework-24h.webp"
  },
  {
    "id": "angular-angular-dio-inicial-introducao-ao-ecossistema-2h",
    "title": "Introdução ao Ecossistema",
    "institution": "DIO",
    "date": "18/01/2023",
    "workload": "2 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-inicial-introducao-ao-ecossistema-2h.pdf",
    "featured": false,
    "priority": 1001,
    "image": "/certificates/previews/angular-angular-dio-inicial-introducao-ao-ecossistema-2h.webp"
  },
  {
    "id": "angular-angular-dio-inicial-trabalhando-com-rotas-1h",
    "title": "Trabalhando com Rotas",
    "institution": "DIO",
    "date": "19/01/2023",
    "workload": "1 hora",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-inicial-trabalhando-com-rotas-1h.pdf",
    "featured": false,
    "priority": 1002,
    "image": "/certificates/previews/angular-angular-dio-inicial-trabalhando-com-rotas-1h.webp"
  },
  {
    "id": "angular-angular-dio-lifecycle-hooks-2h",
    "title": "Lifecycle Hooks",
    "institution": "DIO",
    "date": "13/01/2023",
    "workload": "2 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-lifecycle-hooks-2h.pdf",
    "featured": false,
    "priority": 1003,
    "image": "/certificates/previews/angular-angular-dio-lifecycle-hooks-2h.webp"
  },
  {
    "id": "angular-angular-dio-modulos-1h",
    "title": "Módulos",
    "institution": "DIO",
    "date": "19/01/2023",
    "workload": "1 hora",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-modulos-1h.pdf",
    "featured": false,
    "priority": 1004,
    "image": "/certificates/previews/angular-angular-dio-modulos-1h.webp"
  },
  {
    "id": "angular-angular-dio-projeto-pratico-criando-um-blog-com-angular-4h",
    "title": "Projeto Prático Criando um Blog com Angular",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "4 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-projeto-pratico-criando-um-blog-com-angular-4h.pdf",
    "featured": false,
    "priority": 1005,
    "image": "/certificates/previews/angular-angular-dio-projeto-pratico-criando-um-blog-com-angular-4h.webp"
  },
  {
    "id": "angular-angular-dio-single-page-application-2h",
    "title": "Single Page Application",
    "institution": "DIO",
    "date": "13/01/2023",
    "workload": "2 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-single-page-application-2h.pdf",
    "featured": false,
    "priority": 1006,
    "image": "/certificates/previews/angular-angular-dio-single-page-application-2h.webp"
  },
  {
    "id": "angular-angular-dio-trabalhando-com-services-2h",
    "title": "Trabalhando com Services",
    "institution": "DIO",
    "date": "19/01/2023",
    "workload": "2 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-trabalhando-com-services-2h.pdf",
    "featured": false,
    "priority": 1007,
    "image": "/certificates/previews/angular-angular-dio-trabalhando-com-services-2h.webp"
  },
  {
    "id": "angular-angular-dio-trabalhando-com-web-componentes-angular-2h",
    "title": "Trabalhando com Web Componentes Angular",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "2 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-trabalhando-com-web-componentes-angular-2h.pdf",
    "featured": false,
    "priority": 1008,
    "image": "/certificates/previews/angular-angular-dio-trabalhando-com-web-componentes-angular-2h.webp"
  },
  {
    "id": "angular-angular-dio-trabalhando-com-web-componentes-no-frontend-angular-3h",
    "title": "Trabalhando com Web Componentes no Frontend Angular",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "3 horas",
    "tags": [
      "Angular"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Angular/angular-dio-trabalhando-com-web-componentes-no-frontend-angular-3h.pdf",
    "featured": false,
    "priority": 1009,
    "image": "/certificates/previews/angular-angular-dio-trabalhando-com-web-componentes-no-frontend-angular-3h.webp"
  },
  {
    "id": "aws-aws-dio-inicial-primeiros-passos-2h",
    "title": "Primeiros Passos",
    "institution": "DIO",
    "date": "11/01/2023",
    "workload": "2 horas",
    "tags": [
      "AWS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/AWS/aws-dio-inicial-primeiros-passos-2h.pdf",
    "featured": false,
    "priority": 1010,
    "image": "/certificates/previews/aws-aws-dio-inicial-primeiros-passos-2h.webp"
  },
  {
    "id": "aws-aws-dio-principios-cloud-computer-com-aws-10h",
    "title": "Princípios Cloud Computer com AWS",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "10 horas",
    "tags": [
      "AWS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/AWS/aws-dio-principios-cloud-computer-com-aws-10h.pdf",
    "featured": false,
    "priority": 1011,
    "image": "/certificates/previews/aws-aws-dio-principios-cloud-computer-com-aws-10h.webp"
  },
  {
    "id": "aws-serverless-aws-dio-desenvolvendo-solucoes-serverless-na-aws-4h",
    "title": "Desenvolvendo Soluções Serverless na AWS",
    "institution": "DIO",
    "date": "11/01/2023",
    "workload": "4 horas",
    "tags": [
      "AWS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/AWS/serverless-aws-dio-desenvolvendo-solucoes-serverless-na-aws-4h.pdf",
    "featured": false,
    "priority": 1012,
    "image": "/certificates/previews/aws-serverless-aws-dio-desenvolvendo-solucoes-serverless-na-aws-4h.webp"
  },
  {
    "id": "aws-serverless-aws-dio-infraestrutura-como-codigo-com-serverless-framework-na-aws",
    "title": "Infraestrutura Como Código com Serverless Framework na AWS",
    "institution": "DIO",
    "date": "13/02/2023",
    "tags": [
      "AWS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/AWS/serverless-aws-dio-infraestrutura-como-codigo-com-serverless-framework-na-aws.pdf",
    "featured": false,
    "priority": 1013,
    "image": "/certificates/previews/aws-serverless-aws-dio-infraestrutura-como-codigo-com-serverless-framework-na-aws.webp"
  },
  {
    "id": "banco-de-dados-banco-de-dados-dio-sql-e-nosql-12h",
    "title": "SQL e NoSQL",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "12 horas",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/banco-de-dados-dio-sql-e-nosql-12h.pdf",
    "featured": false,
    "priority": 1014,
    "image": "/certificates/previews/banco-de-dados-banco-de-dados-dio-sql-e-nosql-12h.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-1-curso-introducao-a-banco-de-dados",
    "title": "Curso Introdução a Banco de Dados",
    "institution": "DIO",
    "date": "09/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-1-Curso-Introducao-a-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1015,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-1-curso-introducao-a-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-10-curso-modelo-relacional-e-mapeamento-relacional-com-banco-de-dados",
    "title": "Curso Modelo Relacional e Mapeamento Relacional com Banco de Dados",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-10-Curso-Modelo-Relacional-e-Mapeamento-Relacional-com-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1016,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-10-curso-modelo-relacional-e-mapeamento-relacional-com-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-11-curso-primeiros-passos-com-sql",
    "title": "Curso Primeiros Passos com SQL",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-11-Curso-Primeiros-Passos-com-SQL.pdf",
    "featured": false,
    "priority": 1017,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-11-curso-primeiros-passos-com-sql.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-15-desafio-de-projeto-construindo-seu-primeiro-projeto-logico-de-banco-de-dados",
    "title": "Desafio de Projeto Construindo Seu Primeiro Projeto Lógico de Banco de Dados",
    "institution": "DIO",
    "date": "13/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-15-Desafio-de-Projeto-Construindo-seu-Primeiro-Projeto-L%C3%B3gico-de-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1018,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-15-desafio-de-projeto-construindo-seu-primeiro-projeto-logico-de-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-16-desafio-desafio-de-projeto-construa-um-projeto-logico-de-banco-de-dados-do-zero-oficina",
    "title": "Desafio Desafio de Projeto Construa um Projeto Lógico de Banco de Dados do Zero Oficina",
    "institution": "DIO",
    "date": "13/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-16-Desafio-Desafio-de-Projeto-Construa-um-Projeto-L%C3%B3gico-de-Banco-de-Dados-Do-Zero-Oficina.pdf",
    "featured": false,
    "priority": 1019,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-16-desafio-desafio-de-projeto-construa-um-projeto-logico-de-banco-de-dados-do-zero-oficina.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-17-curso-personalizando-acessos-com-views",
    "title": "Curso Personalizando Acessos com Views",
    "institution": "DIO",
    "date": "13/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-17-Curso-Personalizando-Acessos-Com-Views.pdf",
    "featured": false,
    "priority": 1020,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-17-curso-personalizando-acessos-com-views.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-18-curso-explorando-clausulas-de-ddl-e-esquema-de-banco-de-dados-no-mysql",
    "title": "Curso Explorando Cláusulas de DDL e Esquema de Banco de Dados no MySQL",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-18-Curso-Explorando-Cl%C3%A1usulas-de-DDL-e-Esquema-de-Banco-de-Dados-no-MySQL.pdf",
    "featured": false,
    "priority": 1021,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-18-curso-explorando-clausulas-de-ddl-e-esquema-de-banco-de-dados-no-mysql.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-19-curso-explorando-logica-de-programacao-com-sql-dinamico",
    "title": "Curso Explorando Lógica de Programação com SQL Dinâmico",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-19-Curso-Explorando-L%C3%B3gica-de-Programa%C3%A7%C3%A3o-com-SQL-Din%C3%A2mico.pdf",
    "featured": false,
    "priority": 1022,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-19-curso-explorando-logica-de-programacao-com-sql-dinamico.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-2-curso-sgbd",
    "title": "Curso SGBD",
    "institution": "DIO",
    "date": "10/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-2-Curso-SGBD.pdf",
    "featured": false,
    "priority": 1023,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-2-curso-sgbd.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-22-curso-normalizacao-em-banco-de-dados",
    "title": "Curso Normalização em Banco de Dados",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-22-Curso-Normaliza%C3%A7%C3%A3o-em-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1024,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-22-curso-normalizacao-em-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-23-desafio-de-projeto-personalizando-o-banco-de-dados-com-indices-e-procedures",
    "title": "Desafio de Projeto Personalizando O Banco de Dados com Índices e Procedures",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-23-Desafio-de-Projeto-Personalizando-o-Banco-de-Dados-com-%C3%8Dndices-e-Procedures.pdf",
    "featured": false,
    "priority": 1025,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-23-desafio-de-projeto-personalizando-o-banco-de-dados-com-indices-e-procedures.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-24-desafio-de-projeto-personalizando-acessos-e-automatizando-acoes-no-mysql",
    "title": "Desafio de Projeto Personalizando Acessos e Automatizando Ações no MySQL",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-24-Desafio-de-Projeto-Personalizando-Acessos-e-Automatizando-A%C3%A7%C3%B5es-no-MySQL.pdf",
    "featured": false,
    "priority": 1026,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-24-desafio-de-projeto-personalizando-acessos-e-automatizando-acoes-no-mysql.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-28-desafio-de-projeto-criando-transacoes-executando-backup-e-recovery-de-banco-de-dados",
    "title": "Desafio de Projeto Criando Transações Executando Backup e Recovery de Banco de Dados",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-28-Desafio-de-Projeto-Criando-Transa%C3%A7%C3%B5es-Executando-Backup-e-Recovery-de-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1027,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-28-desafio-de-projeto-criando-transacoes-executando-backup-e-recovery-de-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-3-curso-modelagem-de-dados-para-banco-de-dados",
    "title": "Curso Modelagem de Dados para Banco de Dados",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-3-Curso-Modelagem-de-Dados-para-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1028,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-3-curso-modelagem-de-dados-para-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-4-curso-arquitetura-de-banco-de-dados",
    "title": "Curso Arquitetura de Banco de Dados",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-4-Curso-Arquitetura-de-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1029,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-4-curso-arquitetura-de-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-5-curso-fundamentos-de-modelagem-e-projeto-de-banco-de-dados",
    "title": "Curso Fundamentos de Modelagem e Projeto de Banco de Dados",
    "institution": "DIO",
    "date": "13/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-5-Curso-Fundamentos-de-Modelagem-e-Projeto-de-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1030,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-5-curso-fundamentos-de-modelagem-e-projeto-de-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-6-curso-modelo-de-entidade-relacionamento-com-banco-de-dados",
    "title": "Curso Modelo de Entidade Relacionamento com Banco de Dados",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-6-Curso-Modelo-de-Entidade-Relacionamento-com-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1031,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-6-curso-modelo-de-entidade-relacionamento-com-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-7-curso-modelo-relacionamento-de-entidade-aprimorado-com-banco-de-dados",
    "title": "Curso Modelo Relacionamento de Entidade Aprimorado com Banco de Dados",
    "institution": "DIO",
    "date": "14/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-7-Curso-Modelo-Relacionamento-de-Entidade-Aprimorado-com-Banco-de-Dados.pdf",
    "featured": false,
    "priority": 1032,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-7-curso-modelo-relacionamento-de-entidade-aprimorado-com-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-8-desafio-de-projeto-refinando-um-projeto-conceitual-para-banco-de-dados",
    "title": "Desafio de Projeto Refinando um Projeto Conceitual para Banco de Dados",
    "institution": "DIO",
    "date": "09/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-8-Desafio-de-Projeto-Refinando-Um-Projeto-Conceitual-Para-Banco-De-Dados.pdf",
    "featured": false,
    "priority": 1033,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-8-desafio-de-projeto-refinando-um-projeto-conceitual-para-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-formacao-banco-de-dados-dio-bd-dio-9-desafio-de-projeto-construindo-um-esquema-conceitual-para-banco-de-dados",
    "title": "Desafio de Projeto Construindo um Esquema Conceitual para Banco de Dados",
    "institution": "DIO",
    "date": "09/02/2024",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/Forma%C3%A7%C3%A3o%20Banco%20de%20Dados%20DIO/BD-DIO-9-Desafio-de-Projeto-Construindo-Um-Esquema-Conceitual-Para-Banco-De-Dados.pdf",
    "featured": false,
    "priority": 1034,
    "image": "/certificates/previews/banco-de-dados-formacao-banco-de-dados-dio-bd-dio-9-desafio-de-projeto-construindo-um-esquema-conceitual-para-banco-de-dados.webp"
  },
  {
    "id": "banco-de-dados-mongodb-e-nosql-introducao-ao-mongo-db-e-banco-de-dados-nosql-3h",
    "title": "Introdução ao MongoDB e Banco de Dados NoSQL",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "3 horas",
    "tags": [
      "Banco de Dados",
      "SQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Banco%20de%20Dados/mongodb-e-nosql-introducao-ao-mongo-db-e-banco-de-dados-nosql-3h.pdf",
    "featured": false,
    "priority": 1035,
    "image": "/certificates/previews/banco-de-dados-mongodb-e-nosql-introducao-ao-mongo-db-e-banco-de-dados-nosql-3h.webp"
  },
  {
    "id": "dio-git-versionamento-de-codigo-com-git-e-github-2-horas-c6605de5",
    "title": "Versionamento de código com Git e GitHub",
    "institution": "DIO",
    "date": "23/12/2023",
    "workload": "2 horas",
    "tags": [
      "Git/GitHub"
    ],
    "learnings": [],
    "image": "/certificates/previews/dio-git-versionamento-de-codigo-com-git-e-github-2-horas-c6605de5.webp",
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/DIO/Git/versionamento-de-codigo-com-git-e-github-2-horas-C6605DE5.pdf",
    "featured": false,
    "priority": 1040
  },
  {
    "id": "git-git-dio-certificado-curso-introducao-ao-git-e-github-5h",
    "title": "Curso Introdução ao Git e GitHub",
    "institution": "DIO",
    "date": "25/11/2022",
    "workload": "5 horas",
    "tags": [
      "Git/GitHub"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Git/git-dio-certificado-curso-introducao-ao-git-e-github-5h.pdf",
    "featured": false,
    "priority": 1041,
    "image": "/certificates/previews/git-git-dio-certificado-curso-introducao-ao-git-e-github-5h.webp"
  },
  {
    "id": "git-git-dio-contribuindo-em-projeto-open-source-1h",
    "title": "Contribuindo em Projeto Open Source",
    "institution": "DIO",
    "date": "23/12/2023",
    "workload": "1 hora",
    "tags": [
      "Git/GitHub"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Git/git-dio-contribuindo-em-projeto-open-source-1h.pdf",
    "featured": false,
    "priority": 1042,
    "image": "/certificates/previews/git-git-dio-contribuindo-em-projeto-open-source-1h.webp"
  },
  {
    "id": "git-git-dio-versionamento-de-codigo-2h",
    "title": "Versionamento de Código",
    "institution": "DIO",
    "date": "23/12/2023",
    "workload": "2 horas",
    "tags": [
      "Git/GitHub"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Git/git-dio-versionamento-de-codigo-2h.pdf",
    "featured": false,
    "priority": 1043,
    "image": "/certificates/previews/git-git-dio-versionamento-de-codigo-2h.webp"
  },
  {
    "id": "html-e-css-css-dio-estilizando-paginas-1h",
    "title": "Estilizando Páginas",
    "institution": "DIO",
    "date": "31/01/2024",
    "workload": "1 hora",
    "tags": [
      "HTML",
      "CSS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/HTML%20e%20CSS/css-dio-estilizando-paginas-1h.pdf",
    "featured": false,
    "priority": 1044,
    "image": "/certificates/previews/html-e-css-css-dio-estilizando-paginas-1h.webp"
  },
  {
    "id": "html-e-css-html-dio-introducao-a-criacao-de-websites-com-html5-e-css3-6h",
    "title": "Introdução à Criação de Websites com HTML5 e CSS3",
    "institution": "DIO",
    "date": "07/11/2022",
    "workload": "6 horas",
    "tags": [
      "HTML",
      "CSS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/HTML%20e%20CSS/html-dio-introducao-a-criacao-de-websites-com-html5-e-css3-6h.pdf",
    "featured": false,
    "priority": 1045,
    "image": "/certificates/previews/html-e-css-html-dio-introducao-a-criacao-de-websites-com-html5-e-css3-6h.webp"
  },
  {
    "id": "html-e-css-html-dio-introducao-ao-html-na-pratica-2h",
    "title": "Introdução ao HTML na Prática",
    "institution": "DIO",
    "date": "06/11/2023",
    "workload": "2 horas",
    "tags": [
      "HTML",
      "CSS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/HTML%20e%20CSS/html-dio-introducao-ao-html-na-pratica-2h.pdf",
    "featured": false,
    "priority": 1046,
    "image": "/certificates/previews/html-e-css-html-dio-introducao-ao-html-na-pratica-2h.webp"
  },
  {
    "id": "html-e-css-html-dio-paginas-web-com-html-2h",
    "title": "Páginas Web com HTML",
    "institution": "DIO",
    "date": "22/12/2023",
    "workload": "2 horas",
    "tags": [
      "HTML",
      "CSS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/HTML%20e%20CSS/html-dio-p%C3%A1ginas-web-com-html-2h.pdf",
    "featured": false,
    "priority": 1047,
    "image": "/certificates/previews/html-e-css-html-dio-paginas-web-com-html-2h.webp"
  },
  {
    "id": "html-e-css-html-dio-projeto-pratico-com-html-css-para-listagem-de-pokemon-2h",
    "title": "Projeto Prático com HTML CSS para Listagem de Pokemon",
    "institution": "DIO",
    "date": "03/11/2022",
    "workload": "2 horas",
    "tags": [
      "HTML",
      "CSS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/HTML%20e%20CSS/html-dio-projeto-pratico-com-html-css-para-listagem-de-pokemon-2h.pdf",
    "featured": false,
    "priority": 1048,
    "image": "/certificates/previews/html-e-css-html-dio-projeto-pratico-com-html-css-para-listagem-de-pokemon-2h.webp"
  },
  {
    "id": "html-e-css-html-dio-trabalhando-com-formularios-em-html-2h",
    "title": "Trabalhando com Formulários em HTML",
    "institution": "DIO",
    "date": "07/11/2023",
    "workload": "2 horas",
    "tags": [
      "HTML",
      "CSS"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/HTML%20e%20CSS/html-dio-trabalhando-com-formularios-em-html-2h.pdf",
    "featured": false,
    "priority": 1049,
    "image": "/certificates/previews/html-e-css-html-dio-trabalhando-com-formularios-em-html-2h.webp"
  },
  {
    "id": "java-java-dio-debugging-java-1h",
    "title": "Debugging Java",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "1 hora",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-debugging-java-1h.pdf",
    "featured": false,
    "priority": 1051,
    "image": "/certificates/previews/java-java-dio-debugging-java-1h.webp"
  },
  {
    "id": "java-java-dio-dominando-a-linguagem-de-programacao-java-27h",
    "title": "Dominando a Linguagem de Programação Java",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "27 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-dominando-a-linguagem-de-programacao-java-27h.pdf",
    "featured": false,
    "priority": 1052,
    "image": "/certificates/previews/java-java-dio-dominando-a-linguagem-de-programacao-java-27h.webp"
  },
  {
    "id": "java-java-dio-dominando-algoritmos-basicos-com-desafios-de-codigo-java-5h",
    "title": "Dominando Algoritmos Básicos com Desafios de Código Java",
    "institution": "DIO",
    "date": "23/02/2023",
    "workload": "5 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-dominando-algoritmos-basicos-com-desafios-de-codigo-java-5h.pdf",
    "featured": false,
    "priority": 1053,
    "image": "/certificates/previews/java-java-dio-dominando-algoritmos-basicos-com-desafios-de-codigo-java-5h.webp"
  },
  {
    "id": "java-java-dio-dominando-algoritmos-com-desafios-de-codigo-java-5h",
    "title": "Dominando Algoritmos com Desafios de Código Java",
    "institution": "DIO",
    "date": "18/01/2023",
    "workload": "5 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-dominando-algoritmos-com-desafios-de-codigo-java-5h.pdf",
    "featured": false,
    "priority": 1054,
    "image": "/certificates/previews/java-java-dio-dominando-algoritmos-com-desafios-de-codigo-java-5h.webp"
  },
  {
    "id": "java-java-dio-entendendo-metodos-3h",
    "title": "Entendendo Métodos",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "3 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-entendendo-metodos-3h.pdf",
    "featured": false,
    "priority": 1055,
    "image": "/certificates/previews/java-java-dio-entendendo-metodos-3h.webp"
  },
  {
    "id": "java-java-dio-estruturas-de-repeticao-e-arrays-3h",
    "title": "Estruturas de Repetição e Arrays",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "3 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-estruturas-de-repeticao-e-arrays-3h.pdf",
    "featured": false,
    "priority": 1056,
    "image": "/certificates/previews/java-java-dio-estruturas-de-repeticao-e-arrays-3h.webp"
  },
  {
    "id": "java-java-dio-explorando-padroes-de-projetos-na-pratica-com-java-2h",
    "title": "Explorando Padrões de Projetos na Prática com Java",
    "institution": "DIO",
    "date": "23/02/2023",
    "workload": "2 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-explorando-padroes-de-projetos-na-pratica-com-java-2h.pdf",
    "featured": false,
    "priority": 1057,
    "image": "/certificates/previews/java-java-dio-explorando-padroes-de-projetos-na-pratica-com-java-2h.webp"
  },
  {
    "id": "java-java-dio-gerenciamento-de-dependencias-e-build-em-java-com-maven-2h",
    "title": "Gerenciamento de Dependências e Build em Java com Maven",
    "institution": "DIO",
    "date": "10/01/2023",
    "workload": "2 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-gerenciamento-de-dependencias-e-build-em-java-com-maven-2h.pdf",
    "featured": false,
    "priority": 1058,
    "image": "/certificates/previews/java-java-dio-gerenciamento-de-dependencias-e-build-em-java-com-maven-2h.webp"
  },
  {
    "id": "java-java-dio-inicial-ambiente-de-desenvolvimento-1h",
    "title": "Ambiente de Desenvolvimento",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "1 hora",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-inicial-ambiente-de-desenvolvimento-1h.pdf",
    "featured": false,
    "priority": 1059,
    "image": "/certificates/previews/java-java-dio-inicial-ambiente-de-desenvolvimento-1h.webp"
  },
  {
    "id": "java-java-dio-inicial-aprendendo-a-sintaxe-java-5h",
    "title": "Aprendendo a Sintaxe Java",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "5 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-inicial-aprendendo-a-sintaxe-java-5h.pdf",
    "featured": false,
    "priority": 1060,
    "image": "/certificates/previews/java-java-dio-inicial-aprendendo-a-sintaxe-java-5h.webp"
  },
  {
    "id": "java-java-dio-inicial-conhecendo-a-linguagem-de-programacao-java-14h",
    "title": "Conhecendo a Linguagem de Programação Java",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "14 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-inicial-conhecendo-a-linguagem-de-programacao-java-14h.pdf",
    "featured": false,
    "priority": 1061,
    "image": "/certificates/previews/java-java-dio-inicial-conhecendo-a-linguagem-de-programacao-java-14h.webp"
  },
  {
    "id": "java-java-dio-inicial-introducao-a-plataforma-java-1h",
    "title": "Introdução a Plataforma Java",
    "institution": "DIO",
    "date": "19/12/2022",
    "workload": "1 hora",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-inicial-introducao-a-plataforma-java-1h.pdf",
    "featured": false,
    "priority": 1062,
    "image": "/certificates/previews/java-java-dio-inicial-introducao-a-plataforma-java-1h.webp"
  },
  {
    "id": "java-java-dio-poo-com-java-2h",
    "title": "POO com Java",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "2 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-poo-com-java-2h.pdf",
    "featured": false,
    "priority": 1063,
    "image": "/certificates/previews/java-java-dio-poo-com-java-2h.webp"
  },
  {
    "id": "java-java-dio-programacao-orientada-a-objetos-com-java-13h",
    "title": "Programação Orientada a Objetos com Java",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "13 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-programacao-orientada-a-objetos-com-java-13h.pdf",
    "featured": false,
    "priority": 1064,
    "image": "/certificates/previews/java-java-dio-programacao-orientada-a-objetos-com-java-13h.webp"
  },
  {
    "id": "java-java-dio-trabalhando-com-collections-java-4h",
    "title": "Trabalhando com Collections Java",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "4 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-trabalhando-com-collections-java-4h.pdf",
    "featured": false,
    "priority": 1065,
    "image": "/certificates/previews/java-java-dio-trabalhando-com-collections-java-4h.webp"
  },
  {
    "id": "java-java-dio-tratamento-de-excecoes-2h",
    "title": "Tratamento de Exceções",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "2 horas",
    "tags": [
      "Java"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Java/java-dio-tratamento-de-excecoes-2h.pdf",
    "featured": false,
    "priority": 1066,
    "image": "/certificates/previews/java-java-dio-tratamento-de-excecoes-2h.webp"
  },
  {
    "id": "javascript-js-dio-curso-inicial-primeiros-passos-3h",
    "title": "Primeiros Passos",
    "institution": "DIO",
    "date": "28/10/2022",
    "workload": "3 horas",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-curso-inicial-primeiros-passos-3h.pdf",
    "featured": false,
    "priority": 1067,
    "image": "/certificates/previews/javascript-js-dio-curso-inicial-primeiros-passos-3h.webp"
  },
  {
    "id": "javascript-js-dio-inicial-arrays-e-estruturas-de-repeticao-2h",
    "title": "Arrays e Estruturas de Repetição",
    "institution": "DIO",
    "date": "01/11/2022",
    "workload": "2 horas",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-inicial-arrays-e-estruturas-de-repeticao-2h.pdf",
    "featured": false,
    "priority": 1068,
    "image": "/certificates/previews/javascript-js-dio-inicial-arrays-e-estruturas-de-repeticao-2h.webp"
  },
  {
    "id": "javascript-js-dio-inicial-curso-funcoes-javascript-2h",
    "title": "Curso Funções JavaScript",
    "institution": "DIO",
    "date": "31/10/2022",
    "workload": "2 horas",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-inicial-curso-funcoes-javascript-2h.pdf",
    "featured": false,
    "priority": 1069,
    "image": "/certificates/previews/javascript-js-dio-inicial-curso-funcoes-javascript-2h.webp"
  },
  {
    "id": "javascript-js-dio-inicial-curso-primeiras-paginas-interativas-com-javascript-18h",
    "title": "Curso Primeiras Páginas Interativas com JavaScript",
    "institution": "DIO",
    "date": "10/12/2022",
    "workload": "18 horas",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-inicial-curso-primeiras-paginas-interativas-com-javascript-18h.pdf",
    "featured": false,
    "priority": 1070,
    "image": "/certificates/previews/javascript-js-dio-inicial-curso-primeiras-paginas-interativas-com-javascript-18h.webp"
  },
  {
    "id": "javascript-js-dio-inicial-importacao-e-exportacao-com-javascript-1h",
    "title": "Importação e Exportação com JavaScript",
    "institution": "DIO",
    "date": "02/11/2022",
    "workload": "1 hora",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-inicial-importacao-e-exportacao-com-javascript-1h.pdf",
    "featured": false,
    "priority": 1071,
    "image": "/certificates/previews/javascript-js-dio-inicial-importacao-e-exportacao-com-javascript-1h.webp"
  },
  {
    "id": "javascript-js-dio-inicial-introducao-ao-desenvolviment-web-com-javascript-1h",
    "title": "Introdução ao Desenvolvimento Web com JavaScript",
    "institution": "DIO",
    "date": "02/11/2022",
    "workload": "1 hora",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-inicial-introducao-ao-desenvolviment-web-com-javascript-1h.pdf",
    "featured": false,
    "priority": 1072,
    "image": "/certificates/previews/javascript-js-dio-inicial-introducao-ao-desenvolviment-web-com-javascript-1h.webp"
  },
  {
    "id": "javascript-js-dio-inicial-objetos-e-classes-2h",
    "title": "Objetos e Classes",
    "institution": "DIO",
    "date": "31/10/2022",
    "workload": "2 horas",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-inicial-objetos-e-classes-2h.pdf",
    "featured": false,
    "priority": 1073,
    "image": "/certificates/previews/javascript-js-dio-inicial-objetos-e-classes-2h.webp"
  },
  {
    "id": "javascript-js-dio-inicial-tornando-paginas-web-interativas-com-js-2h",
    "title": "Tornando Páginas Web Interativas com JS",
    "institution": "DIO",
    "date": "18/12/2023",
    "workload": "2 horas",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-inicial-tornando-paginas-web-interativas-com-js-2h.pdf",
    "featured": false,
    "priority": 1074,
    "image": "/certificates/previews/javascript-js-dio-inicial-tornando-paginas-web-interativas-com-js-2h.webp"
  },
  {
    "id": "javascript-js-dio-intermediario-projeto-pratico-pokedex",
    "title": "Projeto Prático Pokédex",
    "institution": "DIO",
    "date": "10/12/2022",
    "tags": [
      "JavaScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Javascript/js-dio-intermediario-projeto-pratico-pokedex.pdf",
    "featured": false,
    "priority": 1075,
    "image": "/certificates/previews/javascript-js-dio-intermediario-projeto-pratico-pokedex.webp"
  },
  {
    "id": "metodos-ageis-agil-dio-curso-trabalhando-em-equipes-ageis-3h",
    "title": "Curso Trabalhando em Equipes Ágeis",
    "institution": "DIO",
    "date": "29/11/2022",
    "workload": "3 horas",
    "tags": [
      "Métodos Ágeis"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/M%C3%A9todos%20%C3%81geis/agil-dio-curso-trabalhando-em-equipes-ageis-3h.pdf",
    "featured": false,
    "priority": 1076,
    "image": "/certificates/previews/metodos-ageis-agil-dio-curso-trabalhando-em-equipes-ageis-3h.webp"
  },
  {
    "id": "net-net-dio-introducao-2h",
    "title": ".NET: Introdução",
    "institution": "DIO",
    "date": "24/01/2024",
    "workload": "2 horas",
    "tags": [
      ".NET"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/NET/.net-dio-introducao-2h.pdf",
    "featured": false,
    "priority": 1077,
    "image": "/certificates/previews/net-net-dio-introducao-2h.webp"
  },
  {
    "id": "next-next-certificate-dio-projeto-blog-pessoal",
    "title": "Projeto Blog Pessoal",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "Next.js"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Next/next-certificate-dio-projeto-blog-pessoal.pdf",
    "featured": false,
    "priority": 1078,
    "image": "/certificates/previews/next-next-certificate-dio-projeto-blog-pessoal.webp"
  },
  {
    "id": "next-next-certificate-introducao",
    "title": "Introdução",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "Next.js"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Next/next-certificate-introducao.pdf",
    "featured": false,
    "priority": 1079,
    "image": "/certificates/previews/next-next-certificate-introducao.webp"
  },
  {
    "id": "outros-dio-certificado-escrita-transformando-seu-conhecimento-em-artigos-tecnicos-1h",
    "title": "Escrita Transformando Seu Conhecimento em Artigos Técnicos",
    "institution": "DIO",
    "date": "30/11/2022",
    "workload": "1 hora",
    "tags": [],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Outros/dio-certificado-escrita-transformando-seu-conhecimento-em-artigos-tecnicos-1h.pdf",
    "featured": false,
    "priority": 1080,
    "image": "/certificates/previews/outros-dio-certificado-escrita-transformando-seu-conhecimento-em-artigos-tecnicos-1h.webp"
  },
  {
    "id": "outros-dio-curso-dominando-protocolo-http-e-integrando-com-a-pokeapi-4h",
    "title": "Dominando Protocolo HTTP e Integrando com a PokéAPI",
    "institution": "DIO",
    "date": "05/11/2022",
    "workload": "4 horas",
    "tags": [],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Outros/dio-curso-dominando-protocolo-http-e-integrando-com-a-pokeapi-4h.pdf",
    "featured": false,
    "priority": 1081,
    "image": "/certificates/previews/outros-dio-curso-dominando-protocolo-http-e-integrando-com-a-pokeapi-4h.webp"
  },
  {
    "id": "postgresql-postgresql-dio-conceitos-e-melhores-praticas-com-bancos-de-dados-postgresql-9h",
    "title": "Conceitos e Melhores Práticas com Bancos de Dados PostgreSQL",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "9 horas",
    "tags": [
      "SQL",
      "PostgreSQL"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/PostgreSQL/postgresql-dio-conceitos-e-melhores-praticas-com-bancos-de-dados-postgresql-9h.pdf",
    "featured": false,
    "priority": 1082,
    "image": "/certificates/previews/postgresql-postgresql-dio-conceitos-e-melhores-praticas-com-bancos-de-dados-postgresql-9h.webp"
  },
  {
    "id": "react-react-certificate-conceitos-basicos",
    "title": "Conceitos Básicos",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-conceitos-basicos.pdf",
    "featured": false,
    "priority": 1083,
    "image": "/certificates/previews/react-react-certificate-conceitos-basicos.webp"
  },
  {
    "id": "react-react-certificate-curso-styled-components-2h",
    "title": "Curso Styled Components",
    "institution": "DIO",
    "date": "14/11/2022",
    "workload": "2 horas",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-curso-styled-components-2h.pdf",
    "featured": false,
    "priority": 1084,
    "image": "/certificates/previews/react-react-certificate-curso-styled-components-2h.webp"
  },
  {
    "id": "react-react-certificate-dio-ampliando-conhecimento",
    "title": "Ampliando Conhecimento",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-ampliando-conhecimento.pdf",
    "featured": false,
    "priority": 1085,
    "image": "/certificates/previews/react-react-certificate-dio-ampliando-conhecimento.webp"
  },
  {
    "id": "react-react-certificate-dio-conceitos-avancados",
    "title": "Conceitos Avancados",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-conceitos-avancados.pdf",
    "featured": false,
    "priority": 1086,
    "image": "/certificates/previews/react-react-certificate-dio-conceitos-avancados.webp"
  },
  {
    "id": "react-react-certificate-dio-conceitos-fundamentais",
    "title": "Conceitos Fundamentais",
    "institution": "DIO",
    "date": "28/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-conceitos-fundamentais.pdf",
    "featured": false,
    "priority": 1087,
    "image": "/certificates/previews/react-react-certificate-dio-conceitos-fundamentais.webp"
  },
  {
    "id": "react-react-certificate-dio-convencoes-e-qualidade-de-codigo-react",
    "title": "Convencoes e Qualidade de Código React",
    "institution": "DIO",
    "date": "28/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-convencoes-e-qualidade-de-codigo-react.pdf",
    "featured": false,
    "priority": 1088,
    "image": "/certificates/previews/react-react-certificate-dio-convencoes-e-qualidade-de-codigo-react.webp"
  },
  {
    "id": "react-react-certificate-dio-dominando-ferramentas-avancadas",
    "title": "Dominando Ferramentas Avancadas",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-dominando-ferramentas-avancadas.pdf",
    "featured": false,
    "priority": 1089,
    "image": "/certificates/previews/react-react-certificate-dio-dominando-ferramentas-avancadas.webp"
  },
  {
    "id": "react-react-certificate-dio-entendendo-a-dom",
    "title": "Entendendo a DOM",
    "institution": "DIO",
    "date": "22/12/2023",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-entendendo-a-dom.pdf",
    "featured": false,
    "priority": 1090,
    "image": "/certificates/previews/react-react-certificate-dio-entendendo-a-dom.webp"
  },
  {
    "id": "react-react-certificate-dio-fundamentos",
    "title": "Fundamentos",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-fundamentos.pdf",
    "featured": false,
    "priority": 1091,
    "image": "/certificates/previews/react-react-certificate-dio-fundamentos.webp"
  },
  {
    "id": "react-react-certificate-dio-inicial-comecando-na-biblioteca-react-13h",
    "title": "Começando na Biblioteca React",
    "institution": "DIO",
    "date": "09/12/2022",
    "workload": "13 horas",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-inicial-comecando-na-biblioteca-react-13h.pdf",
    "featured": false,
    "priority": 1092,
    "image": "/certificates/previews/react-react-certificate-dio-inicial-comecando-na-biblioteca-react-13h.webp"
  },
  {
    "id": "react-react-certificate-dio-projeto-pratico-2",
    "title": "Projeto Prático 2",
    "institution": "DIO",
    "date": "28/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-projeto-pratico-2.pdf",
    "featured": false,
    "priority": 1093,
    "image": "/certificates/previews/react-react-certificate-dio-projeto-pratico-2.webp"
  },
  {
    "id": "react-react-certificate-dio-projeto-pratico-tela-de-cadastro",
    "title": "Projeto Prático Tela de Cadastro",
    "institution": "DIO",
    "date": "09/12/2022",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-projeto-pratico-tela-de-cadastro.pdf",
    "featured": false,
    "priority": 1094,
    "image": "/certificates/previews/react-react-certificate-dio-projeto-pratico-tela-de-cadastro.webp"
  },
  {
    "id": "react-react-certificate-dio-projeto-pratico",
    "title": "Projeto Prático",
    "institution": "DIO",
    "date": "31/01/2024",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-dio-projeto-pratico.pdf",
    "featured": false,
    "priority": 1095,
    "image": "/certificates/previews/react-react-certificate-dio-projeto-pratico.webp"
  },
  {
    "id": "react-react-certificate-inicial-ambiente-react-1h",
    "title": "Ambiente React",
    "institution": "DIO",
    "date": "07/11/2022",
    "workload": "1 hora",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-inicial-ambiente-react-1h.pdf",
    "featured": false,
    "priority": 1096,
    "image": "/certificates/previews/react-react-certificate-inicial-ambiente-react-1h.webp"
  },
  {
    "id": "react-react-certificate-inicial-cli-1h",
    "title": "CLI",
    "institution": "DIO",
    "date": "08/11/2022",
    "workload": "1 hora",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-inicial-cli-1h.pdf",
    "featured": false,
    "priority": 1097,
    "image": "/certificates/previews/react-react-certificate-inicial-cli-1h.webp"
  },
  {
    "id": "react-react-certificate-inicial-hooks-1h",
    "title": "Hooks",
    "institution": "DIO",
    "date": "14/11/2022",
    "workload": "1 hora",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-inicial-hooks-1h.pdf",
    "featured": false,
    "priority": 1098,
    "image": "/certificates/previews/react-react-certificate-inicial-hooks-1h.webp"
  },
  {
    "id": "react-react-certificate-inicial-primeiros-passos-1h",
    "title": "Primeiros Passos",
    "institution": "DIO",
    "date": "07/11/2022",
    "workload": "1 hora",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-inicial-primeiros-passos-1h.pdf",
    "featured": false,
    "priority": 1099,
    "image": "/certificates/previews/react-react-certificate-inicial-primeiros-passos-1h.webp"
  },
  {
    "id": "react-react-certificate-projeto-pratico-calculadora-1h",
    "title": "Projeto Prático Calculadora",
    "institution": "DIO",
    "date": "02/12/2022",
    "workload": "1 hora",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-projeto-pratico-calculadora-1h.pdf",
    "featured": false,
    "priority": 1100,
    "image": "/certificates/previews/react-react-certificate-projeto-pratico-calculadora-1h.webp"
  },
  {
    "id": "react-react-certificate-projeto-pratico-wiki-de-respositorio-do-github-com-react-e-consumo-de-api-1h",
    "title": "Projeto Prático Wiki de Repositório do GitHub com React e Consumo de API",
    "institution": "DIO",
    "date": "08/12/2022",
    "workload": "1 hora",
    "tags": [
      "React",
      "APIs REST",
      "Git/GitHub"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-certificate-projeto-pratico-wiki-de-respositorio-do-github-com-react-e-consumo-de-api-1h.pdf",
    "featured": false,
    "priority": 1101,
    "image": "/certificates/previews/react-react-certificate-projeto-pratico-wiki-de-respositorio-do-github-com-react-e-consumo-de-api-1h.webp"
  },
  {
    "id": "react-react-dio-curso-trabalhando-com-formularios-no-react-1h",
    "title": "Curso Trabalhando com Formulários no React",
    "institution": "DIO",
    "date": "16/11/2022",
    "workload": "1 hora",
    "tags": [
      "React"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/React/react-dio-curso-trabalhando-com-formularios-no-react-1h.pdf",
    "featured": false,
    "priority": 1102,
    "image": "/certificates/previews/react-react-dio-curso-trabalhando-com-formularios-no-react-1h.webp"
  },
  {
    "id": "spring-java-dio-conhecendo-spring-data-jpa-na-pratica-com-java-2h",
    "title": "Conhecendo Spring Data JPA na Prática com Java",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "2 horas",
    "tags": [
      "Java",
      "Spring"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/java-dio-conhecendo-spring-data-jpa-na-pratica-com-java-2h.pdf",
    "featured": false,
    "priority": 1103,
    "image": "/certificates/previews/spring-java-dio-conhecendo-spring-data-jpa-na-pratica-com-java-2h.webp"
  },
  {
    "id": "spring-spring-dio-adicionando-seguranca-a-uma-api-rest-com-spring-security-2h",
    "title": "Adicionando Segurança a uma API REST com Spring Security",
    "institution": "DIO",
    "date": "11/01/2023",
    "workload": "2 horas",
    "tags": [
      "Java",
      "Spring",
      "APIs REST"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/spring-dio-adicionando-seguranca-a-uma-api-rest-com-spring-security-2h.pdf",
    "featured": false,
    "priority": 1104,
    "image": "/certificates/previews/spring-spring-dio-adicionando-seguranca-a-uma-api-rest-com-spring-security-2h.webp"
  },
  {
    "id": "spring-spring-dio-criando-uma-api-rest-documentada-com-spring-web-e-swagger-2h",
    "title": "Criando uma API REST Documentada com Spring Web e Swagger",
    "institution": "DIO",
    "date": "11/01/2023",
    "workload": "2 horas",
    "tags": [
      "Java",
      "Spring",
      "APIs REST"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/spring-dio-criando-uma-api-rest-documentada-com-spring-web-e-swagger-2h.pdf",
    "featured": false,
    "priority": 1105,
    "image": "/certificates/previews/spring-spring-dio-criando-uma-api-rest-documentada-com-spring-web-e-swagger-2h.webp"
  },
  {
    "id": "spring-spring-dio-domine-o-estilo-arquitetural-rest-com-spring-web-3h",
    "title": "Domine O Estilo Arquitetural REST com Spring Web",
    "institution": "DIO",
    "date": "10/01/2023",
    "workload": "3 horas",
    "tags": [
      "Java",
      "Spring"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/spring-dio-domine-o-estilo-arquitetural-rest-com-spring-web-3h.pdf",
    "featured": false,
    "priority": 1106,
    "image": "/certificates/previews/spring-spring-dio-domine-o-estilo-arquitetural-rest-com-spring-web-3h.webp"
  },
  {
    "id": "spring-spring-dio-ganhando-produtividade-com-spring-framework-12h",
    "title": "Ganhando Produtividade com Spring Framework",
    "institution": "DIO",
    "date": "23/02/2023",
    "workload": "12 horas",
    "tags": [
      "Java",
      "Spring"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/spring-dio-ganhando-produtividade-com-spring-framework-12h.pdf",
    "featured": false,
    "priority": 1107,
    "image": "/certificates/previews/spring-spring-dio-ganhando-produtividade-com-spring-framework-12h.webp"
  },
  {
    "id": "spring-spring-dio-ganhando-produtividade-com-spring-framework-20h",
    "title": "Ganhando Produtividade com Spring Framework",
    "institution": "DIO",
    "date": "13/02/2023",
    "workload": "20 horas",
    "tags": [
      "Java",
      "Spring"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/spring-dio-ganhando-produtividade-com-spring-framework-20h.pdf",
    "featured": false,
    "priority": 1108,
    "image": "/certificates/previews/spring-spring-dio-ganhando-produtividade-com-spring-framework-20h.webp"
  },
  {
    "id": "spring-spring-dio-imersao-no-spring-framework-com-spring-boot-3h",
    "title": "Imersão no Spring Framework com Spring Boot",
    "institution": "DIO",
    "date": "11/01/2023",
    "workload": "3 horas",
    "tags": [
      "Java",
      "Spring"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/spring-dio-imersao-no-spring-framework-com-spring-boot-3h.pdf",
    "featured": false,
    "priority": 1109,
    "image": "/certificates/previews/spring-spring-dio-imersao-no-spring-framework-com-spring-boot-3h.webp"
  },
  {
    "id": "spring-spring-dio-simplificando-projetos-java-com-o-spring-boot-3h",
    "title": "Simplificando Projetos Java com O Spring Boot",
    "institution": "DIO",
    "date": "10/01/2023",
    "workload": "3 horas",
    "tags": [
      "Java",
      "Spring"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Spring/spring-dio-simplificando-projetos-java-com-o-spring-boot-3h.pdf",
    "featured": false,
    "priority": 1110,
    "image": "/certificates/previews/spring-spring-dio-simplificando-projetos-java-com-o-spring-boot-3h.webp"
  },
  {
    "id": "teoria-da-computacao-dio-curso-introducao-ao-desenvolvimento-moderno-de-software-2h",
    "title": "Introdução ao Desenvolvimento Moderno de Software",
    "institution": "DIO",
    "date": "26/10/2022",
    "workload": "2 horas",
    "tags": [
      "Fundamentos de computação"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Teoria%20da%20Computa%C3%A7%C3%A3o/dio-curso-introducao-ao-desenvolvimento-moderno-de-software-2h.pdf",
    "featured": false,
    "priority": 1111,
    "image": "/certificates/previews/teoria-da-computacao-dio-curso-introducao-ao-desenvolvimento-moderno-de-software-2h.webp"
  },
  {
    "id": "teoria-da-computacao-dio-curso-programacao-e-pensamento-computacional-5h",
    "title": "Programação e Pensamento Computacional",
    "institution": "DIO",
    "date": "27/10/2022",
    "workload": "5 horas",
    "tags": [
      "Fundamentos de computação"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Teoria%20da%20Computa%C3%A7%C3%A3o/dio-curso-programacao-e-pensamento-computacional-5h.pdf",
    "featured": false,
    "priority": 1112,
    "image": "/certificates/previews/teoria-da-computacao-dio-curso-programacao-e-pensamento-computacional-5h.webp"
  },
  {
    "id": "teoria-da-computacao-dio-entendendo-comunicacao-client-server-2h",
    "title": "Entendendo Comunicação Client Server",
    "institution": "DIO",
    "date": "06/11/2023",
    "workload": "2 horas",
    "tags": [
      "Fundamentos de computação"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Teoria%20da%20Computa%C3%A7%C3%A3o/dio-entendendo-comunicacao-client-server-2h.pdf",
    "featured": false,
    "priority": 1113,
    "image": "/certificates/previews/teoria-da-computacao-dio-entendendo-comunicacao-client-server-2h.webp"
  },
  {
    "id": "teoria-da-computacao-dio-principais-protocolos-de-comunicacao-da-internet-3h",
    "title": "Principais Protocolos de Comunicação da Internet",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "3 horas",
    "tags": [
      "Fundamentos de computação"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Teoria%20da%20Computa%C3%A7%C3%A3o/dio-principais-protocolos-de-comunicacao-da-internet-3h.pdf",
    "featured": false,
    "priority": 1114,
    "image": "/certificates/previews/teoria-da-computacao-dio-principais-protocolos-de-comunicacao-da-internet-3h.webp"
  },
  {
    "id": "teoria-da-computacao-dio-programacao-orientada-a-objetos-4h",
    "title": "Programação Orientada a Objetos",
    "institution": "DIO",
    "date": "09/01/2023",
    "workload": "4 horas",
    "tags": [
      "Fundamentos de computação"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Teoria%20da%20Computa%C3%A7%C3%A3o/dio-programacao-orientada-a-objetos-4h.pdf",
    "featured": false,
    "priority": 1115,
    "image": "/certificates/previews/teoria-da-computacao-dio-programacao-orientada-a-objetos-4h.webp"
  },
  {
    "id": "typescript-typescript-certificate-dio-curso-conversao-de-js-pra-ts-1h",
    "title": "Curso Conversão de JS para TS",
    "institution": "DIO",
    "date": "17/11/2022",
    "workload": "1 hora",
    "tags": [
      "TypeScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Typescript/typescript-certificate-dio-curso-conversao-de-js-pra-ts-1h.pdf",
    "featured": false,
    "priority": 1116,
    "image": "/certificates/previews/typescript-typescript-certificate-dio-curso-conversao-de-js-pra-ts-1h.webp"
  },
  {
    "id": "typescript-typescript-certificate-dio-projeto-pratico-tela-de-login-com-validacao-com-ts-1h",
    "title": "Projeto Prático Tela de Login com Validação com TS",
    "institution": "DIO",
    "date": "09/12/2022",
    "workload": "1 hora",
    "tags": [
      "TypeScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Typescript/typescript-certificate-dio-projeto-pratico-tela-de-login-com-validacao-com-ts-1h.pdf",
    "featured": false,
    "priority": 1117,
    "image": "/certificates/previews/typescript-typescript-certificate-dio-projeto-pratico-tela-de-login-com-validacao-com-ts-1h.webp"
  },
  {
    "id": "typescript-typescript-certificate-dio-react-com-ts",
    "title": "React com TS",
    "institution": "DIO",
    "date": "31/01/2024",
    "workload": "4 horas",
    "tags": [
      "TypeScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Typescript/typescript-certificate-dio-react-com-ts.pdf",
    "featured": false,
    "priority": 1118,
    "image": "/certificates/previews/typescript-typescript-certificate-dio-react-com-ts.webp"
  },
  {
    "id": "typescript-typescript-dio-certificate-ts-para-angular-3h",
    "title": "TS para Angular",
    "institution": "DIO",
    "date": "19/01/2023",
    "workload": "3 horas",
    "tags": [
      "TypeScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Typescript/typescript-dio-certificate-ts-para-angular-3h.pdf",
    "featured": false,
    "priority": 1119,
    "image": "/certificates/previews/typescript-typescript-dio-certificate-ts-para-angular-3h.webp"
  },
  {
    "id": "typescript-typescript-dio-inicial-curso-fundamentos-do-ts-1h",
    "title": "Curso Fundamentos do TS",
    "institution": "DIO",
    "date": "16/11/2022",
    "workload": "1 hora",
    "tags": [
      "TypeScript"
    ],
    "learnings": [],
    "document": "https://raw.githubusercontent.com/castroalves-gabi/certificados/efae8ec17b29c7381369b9b7b073a65141496731/Typescript/typescript-dio-inicial-curso-fundamentos-do-ts-1h.pdf",
    "featured": false,
    "priority": 1120,
    "image": "/certificates/previews/typescript-typescript-dio-inicial-curso-fundamentos-do-ts-1h.webp"
  },
  {
    "id": "daxus-imersao-claude-na-pratica",
    "title": "Imersão Claude na Prática",
    "institution": "Daxus",
    "date": "22/11/2026",
    "workload": "8 horas",
    "tags": [
      "Inteligência Artificial",
      "Claude"
    ],
    "learnings": [],
    "document": "/certificates/daxus-imersao-claude-na-pratica.pdf",
    "featured": false,
    "priority": 1121,
    "image": "/certificates/previews/daxus-imersao-claude-na-pratica.png"
  }
]
