import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { contact } from '../../data/contact'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.contactCopy}>
        <span className={styles.kicker}>Contato</span>
        <h2 id="contact-title">Vamos conversar?</h2>
        <p>{contact.message}</p>
        <a className={styles.emailAction} href={`mailto:${contact.email}`}><Mail size={17} aria-hidden="true" /> {contact.email} <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
      <div className={styles.socialLinks}>
        <a href={contact.github} target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" /><span><strong>GitHub</strong><small>Projetos e código</small></span><ArrowUpRight size={15} aria-hidden="true" /></a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} aria-hidden="true" /><span><strong>LinkedIn</strong><small>Conecte-se comigo</small></span><ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
