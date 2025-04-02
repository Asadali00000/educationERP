import React from 'react'
import styles from '../styles/mainHome.module.css'
import Image from 'next/image'

function MainHome() {
  return (
    <div className={`${styles.container} ${styles.heroSection}`}>
      <div className={styles.heroBackground}></div>

      <div className={styles.contentContainer}>
        <h1>Empower Education Through Technology</h1>
        <p>
          Transform your school's management with our comprehensive platform designed for students, teachers, and administrators.
        </p>
        <div className={styles.authContainer}>
          <button type="button" className={styles.signupButton}>Get Started</button>
          <button type="button" className={styles.watchDemo}>Watch Demo</button>
        </div>
      </div>

      <div className={styles.mainHomeImage}>
        <Image src="/mainHome.png" alt="Educational platform interface" width={600} height={500} priority />
      </div>
    </div>
  )
}

export default MainHome
