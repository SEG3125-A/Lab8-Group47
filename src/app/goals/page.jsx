"use client"

import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Goals(searchParams) {

  // localStorage.removeItem('goals');

  var goals = [
  ];

  const goalsArray = JSON.parse(localStorage.getItem('goals'));
  goals = goalsArray;

  if (goals == null) {
    goals = [];
  }

  const handleClick = () => {
    localStorage.setItem('goals', JSON.stringify(goals));    
    window.location.href = "/addGoals"
  };

  const deleteSomething = (index) => {
    goals.splice(index, 1);
    localStorage.setItem('goals', JSON.stringify(goals));   
    window.location.href = "/goals"
  };


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className={styles.container} style={{ overflowX: 'auto' }}>
          
          <h2>My Goals</h2>


            <div className={styles.goals}>

              {/* Map through the goals array and render each goal */}
              {goals.map((goal, index) => (
                <div className={styles.goal}>
                    
                    <div className={styles.circle}>
                      <div className={styles.innerCircle}>
                        <h3>{goal.title}</h3>
                      </div>
                    </div>

                    <div className={styles.labels}>

                      <div className={styles.distance}>Total Sets</div>
                      <div className={styles.new}>{goal.totalSets}</div>
                      <div className={styles.distance}>Reps per Set</div>
                      <div className={styles.new}>{goal.repsPerSet}</div>
                      <button className={styles.deleteButton} onClick={() => deleteSomething(index)}>Delete</button>
                    </div>

                </div>
              ))}

            <Link href="/goals/new" >
                <div className={styles.wrapper}>
                    <div className={styles.addIcon}>
                    +
                    </div>
                </div>
            </Link>

        </div>
      </div>
    </div>
  );
}
