
// import React from 'react'
import projects from '../Data/projects.json'
import ProjectCard from '../Projects/ProjectCards'
import styles from "../Projects/Project.module.css";
const Project = () => {
  return (
    <>
    <section id="works" className={styles.container1}>
        <h2 className={styles.title1}>Project/Work</h2>
        <div className={styles.projects1}> 
            {projects.map((project,id)=>{
                return <ProjectCard key={id} project={project} />      
            })}
        </div>
    </section>
    </>
  )
}

export default Project
