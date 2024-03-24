"use client"

import React from 'react';
import styles from './styles.module.css'; // Import external CSS file

export default function DataEntryForm(searchParams) {
  const goals = localStorage.getItem('goals');
  const goalsArray = JSON.parse(goals);

  const handleAddButtonClick = () => {

    // Get data from input fields and dropdown
    const selectedExercise = document.getElementById('dropdown').value;
    const totalSets = document.getElementById('total-sets').value;
    const repsPerSet = document.getElementById('reps-per-set').value;

    // Construct an object with the collected data
    const newData = {
      title: selectedExercise,
      totalSets: parseInt(totalSets),
      repsPerSet: parseInt(repsPerSet)
    };

    goalsArray.push(newData);
    localStorage.setItem('goals', JSON.stringify(goalsArray));

    const storedData = localStorage.getItem('goals');

    window.location.href = '/goals';

  };

  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dropdown Inside White Rectangle</title>
  <link rel="stylesheet" href="styles.css" /> {/* Link to external CSS file */}
  {/* Big white rectangle with dropdown */}
  <div className={styles.whiteRectangle}>
    <div className={styles.dropdownHeader}>Select an Exercise</div>{" "}
    {/* Dropdown header */}
    <div className={styles.dropdownContainer}>
      {" "}
      {/* Dropdown container */}
      <select className={styles.dropdown} id="dropdown">
        <option value="Squats">Squats</option>
        <option value="Burpees">Burpees</option>
        <option value="Jumping jacks">Jumping jacks</option>
        {/* Add more options as needed */}
      </select>
    </div>
<div className={styles.dataEntryContainer}>
  <div className={styles.dataEntryItem}>
    <label className={styles.label} htmlFor="total-sets">Total Sets:</label>
    <input className={styles.inputNumber} type="number" id="total-sets" name="total-sets" />
  </div>
  <div className={styles.dataEntryItem}>
    <label className={styles.label} htmlFor="reps-per-set">Reps per Set:</label>
    <input className={styles.inputNumber} type="number" id="reps-per-set" name="reps-per-set" />
  </div>
</div>
      <div className={styles.buttonContainer}>
        <button className={styles.editButton} onClick={handleAddButtonClick}>Add</button>
      </div>



  </div>
</>

  );
}
