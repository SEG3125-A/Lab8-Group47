import React from 'react';
import './styles.css'; // Import external CSS file

export default function DataEntryForm() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dropdown Inside White Rectangle</title>
  <link rel="stylesheet" href="styles.css" /> {/* Link to external CSS file */}
  {/* Big white rectangle with dropdown */}
  <div className="white-rectangle">
    <div className="dropdown-header">Select an Exercise</div>{" "}
    {/* Dropdown header */}
    <div className="dropdown-container">
      {" "}
      {/* Dropdown container */}
      <select id="dropdown">
        <option value="option1">Squats</option>
        <option value="option2">Burpees</option>
        <option value="option3">Jumping jacks</option>
        {/* Add more options as needed */}
      </select>
    </div>
<div className="data-entry-container">
  <div className="data-entry-item">
    <label htmlFor="total-sets">Total Sets:</label>
    <input type="number" id="total-sets" name="total-sets" />
  </div>
  <div className="data-entry-item">
    <label htmlFor="reps-per-set">Reps per Set:</label>
    <input type="number" id="reps-per-set" name="reps-per-set" />
  </div>
</div>
      <div className="button-container">
        <button className="edit-button">Add</button>
        <button className="delete-button">Delete</button>
      </div>



  </div>
</>

  );
}
