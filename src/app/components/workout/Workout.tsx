import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export type WorkoutProps = {
    style?: React.CSSProperties;
    date: string;
    time: string;
    exercise: String;
    sets: number;
    reps: number;
}

export default function Workout(props: WorkoutProps) {
    
    return (
        <div className={styles.workout} >
          <div className={styles.workoutInformation} >
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                Date
              </div>
              <div className={styles.informationEntryValue} >
                2024-03-10
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                TIME (START)
              </div>
              <div className={styles.informationEntryValue} >
                3:00PM
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                EXERCISE
              </div>
              <div className={styles.informationEntryValue} >
                Push Ups
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                SETS
              </div>
              <div className={styles.informationEntryValue} >
                4
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                REPS (PER SET)
              </div>
              <div className={styles.informationEntryValue} >
                12
              </div>
            </div>
          </div>
          <div className={styles.buttonView} >
            <div className={styles.editButton} >
              <FontAwesomeIcon icon={faCog} />          
            </div>
            <div className={styles.deleteButton} >
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
        </div>
    );
}