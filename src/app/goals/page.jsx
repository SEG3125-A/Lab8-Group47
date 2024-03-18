import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Goals() {

const goals = [
  { title: "Running", totalSets: 4, repsPerSet: 12 },
  { title: "Weightlifting", totalSets: 3, repsPerSet: 10 },
  { title: "Swimming", totalSets: 5, repsPerSet: 20 },
  { title: "Swimming", totalSets: 5, repsPerSet: 20 }
];


  return (
    <div>
      <div className="mainText" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container" style={{ overflowX: 'auto' }}>
          
          <h2>My Goals</h2>
          


          {/* Map through the goals array and render each goal */}
          {goals.map((goal, index) => (
            <div className="rectangle" key={index}>
              <div className="circle">
                <div className="inner-circle">
                  <h3>{goal.title}</h3>
                </div>
              </div>
              <div className="labels">
                <div>Total Sets: {goal.totalSets}</div>
                <div>Reps per Set: {goal.repsPerSet}</div>
              </div>
            </div>
          ))}

            <a href="/addGoals">
              <div class="wrapper">
                <div class="add-icon">
                  +
                </div>
              </div>
            </a>

        </div>
      </div>
    </div>
  );
}
