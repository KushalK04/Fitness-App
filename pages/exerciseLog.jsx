import styles from '@/styles/exercise.module.css';
import ExerciseTracker from '../components/ExerciseTracker';
import Link from 'next/link';

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
                <Link href='/dashboard'>
                    <button className={styles.navHome}>HOME</button>
                </Link>
            </div>
          </nav>
        </header>
        <h1 className={styles.heading}>EXERCISE LOG</h1>
        <ExerciseTracker/>
      </main>
    </>
  );
}
