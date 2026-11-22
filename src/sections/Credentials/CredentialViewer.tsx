import { useEffect, useRef } from 'react'
import { ExternalLink, X } from 'lucide-react'
import type { CredentialItem } from '../../data/credentialRecords'
import styles from './CredentialViewer.module.css'

export function CredentialViewer({ credential, onClose }: { credential: CredentialItem | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!credential) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const dialog = document.getElementById('credential-viewer-dialog')
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
  }, [credential, onClose])

  if (!credential) return null

  return (
    <div className={styles.backdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className={styles.dialog} id="credential-viewer-dialog" role="dialog" aria-modal="true" aria-labelledby="credential-viewer-title" tabIndex={-1}>
        <header className={styles.header}>
          <div><span>Certificado</span><h2 id="credential-viewer-title">{credential.title}</h2></div>
          <button ref={closeRef} type="button" className={styles.closeButton} aria-label="Fechar visualização" onClick={onClose}><X size={19} /></button>
        </header>
        {credential.image ? <div className={styles.imageFrame}><img src={credential.image} alt={`Imagem ampliada do certificado ${credential.title}`} loading="lazy" /></div> : <p className={styles.noImage}>Não há uma imagem de pré-visualização cadastrada para este certificado.</p>}
        <footer className={styles.footer}>
          {credential.document && <a href={credential.document} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Abrir PDF original</a>}
          {credential.verificationUrl && <a href={credential.verificationUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true" /> Validar certificado</a>}
        </footer>
      </section>
    </div>
  )
}
