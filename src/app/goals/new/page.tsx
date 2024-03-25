"use client"
import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css'; // Import external CSS file
import store, { Exercises } from '../../store'
import { observer } from 'mobx-react';


function NewGoal() {

    const [exercise, setExercise] = useState(Exercises.Pushups);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);

    const handleExerciseChange = (event) => {
        setExercise(event.target.value);
    };

    const handleSetsChange = (event) => {
        setSets(event.target.value);
    };

    const handleRepsChange = (event) => {
        setReps(event.target.value);
    };

  const handleAddButtonClick = () => {

    store.newGoal = {
        exerciseType: exercise,
        sets: sets,
        reps: reps,
    }

    store.addGoal();
    
  };

  
  return (
    <>
    {/* Big white rectangle with dropdown */}
    <div className={styles.whiteRectangle}>

        <div className={styles.dropdownHeader}>Select an Exercise</div>{" "}

        {/* Dropdown */}
        <div className={styles.dropdownContainer}>
        <select className={styles.dropdown} value={exercise} onChange={handleExerciseChange}>
            {Object.entries(Exercises).map(([key, value]) => 
                <option value={value} key={key}>{value}</option>
            )}
        </select>

        </div>
            <div className={styles.dataEntryContainer}>
            <div className={styles.dataEntryItem}>
                <label className={styles.label}>Total Sets:</label>
                <input className={styles.inputNumber} type="number" value={sets} onChange={handleSetsChange} />
            </div>
            <div className={styles.dataEntryItem}>
                <label className={styles.label}>Reps per Set:</label>
                <input className={styles.inputNumber} type="number" value={reps} onChange={handleRepsChange} />
            </div>
            </div>

        <div className={styles.buttonContainer}>
            <button className={styles.editButton} onClick={handleAddButtonClick}>Add</button>
        </div>

    </div>
    </>
  );
}

export default observer(NewGoal);
