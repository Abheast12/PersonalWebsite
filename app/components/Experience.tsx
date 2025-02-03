"use client"
import Image from "next/image"
import styles from "./Experience.module.css"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company X",
      date: "Summer 2023",
      description:
        "Worked on developing and maintaining web applications using React and Node.js. Collaborated with a team of 5 developers to implement new features and improve existing ones.",
      logo: "/images/mathworks.png",
    },
    {
      title: "Research Assistant",
      company: "University CS Department",
      date: "Fall 2022 - Present",
      description:
        "Assisting in a research project focused on machine learning applications in healthcare. Developing algorithms and analyzing large datasets using Python and TensorFlow.",
      logo: "/images/consolidated.jpg",
    },
  ]

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.logoWrapper}>
              <Image src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} width={80} height={80} />
            </div>
            <div className={styles.experienceContent}>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <p className={styles.experienceDetails}>
                {exp.company} | {exp.date}
              </p>
              <p className={styles.experienceDescription}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

