import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <h2 id="contact-title">Vamos conversar?</h2>
      <a href={`mailto:${profile.email}`}>
        <Mail size={18} aria-hidden="true" />
        {profile.email}
      </a>
    </section>
  )
}
