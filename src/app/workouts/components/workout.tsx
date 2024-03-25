import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import StatDisplay from "../../components/stat_display/StatDisplay";
import store from '../../store';
import { Languages } from "../../store";

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
                {store.language === Languages.English ? "DATE" : "DATE"}
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.date}
              </div>
            </div>

            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                {store.language === Languages.English ? "TIME (START)" : "HEURE (DEBUT)"}
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.time}
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                {store.language === Languages.English ? "EXERCISE" : "EXERCICE"}
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.exercise}
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
                {store.language === Languages.English ? "SETS" : "ENSEMBLES"}
              </div>
              <div className={styles.informationEntryValue} >
                {props.data.sets}
              </div>
            </div>
            <div className={styles.informationEntry} >
              <div className={styles.informationEntryLabel} >
              {store.language === Languages.English ? "REPS (PER SET)" : "RÉPÉTITIONS (PAR SET)"}
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