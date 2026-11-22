import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type RefObject } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Eye } from 'lucide-react'
import { projects, type Project } from '../../data/projects'
import styles from './Projects.module.css'

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const complementaryRecords = projects.filter((project) => !project.featured)
  const realComplementaryProjects = complementaryRecords.filter((project) => !project.placeholder)
  const exampleCards = complementaryRecords.filter((project) => project.placeholder)
  const complementaryProjects = [
    ...realComplementaryProjects,
    ...exampleCards.slice(0, Math.max(0, 5 - realComplementaryProjects.length)),
  ]

  return (
    <section className={styles.section} id="projects" aria-label="Projetos">
      <div className={styles.featuredList}>
        {featuredProjects.map((project, index) => <FeaturedProject key={project.id} project={project} index={index} />)}
      </div>
      {complementaryProjects.length > 0 && <section className={styles.complementary} aria-labelledby="complementary-title">
        <h2 className={styles.complementaryHeading} id="complementary-title">Projetos complementares</h2>
        <ComplementaryCarousel projects={complementaryProjects} />
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

function ComplementaryCarousel({ projects: carouselProjects }: { projects: Project[] }) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDivElement>(null)
  const pausedByCard = useRef(false)
  const pausedForManualNavigation = useRef(false)
  const pointerOverCard = useRef(false)
  const dwellTimer = useRef<number | undefined>(undefined)
  const resumeTimer = useRef<number | undefined>(undefined)
  const manualTimer = useRef<number | undefined>(undefined)

  const clearTimer = (timer: { current: number | undefined }) => {
    if (timer.current !== undefined) window.clearTimeout(timer.current)
    timer.current = undefined
  }

  const scheduleDwellPause = () => {
    clearTimer(dwellTimer)
    dwellTimer.current = window.setTimeout(() => {
      dwellTimer.current = undefined
      if (!pointerOverCard.current) return
      pausedByCard.current = true
    }, 300)
  }

  const handleCardPointerEnter = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return
    pointerOverCard.current = true
    clearTimer(resumeTimer)
    if (!pausedByCard.current) scheduleDwellPause()
  }

  const handleCardPointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return
    pointerOverCard.current = false
    clearTimer(dwellTimer)
    if (pausedByCard.current) {
      clearTimer(resumeTimer)
      resumeTimer.current = window.setTimeout(() => {
        pausedByCard.current = false
        resumeTimer.current = undefined
      }, 200)
    }
  }

  const pauseForManualNavigation = (duration = 1500) => {
    pausedForManualNavigation.current = true
    clearTimer(manualTimer)
    manualTimer.current = window.setTimeout(() => {
      pausedForManualNavigation.current = false
      manualTimer.current = undefined
    }, duration)
  }

  useEffect(() => {
    const viewport = viewportRef.current
    const group = groupRef.current
    if (!viewport || !group) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame = 0
    let previousTime = 0

    const animate = (time: number) => {
      const paused = pausedByCard.current || pausedForManualNavigation.current || reducedMotion.matches
      if (!paused && previousTime > 0) {
        const track = group.parentElement
        const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap) || 0 : 0
        const loopWidth = group.getBoundingClientRect().width + gap
        if (loopWidth > 0) {
          viewport.scrollLeft += Math.min((time - previousTime) / 1000, 0.05) * 24
          if (viewport.scrollLeft >= loopWidth) viewport.scrollLeft -= loopWidth
        }
      }
      previousTime = time
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimer(dwellTimer)
      clearTimer(resumeTimer)
      clearTimer(manualTimer)
    }
  }, [])

  const move = (direction: -1 | 1) => {
    const viewport = viewportRef.current
    const group = groupRef.current
    const firstCard = group?.querySelector<HTMLElement>('[data-carousel-card]')
    if (!viewport || !group || !firstCard) return
    pauseForManualNavigation()
    const track = group.parentElement
    const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap) || 0 : 0
    const loopWidth = group.getBoundingClientRect().width + gap
    const step = firstCard.getBoundingClientRect().width + gap
    let destination = viewport.scrollLeft + direction * step
    if (destination < 0) destination += loopWidth
    else if (destination >= loopWidth) destination -= loopWidth
    viewport.scrollTo({ left: destination, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Projetos complementares"
      aria-roledescription="carrossel"
      onWheel={() => pauseForManualNavigation(1400)}
      onPointerDown={(event) => { if (event.pointerType !== 'mouse') pauseForManualNavigation(1800) }}
      onPointerUp={(event) => { if (event.pointerType !== 'mouse') pauseForManualNavigation(1800) }}
      onPointerCancel={(event) => { if (event.pointerType !== 'mouse') pauseForManualNavigation(1800) }}
    >
      <div className={styles.carouselViewport} ref={viewportRef}>
        <div className={styles.carouselTrack}>
          <div className={styles.carouselGroup} ref={groupRef}>
            {carouselProjects.map((project, index) => <CarouselCard key={project.id} project={project} index={index} onPointerEnter={handleCardPointerEnter} onPointerLeave={handleCardPointerLeave} />)}
          </div>
          <div className={styles.carouselGroup} aria-hidden="true">
            {carouselProjects.map((project, index) => <CarouselCard key={`${project.id}-loop`} project={project} index={index} clone onPointerEnter={handleCardPointerEnter} onPointerLeave={handleCardPointerLeave} />)}
          </div>
        </div>
      </div>
      <div className={styles.carouselControls}>
        <button type="button" onClick={() => move(-1)} aria-label="Ver projetos complementares anteriores"><ArrowLeft size={19} aria-hidden="true" /></button>
        <button type="button" onClick={() => move(1)} aria-label="Ver próximos projetos complementares"><ArrowRight size={19} aria-hidden="true" /></button>
      </div>
    </div>
  )
}

function CarouselCard({ project, index, clone = false, onPointerEnter, onPointerLeave }: {
  project: Project
  index: number
  clone?: boolean
  onPointerEnter: (event: ReactPointerEvent<HTMLElement>) => void
  onPointerLeave: (event: ReactPointerEvent<HTMLElement>) => void
}) {
  return (
    <article className={`${styles.complementaryProject} ${project.placeholder ? styles.placeholderProject : ''}`} data-carousel-card aria-hidden={clone || undefined} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <ProjectVisual project={project} index={index + 3} />
      <div className={styles.complementaryBody}>
        <div className={styles.featureMeta}><span>{project.category}</span><span className={styles.status}>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className={styles.featureTechs}>
          {project.technologies.length > 0 ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : project.placeholder ? <span>Conteúdo demonstrativo</span> : null}
        </div>
        {project.demo && <div className={styles.featureActions}><a className={styles.demoButton} href={project.demo} target="_blank" rel="noreferrer" tabIndex={clone ? -1 : 0}><ExternalLink size={15} aria-hidden="true" /> Abrir projeto</a></div>}
      </div>
    </article>
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
            {project.technicalDecisions && <DetailText title="Decisões técnicas" content={project.technicalDecisions} />}
            {project.challenges && <DetailText title="Desafios técnicos" content={project.challenges} />}
            {project.results && <DetailText title="Resultados" content={project.results} />}
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
