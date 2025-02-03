"use client"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Header } from "./components/Header"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Resume } from "./components/Resume"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image src="/images/profile.jpg" alt="Your Name" width={300} height={300} className={styles.profileImage} />
            </div>
            <div className={styles.info}>
              <h1 className={styles.name}>Hi! I'm Abhinav Govindaraju</h1>
              <p className={styles.description}>
                I'm a Computer Science undergrad at Georgia Tech with a deep interest in machine learning and algorithmic programming. 
                I have experience as a Software Engineering Intern at Consolidated Trading, BoundaryML (a Y Combinator backed startup), and MathWorks,
                where I worked on several projects pertaining to backend development, machine learning and systems-level programming.
                I'm always eager to learn new concepts and technologies, and apply them to solve real-world problems. 
                Scroll to learn more about my experience and projects!
              </p>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/Abheast12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinav-govindaraju-859a43247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin size={24} />
                </a>
                <a href="abhinavgovindaraju25@gmail.com" className={styles.socialLink}>
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <Experience /> */}
        <Projects />
        <Resume />
      </main>
    </div>
  )
}

