"use client"
import styles from "./Resume.module.css"

export function Resume() {
  return (
    <section id="resume" className={styles.section}>
      <h2 className={styles.title}>Documents</h2>
      <div className={styles.content}>
        <div className={styles.pdfPreview}>
          <h3>Resume</h3>
          <iframe src="/docs/resume.pdf" className={styles.pdfFrame} title="Resume Preview"></iframe>
          <a href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>
            View Full Resume
          </a>
        </div>
        <div className={styles.pdfPreview}>
          <h3>Cover Letter</h3>
          <iframe
            src="/path-to-your-cover-letter.pdf"
            className={styles.pdfFrame}
            title="Cover Letter Preview"
          ></iframe>
          <a href="/path-to-your-cover-letter.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>
            View Full Cover Letter
          </a>
        </div>
      </div>
    </section>
  )
}

