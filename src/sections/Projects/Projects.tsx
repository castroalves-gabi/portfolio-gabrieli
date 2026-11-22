import { useEffect, useRef, useState, type RefObject } from 'react'
import { ArrowDownRight, ArrowUpRight, ExternalLink, Eye } from 'lucide-react'
import { projects, type Project } from '../../data/projects'
import { SectionHeading } from '../../components/SectionHeading'
import styles from './Projects.module.css'

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const complementaryProjects = projects.filter((project) => !project.featured)

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionHeading}>
        <SectionHeading id="projects-title" title="Projetos em construção" description="Produtos digitais em diferentes estágios. Cada detalhe separa o que já funciona do que ainda está no roadmap." />
      </div>
      <div className={styles.featuredList}>
        {featuredProjects.map((project, index) => <FeaturedProject key={project.id} project={project} index={index} />)}
      </div>
      {complementaryProjects.length > 0 && <section className={styles.complementary} aria-labelledby="complementary-title">
        <div className={styles.complementaryHeading}><span>Estudo complementar</span><p id="complementary-title">Projetos menores e experimentos</p></div>
        <div className={styles.complementaryList}>{complementaryProjects.map((project, index) => <ComplementaryProject key={project.id} project={project} index={index} />)}</div>
      </section>}
    </section>
  )
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const moreButtonRef = useRef<HTMLButtonElement>(null)
  const lessButtonRef = useRef<HTMLButtonElement>(null)
  const detailsToolbarRef = useRef<HTMLDivElement>(null)
  const wasExpanded = useRef(false)
  const hasImplementedHighlights = project.implementedFeatures.length > 0
  const highlights = hasImplementedHighlights ? project.implementedFeatures.slice(0, 3) : project.plannedFeatures.slice(0, 3)

  useEffect(() => {
    if (expanded) {
      wasExpanded.current = true
      requestAnimationFrame(() => {
        detailsToolbarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        lessButtonRef.current?.focus({ preventScroll: true })
      })
    } else if (wasExpanded.current) {
      wasExpanded.current = false
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        moreButtonRef.current?.focus({ preventScroll: true })
      })
    }
  }, [expanded])

  return (
    <article className={styles.featuredProject} ref={sectionRef}>
      <div className={styles.featureLayout}>
        <div className={styles.featureCopy}>
          <div className={styles.featureMeta}><span>{project.category}</span><span className={`${styles.status} ${project.statusKind === 'published' ? styles.published : ''} ${project.statusKind === 'in-progress' ? styles.inProgress : ''}`}>{project.status}</span></div>
          <h3>{project.title}</h3>
          <p className={styles.featureSummary}>{project.summary}</p>
          {highlights.length > 0 && <div className={styles.previewFeatures}><span>{hasImplementedHighlights ? 'Já funciona' : 'No planejamento'}</span><ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>}
          <div className={styles.featureTechs}>{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <span>Tecnologias a definir</span>}</div>
          <div className={styles.featureActions}>
            {project.demo && <a className={styles.demoButton} href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Abrir projeto</a>}
            {!expanded && <button ref={moreButtonRef} type="button" className={styles.moreButton} aria-expanded="false" onClick={() => setExpanded(true)}>Ver mais <ArrowDownRight size={17} aria-hidden="true" /></button>}
          </div>
        </div>
        <ProjectVisual project={project} index={index} large />
      </div>
      {expanded && <ExpandedProjectDetails project={project} closeButtonRef={lessButtonRef} toolbarRef={detailsToolbarRef} onCollapse={() => setExpanded(false)} />}
    </article>
  )
}

function ComplementaryProject({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const moreButtonRef = useRef<HTMLButtonElement>(null)
  const lessButtonRef = useRef<HTMLButtonElement>(null)
  const detailsToolbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!expanded) return
    requestAnimationFrame(() => {
      detailsToolbarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      lessButtonRef.current?.focus({ preventScroll: true })
    })
  }, [expanded])

  return (
    <div className={styles.complementaryEntry}>
      <article className={styles.complementaryProject}>
        <ProjectVisual project={project} index={index + 3} />
        <div className={styles.complementaryBody}>
          <div className={styles.featureMeta}><span>{project.category}</span><span className={styles.status}>{project.status}</span></div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className={styles.featureTechs}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <div className={styles.featureActions}>
            {project.demo && <a className={styles.demoButton} href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={15} aria-hidden="true" /> Abrir projeto</a>}
            {!expanded && <button ref={moreButtonRef} type="button" className={styles.moreButton} aria-expanded="false" onClick={() => setExpanded(true)}>Ver mais <ArrowDownRight size={16} aria-hidden="true" /></button>}
          </div>
        </div>
      </article>
      {expanded && <ExpandedProjectDetails project={project} closeButtonRef={lessButtonRef} toolbarRef={detailsToolbarRef} onCollapse={() => setExpanded(false)} />}
    </div>
  )
}

function ProjectVisual({ project, index, large = false }: { project: Project; index: number; large?: boolean }) {
  return (
    <div className={`${styles.thumbnail} ${styles[`art${index + 1}`]} ${project.images.length ? styles.thumbnailImage : ''} ${large ? styles.thumbnailLarge : ''}`} aria-label={project.images.length ? undefined : `Composição visual de ${project.title}`}>
      {project.images.length ? <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" /> : <>
        <span className={styles.thumbOrb} />
        <span className={styles.thumbLines} />
        <span className={styles.thumbCaption}><Eye size={14} aria-hidden="true" /> Prévia visual</span>
        <span className={styles.thumbTitle}>{project.title}</span>
      </>}
    </div>
  )
}

function ExpandedProjectDetails({ project, closeButtonRef, toolbarRef, onCollapse }: {
  project: Project
  closeButtonRef: RefObject<HTMLButtonElement>
  toolbarRef: RefObject<HTMLDivElement>
  onCollapse: () => void
}) {
  return (
    <div className={styles.expandedPanel}>
      <div className={styles.detailsToolbar} ref={toolbarRef}>
        <span>Detalhes do projeto</span>
        <button ref={closeButtonRef} type="button" className={styles.lessButton} aria-expanded="true" onClick={onCollapse}>Ver menos <ArrowUpRight size={15} aria-hidden="true" /></button>
      </div>
      <div className={styles.detailsContent}>
        <p className={styles.longDescription}>{project.description}</p>
        <div className={styles.detailsColumns}>
          <div>
            {project.implementedFeatures.length > 0 && <DetailList title="O que já funciona" items={project.implementedFeatures} marker="✓" />}
            {project.plannedFeatures.length > 0 && !project.roadmap?.length && <DetailList title="Próximas funcionalidades" items={project.plannedFeatures} marker="+" />}
            {project.roadmap?.map((milestone) => <DetailList key={milestone.title} title={milestone.title} items={milestone.items} marker="·" />)}
          </div>
          <div>
            <section className={styles.detailBlock}>
              <h4>Tecnologias</h4>
              <div className={styles.detailTags}>{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <p>Tecnologias ainda não definidas.</p>}</div>
              {project.plannedTechnologies && project.plannedTechnologies.length > 0 && <><h5>Planejadas</h5><div className={styles.detailTags}>{project.plannedTechnologies.map((technology) => <span className={styles.plannedTech} key={technology}>{technology}</span>)}</div></>}
            </section>
            <DetailText title="Decisões técnicas" content={project.technicalDecisions} />
            <DetailText title="Desafios técnicos" content={project.challenges} />
            <DetailText title="Resultados e validações" content={project.results} />
          </div>
        </div>
        <div className={styles.detailsFooter}>
          {project.demo && <a className={styles.demoButton} href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Abrir projeto</a>}
          {project.releaseStatus && <span className={styles.releaseStatus}>{project.releaseStatus}</span>}
        </div>
      </div>
    </div>
  )
}

function DetailList({ title, items, marker }: { title: string; items: string[]; marker: string }) {
  return <section className={styles.detailBlock}><h4>{title}</h4><ul className={styles.detailList}>{items.map((item) => <li key={item}><span aria-hidden="true">{marker}</span>{item}</li>)}</ul></section>
}

function DetailText({ title, content }: { title: string; content: string }) {
  return <section className={styles.detailBlock}><h4>{title}</h4><p className={styles.detailText}>{content}</p></section>
}
