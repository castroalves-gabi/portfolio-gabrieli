import { useCallback, useEffect, useMemo, useRef, useState, type FocusEvent as ReactFocusEvent, type PointerEvent as ReactPointerEvent } from 'react'
import { Award, ArrowLeft, ArrowRight, GraduationCap, Languages, Pause, Play, Search, Star, Trophy, X } from 'lucide-react'
import { certificates } from '../../data/certificates'
import { languages } from '../../data/languages'
import { credentialCategories, credentialItems, credentialTags, filterAndSortCredentials, type CredentialCategoryFilter, type CredentialItem } from '../../data/credentialRecords'
import { SectionHeading } from '../../components/SectionHeading'
import { CredentialViewer } from './CredentialViewer'
import styles from './Credentials.module.css'

export function Credentials() {
  const [category, setCategory] = useState<CredentialCategoryFilter>('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [query, setQuery] = useState('')
  const [viewing, setViewing] = useState<CredentialItem | null>(null)
  const filtered = useMemo(() => filterAndSortCredentials(credentialItems, { category, tags: selectedTags, query }), [category, selectedTags, query])
  const hasFilters = category !== 'all' || selectedTags.length > 0 || query.trim().length > 0

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((current) => current.includes(tag) ? current.filter((value) => value !== tag) : [...current, tag])
  }, [])
  const clearFilters = useCallback(() => {
    setCategory('all')
    setSelectedTags([])
    setQuery('')
  }, [])
  const closeViewer = useCallback(() => setViewing(null), [])

  return (
    <section className={styles.section} id="credentials" aria-labelledby="credentials-title">
      <SectionHeading id="credentials-title" title="Formação e trajetória" description="Explore certificados, conquistas e formação acadêmica. Combine categorias, competências e busca para encontrar um registro." />

      <article className={styles.languagesCard}>
        <div className={styles.languagesHeading}><span className={styles.icon}><Languages size={18} aria-hidden="true" /></span><div><span className={styles.kicker}>Idiomas</span><h3>Comunicação</h3></div></div>
        <ul>{languages.map((language) => <li key={language.name}><span>{language.name}</span><span>{language.proficiency}</span></li>)}</ul>
      </article>

      <div className={styles.filterPanel} aria-label="Filtros de formação e trajetória">
        <div className={styles.searchRow}>
          <label className={styles.searchBox}>
            <Search size={18} aria-hidden="true" />
            <span className={styles.srOnly}>Buscar registros</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por título, instituição, tag ou aprendizado" />
            {query && <button type="button" onClick={() => setQuery('')} aria-label="Limpar busca"><X size={16} /></button>}
          </label>
          <span className={styles.resultCount} aria-live="polite">{filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}</span>
          {hasFilters && <button className={styles.clearButton} type="button" onClick={clearFilters}>Limpar filtros</button>}
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Categoria</span>
          <div className={styles.filterOptions} role="group" aria-label="Filtrar por categoria">
            {credentialCategories.map((option) => <button key={option.value} type="button" className={`${styles.filterChip} ${category === option.value ? styles.activeChip : ''}`} aria-pressed={category === option.value} onClick={() => setCategory(option.value)}>{option.label}</button>)}
          </div>
        </div>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Tecnologias e competências <span>(correspondência com qualquer tag)</span></span>
          <div className={styles.filterOptions} role="group" aria-label="Filtrar por tecnologia ou competência">
            {credentialTags.map((tag) => <button key={tag} type="button" className={`${styles.filterChip} ${selectedTags.includes(tag) ? styles.activeChip : ''}`} aria-pressed={selectedTags.includes(tag)} onClick={() => toggleTag(tag)}>{tag}</button>)}
          </div>
        </div>
      </div>

      {filtered.length ? <CredentialCarousel items={filtered} selectedTags={selectedTags} onToggleTag={toggleTag} onView={setViewing} isViewerOpen={viewing !== null} /> : <div className={styles.emptyState}><Award size={22} aria-hidden="true" /><p>{certificates.length === 0 && category === 'certificates' && !selectedTags.length && !query ? 'Ainda não há certificados confirmados cadastrados.' : 'Nenhum registro corresponde a esses filtros.'}</p>{hasFilters && <button className={styles.clearButton} type="button" onClick={clearFilters}>Limpar filtros</button>}</div>}

      <CredentialViewer credential={viewing} onClose={closeViewer} onView={setViewing} />
    </section>
  )
}

function CredentialCarousel({ items, selectedTags, onToggleTag, onView, isViewerOpen }: {
  items: CredentialItem[]
  selectedTags: string[]
  onToggleTag: (tag: string) => void
  onView: (item: CredentialItem) => void
  isViewerOpen: boolean
}) {
  const pointerOverCard = useRef(false)
  const pausedByCard = useRef(false)
  const pausedForManualNavigation = useRef(false)
  const keyboardFocus = useRef(false)
  const pointerAction = useRef(false)
  const touchStartX = useRef<number | null>(null)
  const dwellTimer = useRef<number | undefined>(undefined)
  const resumeTimer = useRef<number | undefined>(undefined)
  const manualTimer = useRef<number | undefined>(undefined)
  const [activePage, setActivePage] = useState(0)
  const [autoPaused, setAutoPaused] = useState(false)
  const [documentVisible, setDocumentVisible] = useState(() => typeof document === 'undefined' || document.visibilityState === 'visible')
  const pages = useMemo(() => {
    const result: CredentialItem[][] = []
    for (let index = 0; index < items.length; index += 12) result.push(items.slice(index, index + 12))
    return result
  }, [items])
  const isCarousel = items.length > 12
  const pageSignature = pages.map((page) => page.map((item) => `${item.category}:${item.id}`).join(',')).join('|')
  const visiblePage = Math.min(activePage, Math.max(0, pages.length - 1))
  const viewerOpen = useRef(isViewerOpen)
  viewerOpen.current = isViewerOpen

  const clearTimer = (timer: { current: number | undefined }) => {
    if (timer.current !== undefined) window.clearTimeout(timer.current)
    timer.current = undefined
  }

  const pauseForManualNavigation = (duration = 7000) => {
    clearTimer(manualTimer)
    pausedForManualNavigation.current = true
    manualTimer.current = window.setTimeout(() => {
      pausedForManualNavigation.current = false
      manualTimer.current = undefined
    }, duration)
  }

  const handleCardPointerEnter = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return
    pointerOverCard.current = true
    clearTimer(resumeTimer)
    clearTimer(dwellTimer)
    dwellTimer.current = window.setTimeout(() => {
      dwellTimer.current = undefined
      if (pointerOverCard.current) pausedByCard.current = true
    }, 300)
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

  useEffect(() => {
    setActivePage(0)
    pointerOverCard.current = false
    pausedByCard.current = false
    keyboardFocus.current = false
    touchStartX.current = null
    clearTimer(dwellTimer)
    clearTimer(resumeTimer)
    pausedForManualNavigation.current = false
    clearTimer(manualTimer)
  }, [items])

  useEffect(() => {
    const updateVisibility = () => setDocumentVisible(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  useEffect(() => {
    if (!isCarousel) return
    const interval = window.setInterval(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const paused = pausedByCard.current || pausedForManualNavigation.current || keyboardFocus.current || viewerOpen.current || autoPaused || !documentVisible
      if (reducedMotion || paused) return
      setActivePage((current) => (current + 1) % pages.length)
    }, 7000)
    return () => window.clearInterval(interval)
  }, [isCarousel, pages.length, pageSignature, autoPaused, documentVisible])

  useEffect(() => () => {
    if (dwellTimer.current !== undefined) window.clearTimeout(dwellTimer.current)
    if (resumeTimer.current !== undefined) window.clearTimeout(resumeTimer.current)
    if (manualTimer.current !== undefined) window.clearTimeout(manualTimer.current)
  }, [])

  const move = (direction: -1 | 1) => {
    if (!isCarousel || pages.length < 2) return
    pauseForManualNavigation()
    setActivePage((current) => (current + direction + pages.length) % pages.length)
  }

  const handleBlurCapture = (event: ReactFocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) keyboardFocus.current = false
  }

  return (
    <div className={isCarousel ? styles.carousel : styles.staticRecords}
      role={isCarousel ? 'region' : undefined}
      aria-label={isCarousel ? 'Certificados, conquistas e formação' : undefined}
      aria-roledescription={isCarousel ? 'carrossel' : undefined}
      onWheel={() => pauseForManualNavigation(1400)}
      onPointerDown={(event) => {
        if (event.pointerType === 'mouse') {
          pointerAction.current = true
          window.setTimeout(() => { pointerAction.current = false }, 0)
        } else touchStartX.current = event.clientX
      }}
      onPointerUp={(event) => {
        if (event.pointerType === 'mouse' || touchStartX.current === null) return
        const distance = event.clientX - touchStartX.current
        touchStartX.current = null
        if (Math.abs(distance) > 48) move(distance > 0 ? -1 : 1)
        else pauseForManualNavigation(1800)
      }}
      onPointerCancel={(event) => { if (event.pointerType !== 'mouse') { touchStartX.current = null; pauseForManualNavigation(1800) } }}
      onFocusCapture={() => { if (!pointerAction.current) keyboardFocus.current = true }}
      onBlurCapture={handleBlurCapture}
    >
      {isCarousel ? <>
        <div className={styles.carouselViewport}>
          <div className={styles.carouselTrack} style={{ transform: `translateX(-${visiblePage * 100}%)` }}>
            {pages.map((page, pageIndex) => <div className={styles.carouselPage} key={`page-${pageIndex}`} role="group" aria-roledescription="página" aria-label={`Página ${pageIndex + 1} de ${pages.length}`} aria-hidden={pageIndex !== visiblePage}>
              <div className={styles.recordGrid}>
                {page.map((item) => <CredentialCard key={`${item.category}-${item.id}`} item={item} selectedTags={selectedTags} onToggleTag={onToggleTag} onView={onView} inactive={pageIndex !== activePage} onPointerEnter={handleCardPointerEnter} onPointerLeave={handleCardPointerLeave} />)}
              </div>
            </div>)}
          </div>
        </div>
        <div className={styles.carouselControls} role="group" aria-label="Controles do carrossel">
          <button type="button" className={styles.previousButton} onClick={() => move(-1)} aria-label="Ver os 12 registros anteriores"><ArrowLeft size={19} aria-hidden="true" /></button>
          <button type="button" className={styles.nextButton} onClick={() => move(1)} aria-label="Ver os próximos 12 registros"><ArrowRight size={19} aria-hidden="true" /></button>
          <div className={styles.carouselStatus}><span aria-live="polite">{visiblePage + 1} / {pages.length}</span><button type="button" className={styles.pauseButton} aria-label={autoPaused ? 'Retomar avanço automático' : 'Pausar avanço automático'} aria-pressed={autoPaused} onClick={() => setAutoPaused((paused) => !paused)}>{autoPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button></div>
        </div>
      </> : <div className={styles.recordGrid}>
        {items.map((item) => <CredentialCard key={`${item.category}-${item.id}`} item={item} selectedTags={selectedTags} onToggleTag={onToggleTag} onView={onView} onPointerEnter={handleCardPointerEnter} onPointerLeave={handleCardPointerLeave} />)}
      </div>}
    </div>
  )
}

function CredentialCard({ item, selectedTags, onToggleTag, onView, inactive = false, onPointerEnter, onPointerLeave }: {
  item: CredentialItem
  selectedTags: string[]
  onToggleTag: (tag: string) => void
  onView: (item: CredentialItem) => void
  inactive?: boolean
  onPointerEnter?: (event: ReactPointerEvent<HTMLElement>) => void
  onPointerLeave?: (event: ReactPointerEvent<HTMLElement>) => void
}) {
  const certificate = item.category === 'certificate'
  const achievement = item.category === 'achievement'
  const categoryLabel = certificate ? 'Certificado' : achievement ? 'Conquista' : 'Formação'
  const relatedCertificate = item.relatedCertificateId ? certificates.find((value) => value.id === item.relatedCertificateId) : undefined
  const hasLinks = Boolean(item.document || item.verificationUrl || item.evidence || relatedCertificate)

  return (
    <article className={styles.recordCard} data-credential-card onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <div className={styles.cardTopline}>
        <span className={styles.recordCategory}>{certificate ? <Award size={14} aria-hidden="true" /> : achievement ? <Trophy size={14} aria-hidden="true" /> : <GraduationCap size={15} aria-hidden="true" />}{categoryLabel}</span>
        {item.featured && <Star className={styles.featuredStar} size={15} fill="currentColor" aria-label="Registro em destaque" role="img" />}
      </div>
      <h3 title={item.title}>{item.title}</h3>
      <p className={styles.institution} title={item.institution || undefined}>{item.institution || item.description || 'Registro da trajetória acadêmica e profissional'}</p>
      <p className={styles.date}>{[item.date, item.workload].filter(Boolean).join(' · ') || 'Data não informada'}</p>
      {item.image ? <button type="button" tabIndex={inactive ? -1 : undefined} className={styles.imageButton} onClick={() => onView(item)} aria-label={`Ampliar imagem de ${item.title}`}><img src={item.image} alt={item.imageCaption || `Pré-visualização de ${item.title}`} loading="lazy" /></button> : <div className={styles.previewPlaceholder} aria-hidden="true">{certificate ? <Award size={24} /> : achievement ? <Trophy size={24} /> : <GraduationCap size={25} />}</div>}
      <div className={styles.recordTags} aria-label="Competências relacionadas">
        {item.tags.slice(0, 3).map((tag) => <button key={tag} type="button" tabIndex={inactive ? -1 : undefined} className={selectedTags.includes(tag) ? styles.selectedTag : ''} aria-pressed={selectedTags.includes(tag)} onClick={() => onToggleTag(tag)}>{tag}</button>)}
        {item.tags.length > 3 && <span className={styles.moreTags}>+{item.tags.length - 3}</span>}
      </div>
      <div className={styles.cardActions}>
        <button type="button" tabIndex={inactive ? -1 : undefined} onClick={() => onView(item)}>Ver detalhes</button>
        {hasLinks && <span aria-hidden="true">{item.document || item.evidence ? 'Arquivo disponível' : item.verificationUrl ? 'Validação online' : 'Certificado relacionado'}</span>}
      </div>
    </article>
  )
}
