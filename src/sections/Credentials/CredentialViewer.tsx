import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'
import { certificates } from '../../data/certificates'
import type { CredentialItem } from '../../data/credentialRecords'
import styles from './CredentialViewer.module.css'

export function CredentialViewer({ credential, onClose, onView }: { credential: CredentialItem | null; onClose: () => void; onView: (credential: CredentialItem) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!credential) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!dialog.contains(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first).focus() }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [credential, onClose])

  if (!credential) return null
  const relatedCertificate = credential.relatedCertificateId ? certificates.find((certificate) => certificate.id === credential.relatedCertificateId) : undefined
  const hasResources = Boolean(credential.document || credential.evidence || credential.verificationUrl || relatedCertificate)

  return (
    <div className={styles.backdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section ref={dialogRef} className={styles.dialog} id="credential-viewer-dialog" role="dialog" aria-modal="true" aria-labelledby="credential-viewer-title" tabIndex={-1}>
        <header className={styles.header}>
          <div><span>{credential.category === 'education' ? 'Formação' : credential.category === 'achievement' ? 'Conquista' : 'Certificado'}</span><h2 id="credential-viewer-title">{credential.title}</h2></div>
          <button ref={closeRef} type="button" className={styles.closeButton} aria-label="Fechar visualização" onClick={onClose}><X size={19} /></button>
        </header>
        <div className={styles.viewerContent}>
          {credential.image ? <div className={styles.imageFrame}><img src={credential.image} alt={credential.imageCaption || `Imagem ampliada de ${credential.title}`} loading="eager" /></div> : <p className={styles.noImage}>Não há uma imagem de pré-visualização cadastrada para este registro.</p>}
          {credential.imageCaption && <p className={styles.imageCaption}>{credential.imageCaption}</p>}
          <div className={styles.details}>
            {credential.institution && <p className={styles.detailInstitution}>{credential.institution}</p>}
            {(credential.date || credential.workload) && <p className={styles.detailMeta}>{[credential.date, credential.workload].filter(Boolean).join(' · ')}</p>}
            {credential.description && <p className={styles.detailDescription}>{credential.description}</p>}
            {credential.curriculum && credential.curriculum.length > 0 && <section className={styles.detailBlock} aria-labelledby="credential-curriculum-title">
              <h3 id="credential-curriculum-title">Componentes curriculares</h3>
              <ul className={styles.curriculumList}>{credential.curriculum.map((component) => <li key={component.title}><span>{component.title}</span><span>{component.workload} h</span></li>)}</ul>
              {credential.totalWorkload !== undefined && <p className={styles.totalWorkload}>Carga horária total: {credential.totalWorkload} horas</p>}
            </section>}
            {credential.learnings.length > 0 && <section className={styles.detailBlock} aria-labelledby="credential-learnings-title"><h3 id="credential-learnings-title">Aprendizados</h3><ul>{credential.learnings.map((learning) => <li key={learning}>{learning}</li>)}</ul></section>}
            {credential.practicalApplication && <section className={styles.detailBlock} aria-labelledby="credential-application-title"><h3 id="credential-application-title">Aplicação prática</h3><p>{credential.practicalApplication}</p></section>}
            {credential.tags.length > 0 && <section className={styles.detailBlock} aria-labelledby="credential-tags-title"><h3 id="credential-tags-title">Competências</h3><ul className={styles.tagList}>{credential.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></section>}
          </div>
        </div>
        {hasResources && <footer className={styles.footer}>
          {credential.document && <a href={credential.document} download><ExternalLink size={16} aria-hidden="true" /> Download PDF</a>}
          {credential.evidence && <a href={credential.evidence} download><ExternalLink size={16} aria-hidden="true" /> {credential.evidence.toLowerCase().includes('.pdf') ? 'Download evidência' : 'Abrir evidência'}</a>}
          {credential.verificationUrl && <a href={credential.verificationUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Validar certificado</a>}
          {relatedCertificate && <button type="button" onClick={() => onView({ ...relatedCertificate, category: 'certificate' })}><ExternalLink size={16} aria-hidden="true" /> Ver certificado relacionado</button>}
        </footer>}
      </section>
    </div>
  )
}
