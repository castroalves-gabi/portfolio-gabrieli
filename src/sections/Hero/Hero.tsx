import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { contact } from '../../data/contact'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="about" aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span /> Portfólio · {profile.nickname}</p>
        <h1 id="hero-title">Olá, eu sou <span>{profile.name}.</span></h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.intro}>{profile.headline}</p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#projects">Conheça meus projetos <ArrowDownRight size={17} aria-hidden="true" /></a>
          <a className={styles.textAction} href={contact.github} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a className={styles.textAction} href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a className={styles.textAction} href={`mailto:${contact.email}`}><Mail size={17} aria-hidden="true" /> E-mail <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
      <div className={styles.profileCard}>
        <span className={styles.cardLabel}>Agora</span>
        <h2>{profile.education.course}</h2>
        <p>{profile.education.institution}</p>
        <span className={styles.completion}>{profile.education.completion}</span>
        <div className={styles.cardDivider} />
        <span className={styles.cardLabel}>Interesses</span>
        <ul className={styles.focusList}>{profile.focus.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className={styles.aboutBlock}>
        <div>
          <span className={styles.sectionKicker}>Sobre mim</span>
          <p>{profile.about}</p>
        </div>
        <div className={styles.techStack} aria-label="Tecnologias principais">
          <span className={styles.sectionKicker}>Tecnologias</span>
          <div>{profile.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
