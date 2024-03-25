import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import StatDisplay from "../../components/stat_display/StatDisplay";

export type WorkoutData = {
    date: string;
    time: string;
    exercise: String;
    sets: number;
    reps: number;
}

export type WorkoutProps = {
    style?: React.CSSProperties;
    data: WorkoutData;
}

export default function Workout(props: WorkoutProps) {
    
    return (
        <div className={styles.workout} >
          <div className={styles.workoutInformation} >
            {/* <StatDisplay size="sm" data={{
                name: "Date",
                value: "2024-03-10",
            }}/> */}

            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                Date
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.date}
              </div>
            </div>

            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                TIME (START)
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.time}
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                EXERCISE
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.exercise}
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                SETS
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.sets}
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                REPS (PER SET)
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.reps}
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