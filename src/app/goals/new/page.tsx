"use client"
import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css'; // Import external CSS file
import store, { ExerciseType, EXERCISES, Languages } from '../../store'
import { observer } from 'mobx-react';


function NewGoal() {

    const [exercise, setExercise] = useState(EXERCISES[0]);
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

        <div className={styles.dropdownHeader}>
            {store.language === Languages.English ? "Select an Exercise" : "Sélectionnez un exercice"}
        </div>{" "}

        {/* Dropdown */}
        <div className={styles.dropdownContainer}>
        <select className={styles.dropdown} value={exercise[store.language]} onChange={handleExerciseChange}>
            {EXERCISES.map((e) => 
                <option value={e.English} key={e.id}>{e[store.language]}</option>
            )}
        </select>

        </div>
            <div className={styles.dataEntryContainer}>
            <div className={styles.dataEntryItem}>
                <label className={styles.label}>
                    {store.language === Languages.English ? "Total Sets:" : "Ensembles totaux:"}
                </label>
                <input className={styles.inputNumber} type="number" value={sets} onChange={handleSetsChange} />
            </div>
            <div className={styles.dataEntryItem}>
                <label className={styles.label}>
                    {store.language === Languages.English ? "Reps per Set:" : "Répétitions par série :"}
                </label>
                <input className={styles.inputNumber} type="number" value={reps} onChange={handleRepsChange} />
            </div>
            </div>

        <div className={styles.buttonContainer}>
            <button className={styles.editButton} onClick={handleAddButtonClick}> 
                {store.language === Languages.English ? "Add" : "Adjouter"}
            </button>
        </div>

    </div>
    </>
  );
}

export default observer(NewGoal);
