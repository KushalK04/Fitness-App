import { useState } from 'react';
import styles from '@/styles/exercise.module.css';
import ExerciseTracker from '../components/ExerciseTracker';

export default function EXERCISE() {
  return (
    <>
      <main className={styles.main}>
      <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src="navLogo.svg" className={styles.logo} alt="Thrive logo" />
            </div>
            <div className={styles.divNavButton}>
              <button className={styles.navHome}>HOME</button>
              <button className={styles.navBut}>ABOUT US</button>
            </div>
          </nav>
        </header>
        <ExerciseTracker/>
      </main>
    </>
  );
}
