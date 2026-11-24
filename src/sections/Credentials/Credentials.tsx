import { useCallback, useMemo, useState } from 'react'
import { Award, GraduationCap, Languages, Search, Star, Trophy, X } from 'lucide-react'
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

      {filtered.length ? <div className={styles.staticRecords}><div className={styles.recordGrid}>
        {filtered.map((item) => <CredentialCard key={`${item.category}-${item.id}`} item={item} selectedTags={selectedTags} onToggleTag={toggleTag} onView={setViewing} />)}
      </div></div> : <div className={styles.emptyState}><Award size={22} aria-hidden="true" /><p>{certificates.length === 0 && category === 'certificates' && !selectedTags.length && !query ? 'Ainda não há certificados confirmados cadastrados.' : 'Nenhum registro corresponde a esses filtros.'}</p>{hasFilters && <button className={styles.clearButton} type="button" onClick={clearFilters}>Limpar filtros</button>}</div>}

      <CredentialViewer credential={viewing} onClose={closeViewer} onView={setViewing} />
    </section>
  )
}

function CredentialCard({ item, selectedTags, onToggleTag, onView }: {
  item: CredentialItem
  selectedTags: string[]
  onToggleTag: (tag: string) => void
  onView: (item: CredentialItem) => void
}) {
  const certificate = item.category === 'certificate'
  const achievement = item.category === 'achievement'
  const categoryLabel = certificate ? 'Certificado' : achievement ? 'Conquista' : 'Formação'
  const relatedCertificate = item.relatedCertificateId ? certificates.find((value) => value.id === item.relatedCertificateId) : undefined
  const hasLinks = Boolean(item.document || item.verificationUrl || item.evidence || relatedCertificate)

  return (
    <article className={styles.recordCard} data-credential-card>
      <div className={styles.cardTopline}>
        <span className={styles.recordCategory}>{certificate ? <Award size={14} aria-hidden="true" /> : achievement ? <Trophy size={14} aria-hidden="true" /> : <GraduationCap size={15} aria-hidden="true" />}{categoryLabel}</span>
        {item.featured && <Star className={styles.featuredStar} size={15} fill="currentColor" aria-label="Registro em destaque" role="img" />}
      </div>
      <h3 title={item.title}>{item.title}</h3>
      <p className={styles.institution} title={item.institution || undefined}>{item.institution || item.description || 'Registro da trajetória acadêmica e profissional'}</p>
      <p className={styles.date}>{[item.date, item.workload].filter(Boolean).join(' · ') || 'Data não informada'}</p>
      {item.image ? <button type="button" className={styles.imageButton} onClick={() => onView(item)} aria-label={`Ampliar imagem de ${item.title}`}><img src={item.image} alt={item.imageCaption || `Pré-visualização de ${item.title}`} loading="lazy" /></button> : <div className={styles.previewPlaceholder} aria-hidden="true">{certificate ? <Award size={24} /> : achievement ? <Trophy size={24} /> : <GraduationCap size={25} />}</div>}
      <div className={styles.recordTags} aria-label="Competências relacionadas">
        {item.tags.slice(0, 3).map((tag) => <button key={tag} type="button" className={selectedTags.includes(tag) ? styles.selectedTag : ''} aria-pressed={selectedTags.includes(tag)} onClick={() => onToggleTag(tag)}>{tag}</button>)}
        {item.tags.length > 3 && <span className={styles.moreTags}>+{item.tags.length - 3}</span>}
      </div>
      <div className={styles.cardActions}>
        <button type="button" onClick={() => onView(item)}>Ver detalhes</button>
        {hasLinks && <span aria-hidden="true">{item.document || item.evidence ? 'Arquivo disponível' : item.verificationUrl ? 'Validação online' : 'Certificado relacionado'}</span>}
      </div>
    </article>
  )
}
