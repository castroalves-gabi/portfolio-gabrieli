import { SectionHeading } from '../../components/SectionHeading'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section className={styles.section} aria-labelledby="projects-title">
      <SectionHeading id="projects-title" title="Projetos" description="Projetos selecionados serão apresentados aqui." />
      <p className={styles.placeholder}>Conteúdo preparado para a próxima etapa.</p>
    </section>
  )
}
