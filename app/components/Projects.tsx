"use client"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import styles from "./Projects.module.css"

export function Projects() {
  const projects = [
    {
      title: "ReLease",
      description:
        `ReLease is a web application that seeks to connect sublessors with sublessees to make it easier for users
        to find/sell apartments for subelaseing (think of it as an AirBnB for subleases). Sublessees can search for a 
        desired start or end date for a sublease in an area of interest and bid on apartment postings by sublessors, allowing
        both parties to easily settle on a price.`,
      image: "/images/release2.png",
      github: "https://github.com/ayushpatel-cs/release-backend",
      website: "https://releasesubleasing.live/",
    },
    {
      title: "Hamiltonian Path Finder",
      description:
        `A Hamiltonian Path in a graph is a path that starts and ends at the same vertex and visits all vertices exactly once. Finding a Hamiltonian Path
          is a NP hard problem, meaning that there is no known efficient solution to the problem. In this project, I created an application that
          given a graph, will use a randomized algorithm to find a Hamiltonian Path efficiently and with high accuracy.`,
      image: "/images/hamiltonian2.png",
      github: "https://github.com/Abheast12/hamiltonianpath",
    },
  ]

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <FiExternalLink /> Visit Website
                </a>
              )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              <FaGithub /> View GitHub Repository
            </a>
            
          </div>
        ))}
      </div>
    </section>
  )
}

