import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';
import MealTracker from '../components/MealTracker';
import { useState } from 'react';
import Calendar from 'react-calendar';

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
            <h1 className={styles.heading}>DASHBOARD</h1>
            <div className={styles.maincont}>
                <div className={styles.widget}>
                    <div className={styles.buttoncontainer}>
                        <h2 className={styles.widgetheader}>
                           EXERCISE LOG
                        </h2>
                        <button className={styles.widgetbutton}> 
                          <Link href='/exerciseLog'>
                            VIEW LOG
                          </Link> 
                        </button>
                    </div>
                </div>
                <div className={styles.widget}>
                    <h2 className={styles.widgetheader}>
                    CALENDER
                    </h2>
                </div>
                <div className={styles.widget}>
                    <div className={styles.mealscontainer}>
                        <h2 className={styles.widgetheader}>
                        MEAL TRACKER
                        </h2>
                        <button className={styles.widgetbutton2}> 
                            <Link href='/mealLog'>
                                VIEW LOG 
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}