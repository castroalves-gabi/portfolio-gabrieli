import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  id: string
  title: string
  description?: string
  children?: ReactNode
}

export function SectionHeading({ id, title, description, children }: SectionHeadingProps) {
  return (
    <header className={styles.heading}>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </header>
  )
}
