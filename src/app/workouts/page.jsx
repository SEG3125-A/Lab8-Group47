import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import store from '../store.ts'

import Workout from './components/workout';
import { Plus } from 'react-bootstrap-icons';

export default function Workouts() {
  const myWorkouts = {
        date: "2024-03-25",
        time: "10:00 AM",
        exercise: "Push-ups",
        sets: 3,
        reps: 10
  };

  return (
    <div className={styles.pageBody}>
      <div className={styles.mainText} >
          Workout History
      </div>
      <div className={styles.workoutView}>
        <Workout data={myWorkouts} key={myWorkouts.reps} />
        {/* Check if myWorkouts array is populated */}
        {1 > 2 ? (
          store.workouts.map((workout, index) => (
            <Workout data={workout} key={workout.id}/>
          ))
        ) : (
          <div className={styles.mainText}>Add your first workout!</div>
        )}
      </div>
      <Link href="/workouts/new" className={styles.newWorkout}>
        <Plus className={styles.plusIcon}/>
      </Link>
    </div>
  );
}
