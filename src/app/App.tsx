import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Contact } from '../sections/Contact/Contact'
import { Credentials } from '../sections/Credentials/Credentials'
import { Hero } from '../sections/Hero/Hero'
import { Projects } from '../sections/Projects/Projects'
import styles from './App.module.css'

type Theme = 'dark' | 'light'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
    const themeColor = document.querySelector('meta[name="theme-color"]')
    themeColor?.setAttribute('content', theme === 'dark' ? '#080d19' : '#f3f6fb')
  }, [theme])

  return (
    <main className={styles.page}>
      <header className={styles.navigation}>
        <a className={styles.brand} href="#home" aria-label="Início">G<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#credentials">Formação</a>
          <a href="#contact">Contato</a>
        </nav>
        <button
          className={styles.themeToggle}
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
          title={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
      </header>
      <div id="home"><Hero /></div>
      <Projects />
      <Credentials />
      <Contact />
    </main>
  )
}
