import { profile } from '../../data/profile'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.eyebrow}>Portfólio</p>
      <h1 id="hero-title">Olá, eu sou {profile.name}.</h1>
      <p>{profile.headline}</p>
    </section>
  )
}
