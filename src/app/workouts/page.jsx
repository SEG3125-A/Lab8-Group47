import {Workout} from "../components/workout/Workout";
import {WorkoutProps} from "../components/workout/Workout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import React from 'react';


export default function Workouts() {
  const myWorkouts = [
    {
        date: "2024-03-25",
        time: "10:00 AM",
        exercise: "Push-ups",
        sets: 3,
        reps: 10
    },
  ];

  return (
    <div className={styles.pageBody}>
      <div className={styles.addWorkoutButton} >
        <div className={styles.plusLogo} >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <div className={styles.mainText} >
          Workout History
      </div>
      <div className={styles.workoutView}>
        {/* Check if myWorkouts array is populated */}
        {myWorkouts.length > 0 ? (
          myWorkouts.map((workout, index) => (
            <Workout key={index} {...workout}/>
          ))
        ) : (
          <div className={styles.mainText}>Add your first workout!</div>
        )}
      </div>
    </div>
  );
}
