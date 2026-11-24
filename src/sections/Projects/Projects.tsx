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
  const visualRef = useRef<HTMLDivElement>(null)
  const moreButtonRef = useRef<HTMLButtonElement>(null)
  const lessButtonRef = useRef<HTMLButtonElement>(null)
  const detailsToolbarRef = useRef<HTMLDivElement>(null)
  const wasExpanded = useRef(false)
  const zoomFrame = useRef<number | undefined>(undefined)
  const zoomIdleTimer = useRef<number | undefined>(undefined)
  const zoomImage = useRef<HTMLImageElement | null>(null)
  const zoomScale = useRef(1)
  const zoomTransitionStartScale = useRef(1)
  const zoomTransitionTargetScale = useRef(1)
  const zoomTransitionStartAt = useRef(0)
  const zoomTransitionDuration = useRef(0)
  const zoomPoint = useRef({ x: 50, y: 50 })
  const zoomCurrentPoint = useRef({ x: 50, y: 50 })
  const lastPointerPosition = useRef<{ x: number; y: number } | undefined>(undefined)
  const lastZoomFrameAt = useRef(0)
  const zoomActive = useRef(false)
  const zoomDirection = useRef<'in' | 'out' | undefined>(undefined)
  const hasImplementedHighlights = project.implementedFeatures.length > 0
  const highlights = hasImplementedHighlights ? project.implementedFeatures.slice(0, 3) : project.plannedFeatures.slice(0, 3)

  useEffect(() => () => {
    if (zoomFrame.current !== undefined) window.cancelAnimationFrame(zoomFrame.current)
    if (zoomIdleTimer.current !== undefined) window.clearTimeout(zoomIdleTimer.current)
    const image = visualRef.current?.querySelector<HTMLImageElement>('img')
    if (image) {
      image.style.transform = 'scale(1)'
      image.style.transformOrigin = '50% 50%'
    }
  }, [])

  const updateZoomPoint = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    if (bounds.width === 0 || bounds.height === 0) return
    zoomPoint.current = {
      x: Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100)),
      y: Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100)),
    }
  }

  function animateZoom(time: number) {
    zoomFrame.current = undefined
    const image = zoomImage.current
    if (!image) return

    const frameDelta = lastZoomFrameAt.current ? Math.min(time - lastZoomFrameAt.current, 50) : 16
    lastZoomFrameAt.current = time
    const focusProgress = 1 - Math.exp(-frameDelta / 45)
    zoomCurrentPoint.current = {
      x: zoomCurrentPoint.current.x + (zoomPoint.current.x - zoomCurrentPoint.current.x) * focusProgress,
      y: zoomCurrentPoint.current.y + (zoomPoint.current.y - zoomCurrentPoint.current.y) * focusProgress,
    }

    if (zoomDirection.current) {
      const progress = Math.min((time - zoomTransitionStartAt.current) / zoomTransitionDuration.current, 1)
      const easedProgress = progress * progress * progress * (progress * (progress * 6 - 15) + 10)
      zoomScale.current = zoomTransitionStartScale.current
        + (zoomTransitionTargetScale.current - zoomTransitionStartScale.current) * easedProgress
      if (progress >= 1) {
        zoomScale.current = zoomTransitionTargetScale.current
        zoomDirection.current = undefined
      }
    }

    const transform = `scale(${zoomScale.current})`
    const transformOrigin = `${zoomCurrentPoint.current.x}% ${zoomCurrentPoint.current.y}%`
    if (image.style.transform !== transform) image.style.transform = transform
    if (image.style.transformOrigin !== transformOrigin) image.style.transformOrigin = transformOrigin

    const focusDistance = Math.hypot(
      zoomPoint.current.x - zoomCurrentPoint.current.x,
      zoomPoint.current.y - zoomCurrentPoint.current.y,
    )
    if (zoomDirection.current || focusDistance > 0.1) {
      zoomFrame.current = window.requestAnimationFrame(animateZoom)
    } else if (!zoomActive.current && zoomScale.current === 1) {
      image.style.transformOrigin = '50% 50%'
      zoomCurrentPoint.current = { x: 50, y: 50 }
      zoomPoint.current = { x: 50, y: 50 }
      zoomImage.current = null
    }
  }

  function beginZoomTransition(targetScale: number, duration: number) {
    const image = zoomImage.current
    if (!image) return
    if (zoomFrame.current !== undefined) window.cancelAnimationFrame(zoomFrame.current)

    zoomDirection.current = undefined
    if (Math.abs(targetScale - zoomScale.current) < 0.001) {
      zoomScale.current = targetScale
      image.style.transform = `scale(${targetScale})`
      if (!zoomActive.current && targetScale === 1) {
        image.style.transformOrigin = '50% 50%'
        zoomImage.current = null
      }
      return
    }

    zoomTransitionStartScale.current = zoomScale.current
    zoomTransitionTargetScale.current = targetScale
    zoomTransitionStartAt.current = performance.now()
    zoomTransitionDuration.current = duration
    zoomDirection.current = targetScale > zoomScale.current ? 'in' : 'out'
    lastZoomFrameAt.current = 0
    zoomFrame.current = window.requestAnimationFrame(animateZoom)
  }

  function scheduleIdleReturn() {
    if (zoomIdleTimer.current !== undefined) window.clearTimeout(zoomIdleTimer.current)
    zoomIdleTimer.current = window.setTimeout(() => {
      zoomIdleTimer.current = undefined
      if (zoomActive.current) beginZoomTransition(1, 3000)
    }, 1000)
  }

  const handleVisualPointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const image = visualRef.current?.querySelector<HTMLImageElement>('img')
    if (!image) return
    zoomImage.current = image
    updateZoomPoint(event)
    zoomCurrentPoint.current = { ...zoomPoint.current }
    lastPointerPosition.current = { x: event.clientX, y: event.clientY }
    const currentTransform = window.getComputedStyle(image).transform
    const currentScale = currentTransform === 'none' ? 1 : new DOMMatrixReadOnly(currentTransform).a
    zoomScale.current = Math.max(1, Math.min(2, currentScale))
    zoomActive.current = true
    beginZoomTransition(2, 2200)
    scheduleIdleReturn()
  }

  const handleVisualPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !zoomActive.current) return
    const previousPosition = lastPointerPosition.current
    if (previousPosition && Math.hypot(event.clientX - previousPosition.x, event.clientY - previousPosition.y) < 0.5) return

    lastPointerPosition.current = { x: event.clientX, y: event.clientY }
    updateZoomPoint(event)
    scheduleIdleReturn()
    if (zoomDirection.current === 'out' || (zoomDirection.current === undefined && zoomScale.current < 1.999)) {
      beginZoomTransition(2, 1200)
    } else if (zoomFrame.current === undefined) {
      zoomFrame.current = window.requestAnimationFrame(animateZoom)
    }
  }

  const handleVisualPointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !zoomActive.current) return
    zoomActive.current = false
    lastPointerPosition.current = undefined
    if (zoomIdleTimer.current !== undefined) {
      window.clearTimeout(zoomIdleTimer.current)
      zoomIdleTimer.current = undefined
    }
    beginZoomTransition(1, 3000)
  }

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
        <ProjectVisual
          project={project}
          index={index}
          large
          visualRef={visualRef}
          onPointerEnter={handleVisualPointerEnter}
          onPointerMove={handleVisualPointerMove}
          onPointerLeave={handleVisualPointerLeave}
        />
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
  const visualRef = useRef<HTMLDivElement>(null)
  const zoomFrame = useRef<number | undefined>(undefined)
  const zoomStartedAt = useRef(0)
  const zoomScale = useRef(1)

  useEffect(() => () => {
    if (zoomFrame.current !== undefined) window.cancelAnimationFrame(zoomFrame.current)
  }, [])

  const getZoomImage = () => visualRef.current?.querySelector<HTMLImageElement>('img')

  const stopZoomFrame = () => {
    if (zoomFrame.current !== undefined) {
      window.cancelAnimationFrame(zoomFrame.current)
      zoomFrame.current = undefined
    }
  }

  const handlePointerEnter = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerEnter(event)
    if (clone || event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const image = getZoomImage()
    if (!image) return

    stopZoomFrame()
    image.style.transition = 'none'
    zoomStartedAt.current = performance.now()

    const startScale = zoomScale.current
    const animate = (time: number) => {
      const elapsed = time - zoomStartedAt.current
      const progress = Math.min(elapsed / 2200, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 2)
      zoomScale.current = startScale + (1.16 - startScale) * easedProgress
      image.style.transform = `scale(${zoomScale.current})`
      if (progress < 1) zoomFrame.current = window.requestAnimationFrame(animate)
      else zoomFrame.current = undefined
    }

    zoomFrame.current = window.requestAnimationFrame(animate)
  }

  const handlePointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerLeave(event)
    if (clone || event.pointerType !== 'mouse') return

    const image = getZoomImage()
    if (!image) return

    stopZoomFrame()
    image.style.transition = 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)'
    zoomScale.current = 1
    image.style.transform = 'scale(1)'
  }

  return (
    <article
      className={`${styles.complementaryProject} ${project.placeholder ? styles.placeholderProject : ''}`}
      data-carousel-card
      aria-hidden={clone || undefined}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <ProjectVisual project={project} index={index + 3} visualRef={visualRef} />
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

function ProjectVisual({ project, index, large = false, visualRef, onPointerEnter, onPointerMove, onPointerLeave }: {
  project: Project
  index: number
  large?: boolean
  visualRef?: RefObject<HTMLDivElement>
  onPointerEnter?: (event: ReactPointerEvent<HTMLDivElement>) => void
  onPointerMove?: (event: ReactPointerEvent<HTMLDivElement>) => void
  onPointerLeave?: (event: ReactPointerEvent<HTMLDivElement>) => void
}) {
  return (
    <div
      ref={visualRef}
      className={`${styles.thumbnail} ${styles[`art${index + 1}`]} ${project.images.length ? styles.thumbnailImage : ''} ${large ? styles.thumbnailLarge : ''}`}
      aria-label={project.images.length ? undefined : `Composição visual de ${project.title}`}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
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
