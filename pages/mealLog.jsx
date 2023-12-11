import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';
import MealTracker from '../components/MealTracker';

export default function Home() {
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
        <section className={styles.mainCont}>
            <h1 className={styles.heading}>MEAL LOG</h1>
            <MealTracker/>
        </section>
      </main>
    </>
  );
}