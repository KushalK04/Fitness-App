import React, { useState } from 'react';
import styles from './Meal.module.css';

const MealTracker = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [mealLog, setMealLog] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'foodName' && value.length <= 25) {
      setFoodName(value);
    } else if (name === 'calories' && /^\d{0,4}$/.test(value)) {
      setCalories(value);
    }
  };

  const handleSaveMeal = () => {
    if (foodName && calories) {
      if (editIndex !== null) {
        const updatedMealLog = [...mealLog];
        updatedMealLog[editIndex] = { foodName, calories };
        setMealLog(updatedMealLog);
        setEditIndex(null);
      } else {
        const newMeal = { foodName, calories };
        setMealLog([...mealLog, newMeal]);
      }

      setFoodName('');
      setCalories('');
    }
  };

  const handleEditMeal = (index) => {
    const mealToEdit = mealLog[index];
    setFoodName(mealToEdit.foodName);
    setCalories(mealToEdit.calories);
    setEditIndex(index);
  };

  const handleDeleteMeal = (index) => {
    const updatedMealLog = [...mealLog];
    updatedMealLog.splice(index, 1);
    setMealLog(updatedMealLog);
    setEditIndex(null);
  };

  return (
    <div className={styles.mealLog}>
      <div>
        <label htmlFor="foodName" className={styles.label}>Food Name:</label>
        <input
          className={styles.input}
          type="text"
          id="foodName"
          name="foodName"
          value={foodName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="calories" className={styles.label}>Calories:</label>
        <input
          className={styles.input}
          type="text"
          id="calories"
          name="calories"
          value={calories}
          onChange={handleInputChange}
        />
      </div>
      <button
        className={styles.widgetbutton}
        onClick={handleSaveMeal}
      >
        {editIndex !== null ? 'Edit Meal' : 'Save Meal'}
      </button>

      <div className={styles['meal-log-box']}>
        {mealLog.map((meal, index) => (
          <div
            key={index}
            className={`${styles['meal-entry']} ${index > 13 ? styles['meal-entry-hidden'] : ''}`}
          >
            <span>{meal.foodName} - {meal.calories} calories</span>
            <div>
              <button
                className={styles.widgetbutton}
                onClick={() => handleEditMeal(index)}
              >
                Edit
              </button>
              <button
                className={styles.widgetbutton}
                onClick={() => handleDeleteMeal(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealTracker;