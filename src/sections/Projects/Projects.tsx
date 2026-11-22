import { useCallback, useState } from 'react'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { projects, type Project } from '../../data/projects'
import { SectionHeading } from '../../components/SectionHeading'
import { ProjectModal } from './ProjectModal'
import styles from './Projects.module.css'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeProject = useCallback(() => setSelectedProject(null), [])
  const featuredProjects = projects.filter((project) => project.featured)
  const complementaryProjects = projects.filter((project) => !project.featured)

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" title="Projetos em construção" description="Produtos digitais que estou planejando e desenvolvendo. Os itens listados descrevem escopo previsto e não indicam funcionalidades já concluídas." />
      <div className={styles.projectGrid}>
        {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />)}
      </div>
      <div className={styles.complementary}>
        <div className={styles.complementaryHeading}><span>Estudo complementar</span><p>Projetos menores e experimentos</p></div>
        <div className={styles.projectGrid}>
          {complementaryProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />)}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </section>
  )
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project) => void }) {
  return (
    <article className={`${styles.card} ${!project.featured ? styles.secondaryCard : ''}`}>
      <div className={`${styles.thumbnail} ${styles[`art${index + 1}`]}`} aria-label={`Placeholder visual para ${project.title}`}>
        <span className={styles.thumbOrb} />
        <span className={styles.thumbLines} />
        <span className={styles.thumbCaption}><Code2 size={14} aria-hidden="true" /> Prévia visual</span>
        <span className={styles.thumbTitle}>{project.title}</span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}><span>{project.category}</span><span className={`${styles.status} ${project.statusKind === 'published' ? styles.published : ''}`}>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className={styles.tags}>{project.technologies.length ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <span className={styles.unknownTech}>Tecnologias a definir</span>}</div>
        <button className={styles.detailsButton} type="button" onClick={() => onOpen(project)}>Ver detalhes <ArrowUpRight size={16} aria-hidden="true" /></button>
      </div>
    </article>
  )
}
