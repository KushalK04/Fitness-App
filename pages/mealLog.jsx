import { useState } from 'react';
import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';

export default function Nutrition() {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'eqGvQNRRe5pnvGnzOEoIeQ==T8rUoBqbsWQeBXT2',
          },
          contentType: 'application/json',
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setNutritionData(result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      fetchData();
    }
  };

  return (
    <>
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
      <main className={styles.main}>
        <div className={styles.banandiv1}>
          <label className={styles.widgetheader}>
            Enter your Food Item(s){' '}
          </label>
          <input
            className={styles.in}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} className={styles.search}>Search</button>
        </div>

        {nutritionData && (
          <div className={styles.banandiv}>
            <h1 className={styles.ali}>Nutrition Data</h1>
            <ul className={styles.content}>
              {nutritionData.items.map((item, index) => (
                <li key={index}>
                  <strong className={styles.banan}>{item.name}</strong>
                  <p>Calories: {item.calories}</p>
                  <p>Serving Size: {item.serving_size_g} g</p>
                  <p>Fat: {item.fat_total_g} g</p>
                  <p>Saturated Fat: {item.fat_saturated_g} g</p>
                  <p>Protein: {item.protein_g} g</p>
                  <p>Sodium: {item.sodium_mg} mg</p>
                  <p>Potassium: {item.potassium_mg} mg</p>
                  <p>Cholesterol: {item.cholesterol_mg} mg</p>
                  <p>Carbohydrates: {item.carbohydrates_total_g} g</p>
                  <p>Fiber: {item.fiber_g} g</p>
                  <p>Sugar: {item.sugar_g} g</p>

                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </>
  );
}



