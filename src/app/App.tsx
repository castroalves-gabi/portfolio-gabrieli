import { Contact } from '../sections/Contact/Contact'
import { Credentials } from '../sections/Credentials/Credentials'
import { Hero } from '../sections/Hero/Hero'
import { Projects } from '../sections/Projects/Projects'
import styles from './App.module.css'

export default function App() {
  return (
    <main className={styles.page}>
      <Hero />
      <Projects />
      <Credentials />
      <Contact />
    </main>
  )
}
