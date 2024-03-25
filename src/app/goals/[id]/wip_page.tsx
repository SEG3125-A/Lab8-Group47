"use client"
import React, { ReactNode, useState } from 'react';
import styles from './styles.module.css'; // Import external CSS file
import store, { EXERCISES, ExerciseType, IGoal } from '../../store'
import { observer } from 'mobx-react';
import { useRouter } from 'next/navigation'


function EditGoal({params}) {
    const router = useRouter();
    let goal: IGoal = store.getGoal(Number(params.id));
    console.log("Goal: " + goal)

    // Ensure the goal being edited actually exists
    if (goal == undefined) {
        //router.back();
    }

    const [exercise, setExercise] = useState(goal.exercise);
    const [sets, setSets] = useState(goal.sets);
    const [reps, setReps] = useState(goal.reps);

    const handleExerciseChange = (event) => {
        setExercise(event.target.value);
    };

    const handleSetsChange = (event) => {
        setSets(event.target.value);
    };

    const handleRepsChange = (event) => {
        setReps(event.target.value);
    };

    const handleUpdateButtonClick = () => {
        store.updateGoal({
            id: goal.id,
            exercise: exercise,
            sets: sets,
            reps: reps,
        })
    };

    const handleDeleteButtonClick = () => {
        store.deleteGoal(goal.id);
        router.push('/goals');
    };


  return (
    <>
    {/* Big white rectangle with dropdown */}
    <div className={styles.whiteRectangle}>

        <div className={styles.dropdownHeader}>Select an Exercise</div>{" "}

        {/* Dropdown */}
        <div className={styles.dropdownContainer}>
        <select className={styles.dropdown} value={exercise[store.language]} onChange={handleExerciseChange}>
            {/* {Object.entries(Exercises).map(([key, value]) => 
                <option value={value} key={key}>{value}</option>
            )} */}
            {EXERCISES.map((e) => 
                <option value={e.English} key={e.id}>{e[store.language]}</option>
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
            <button className={styles.editButton} onClick={handleUpdateButtonClick}>Update</button>
        </div>
        
        <div className={styles.buttonContainer}>
            <button className={styles.editButton} onClick={handleDeleteButtonClick}>Delete</button>
        </div>

    </div>
    </>
  );
}

export default observer(EditGoal);
