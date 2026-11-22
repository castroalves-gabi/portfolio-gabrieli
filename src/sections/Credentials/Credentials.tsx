import { SectionHeading } from '../../components/SectionHeading'
import styles from './Credentials.module.css'

export function Credentials() {
  return (
    <section className={styles.section} aria-labelledby="credentials-title">
      <SectionHeading id="credentials-title" title="Formação e credenciais" description="Formação, certificados e conquistas." />
    </section>
  )
}
