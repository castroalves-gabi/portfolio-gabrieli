import { profile } from '../../data/profile'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="about" aria-labelledby="hero-title">
      <p className={styles.eyebrow}><span /> Portfólio pessoal</p>
      <h1 id="hero-title">Olá, eu sou <span>{profile.name}.</span></h1>
      <p className={styles.intro}>{profile.headline}</p>
      <a className={styles.scrollCue} href="#projects" aria-label="Ver projetos"><span /> Explore meu trabalho</a>
    </section>
  )
}
