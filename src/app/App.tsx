import { useEffect, useState } from 'react'
import { ArrowUp, Moon, Sun } from 'lucide-react'
import { profile } from '../data/profile'
import { Contact } from '../sections/Contact/Contact'
import { Credentials } from '../sections/Credentials/Credentials'
import { Hero } from '../sections/Hero/Hero'
import { Projects } from '../sections/Projects/Projects'
import styles from './App.module.css'

type Theme = 'dark' | 'light'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark' }
    catch { return 'dark' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* theme still works for this visit */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#080d19' : '#f3f6fb')
  }, [theme])

  return (
    <div className={styles.page}>
      <header className={styles.navigation}>
        <a className={styles.brand} href="#home" aria-label="Início">G<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#about">Sobre</a><a href="#projects">Projetos</a><a href="#credentials">Formação</a><a href="#contact">Contato</a>
        </nav>
        <button className={styles.themeToggle} type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`} title={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`}>
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
      </header>
      <main>
        <div id="home"><Hero /></div>
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <a className={styles.footerName} href="#home">{profile.name}<span>.</span></a>
        <nav aria-label="Links do rodapé"><a href="#about">Sobre</a><a href="#projects">Projetos</a><a href="#credentials">Formação</a><a href="#contact">Contato</a></nav>
        <a className={styles.backToTop} href="#home" aria-label="Voltar ao início"><ArrowUp size={17} aria-hidden="true" /></a>
        <p>{profile.footerNote}</p>
      </footer>
    </div>
  )
}
