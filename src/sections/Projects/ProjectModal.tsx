import { useEffect, useRef } from 'react'
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react'
import { contact } from '../../data/contact'
import type { Project } from '../../data/projects'
import styles from './ProjectModal.module.css'

type ProjectModalProps = { project: Project | null; onClose: () => void }

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const dialog = document.getElementById('project-dialog')
      if (!dialog) return
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className={styles.overlay} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className={styles.dialog} id="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description" tabIndex={-1}>
        <button ref={closeRef} className={styles.close} type="button" onClick={onClose} aria-label="Fechar detalhes"><X size={19} /></button>
        <div className={styles.dialogHero}>
          {project.images.length ? project.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} />) : <div className={styles.imagePlaceholder}><span>{project.title}</span><small>Espaço reservado para imagens reais do projeto</small></div>}
        </div>
        <div className={styles.dialogContent}>
          <span className={styles.category}>{project.category}</span>
          <div className={styles.titleLine}><h2 id="project-dialog-title">{project.title}</h2><span className={styles.status}>{project.status}</span></div>
          <p id="project-dialog-description" className={styles.description}>{project.description}</p>
          <div className={styles.columns}>
            <div>
              <section className={styles.detailSection}>
                <h3>Escopo planejado</h3>
                <ul className={styles.featureList}>{project.features.map((feature) => <li key={feature}><span aria-hidden="true">+</span>{feature}</li>)}</ul>
              </section>
              <section className={styles.detailSection}>
                <h3>Tecnologias</h3>
                <div className={styles.techList}>{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <p>Tecnologias ainda não definidas.</p>}</div>
              </section>
            </div>
            <div>
              <section className={styles.detailSection}><h3>Decisões técnicas</h3><p>{project.technicalDecisions}</p></section>
              <section className={styles.detailSection}><h3>Desafios técnicos</h3><p className={styles.editable}>{project.challenges}</p></section>
              <section className={styles.detailSection}><h3>Resultados futuros</h3><p className={styles.editable}>{project.results}</p></section>
            </div>
          </div>
          <div className={styles.links}>
            {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> Ver repositório <ArrowUpRight size={14} /></a> : <a href={contact.github} target="_blank" rel="noreferrer"><Github size={17} /> Perfil GitHub <ArrowUpRight size={14} /></a>}
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Demonstração online <ArrowUpRight size={14} /></a> : <span className={styles.unavailable}><ExternalLink size={16} /> Demonstração a adicionar</span>}
          </div>
        </div>
      </section>
    </div>
  )
}
