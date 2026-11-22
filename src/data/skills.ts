export type Skill = { name: string; category: string }

export const skills: Skill[] = [
  ...['Python', 'JavaScript', 'React', 'HTML', 'CSS'].map((name) => ({ name, category: 'Desenvolvimento' })),
  ...['MySQL', 'MongoDB'].map((name) => ({ name, category: 'Dados' })),
]
