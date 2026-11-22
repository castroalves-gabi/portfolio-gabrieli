import { ArrowUpRight, Award, BookOpen, Languages, Trophy } from 'lucide-react'
import { achievements } from '../../data/achievements'
import { certificates } from '../../data/certificates'
import { education } from '../../data/education'
import { languages } from '../../data/languages'
import { SectionHeading } from '../../components/SectionHeading'
import styles from './Credentials.module.css'

export function Credentials() {
  return (
    <section className={styles.section} id="credentials" aria-labelledby="credentials-title">
      <SectionHeading id="credentials-title" title="Formação e trajetória" description="Estudos, realizações e idiomas em uma única visão." />
      <div className={styles.topGrid}>
        <article className={styles.educationCard}>
          <span className={styles.icon}><BookOpen size={19} aria-hidden="true" /></span>
          <div><span className={styles.kicker}>Formação</span>{education.map((item) => <div key={item.course}><h3>{item.course}</h3><p>{item.institution}</p><span className={styles.detail}>{item.period}</span></div>)}</div>
        </article>
        <article className={styles.languagesCard}>
          <div className={styles.cardTitle}><span className={styles.icon}><Languages size={19} aria-hidden="true" /></span><div><span className={styles.kicker}>Idiomas</span><h3>Comunicação</h3></div></div>
          <ul>{languages.map((language) => <li key={language.name}><span>{language.name}</span><span>{language.proficiency}</span></li>)}</ul>
        </article>
      </div>
      <div className={styles.bottomGrid}>
        <div className={styles.achievementPanel}>
          <div className={styles.sectionTitle}><Trophy size={18} aria-hidden="true" /><h3>Conquistas</h3></div>
          <div className={styles.achievementList}>{achievements.map((achievement) => <article key={achievement.title}><span className={styles.goldMark}><Award size={17} aria-hidden="true" /></span><div><h4>{achievement.title}</h4><p>{achievement.description}</p></div></article>)}</div>
        </div>
        <div className={styles.certificatePanel}>
          <div className={styles.sectionTitle}><Award size={18} aria-hidden="true" /><h3>Certificações</h3></div>
          {certificates.length ? <div className={styles.certificateList}>{certificates.map((certificate) => <article key={`${certificate.name}-${certificate.issuer}`}><h4>{certificate.name}</h4><p>{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ''}{certificate.hours ? ` · ${certificate.hours}` : ''}</p>{certificate.file && <a href={certificate.file} target="_blank" rel="noreferrer">Abrir certificado <ArrowUpRight size={14} /></a>}{certificate.validationUrl && <a href={certificate.validationUrl} target="_blank" rel="noreferrer">Validar <ArrowUpRight size={14} /></a>}{certificate.tags?.length ? <div className={styles.tags}>{certificate.tags.map((tag) => <span key={tag}>{tag}</span>)}</div> : null}{certificate.learnings && <p>{certificate.learnings}</p>}{certificate.application && <p>{certificate.application}</p>}</article>)}</div> : <p className={styles.emptyState}>Certificados confirmados serão adicionados aqui com instituição, data, carga horária e link de validação.</p>}
        </div>
      </div>
    </section>
  )
}
