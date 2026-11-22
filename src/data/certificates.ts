export type Certificate = {
  name: string
  issuer: string
  date?: string
  hours?: string
  file?: string
  validationUrl?: string
  tags?: string[]
  learnings?: string
  application?: string
}

// Adicione aqui certificados confirmados com dados e arquivos de validação.
export const certificates: Certificate[] = []
