export type Certificate = {
  name: string
  issuer: string
  year?: string
  file?: string
}

export const certificates: Certificate[] = []
