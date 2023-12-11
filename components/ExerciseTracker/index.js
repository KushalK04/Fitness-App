import React, { useState } from 'react';
import styles from './Exercise.module.css';

const ExerciseTracker = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [exerciseLog, setExerciseLog] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'exerciseName' && value.length <= 25) {
      setExerciseName(value);
    } else if (name === 'reps' && /^\d{0,4}$/.test(value)) {
      setReps(value);
    } else if (name === 'sets' && /^\d{0,4}$/.test(value)) {
      setSets(value);
    }
  };

  const handleSaveExercise = () => {
    if (exerciseName && reps && sets) {
      if (editIndex !== null) {
        const updatedExerciseLog = [...exerciseLog];
        updatedExerciseLog[editIndex] = { exerciseName, reps, sets };
        setExerciseLog(updatedExerciseLog);
        setEditIndex(null);
      } else {
        const newExercise = { exerciseName, reps, sets };
        setExerciseLog([...exerciseLog, newExercise]);
      }

      setExerciseName('');
      setReps('');
      setSets('');
    }
  };

  const handleEditExercise = (index) => {
    const exerciseToEdit = exerciseLog[index];
    setExerciseName(exerciseToEdit.exerciseName);
    setReps(exerciseToEdit.reps);
    setSets(exerciseToEdit.sets);
    setEditIndex(index);
  };

  const handleDeleteExercise = (index) => {
    const updatedExerciseLog = [...exerciseLog];
    updatedExerciseLog.splice(index, 1);
    setExerciseLog(updatedExerciseLog);
    setEditIndex(null);
  };

  return (
    <div className={styles.exerciseLog}>
      <div>
        <label htmlFor="exerciseName" className={styles.label}>Exercise Name:</label>
        <input
          className={styles.input}
          type="text"
          id="exerciseName"
          name="exerciseName"
          value={exerciseName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="reps" className={styles.label}>Reps:</label>
        <input
          className={styles.input}
          type="text"
          id="reps"
          name="reps"
          value={reps}
          onChange={handleInputChange}
        />
      </div>
      <div> {/* Step 2: Add sets input */}
        <label htmlFor="sets" className={styles.label}>Sets:</label>
        <input
          className={styles.input}
          type="text"
          id="sets"
          name="sets"
          value={sets}
          onChange={handleInputChange}
        />
      </div>
      <button
        className={styles.widgetbutton}
        onClick={handleSaveExercise}
      >
        {editIndex !== null ? 'Edit Exercise' : 'Save Exercise'}
      </button>

      <div className={styles['exercise-log-box']}>
        {exerciseLog.map((exercise, index) => (
          <div
            key={index}
            className={`${styles['exercise-entry']} ${index > 13 ? styles['exercise-entry-hidden'] : ''}`}
          >
            <span className={styles['exercise-details']}>{exercise.exerciseName} - {exercise.reps} reps - {exercise.sets} sets</span>
            <div>
              <button
                className={styles.widgetbutton}
                onClick={() => handleEditExercise(index)}
              >
                Edit
              </button>
              <button
                className={styles.widgetbutton}
                onClick={() => handleDeleteExercise(index)}
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

export default ExerciseTracker;