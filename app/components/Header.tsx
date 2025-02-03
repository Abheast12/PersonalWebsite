"use client"
import styles from "./Header.module.css"

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a onClick={() => scrollToSection("about")} className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("experience")} className={styles.navLink}>
              Experience
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")} className={styles.navLink}>
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("resume")} className={styles.navLink}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

