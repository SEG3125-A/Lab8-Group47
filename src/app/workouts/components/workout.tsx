import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trash } from 'react-bootstrap-icons';
import StatDisplay from "../../components/stat_display/StatDisplay";
import store from '../../store';
import { Languages } from "../../store";
import MyButton from "../../components/buttons/block/Button";
import router from "next/router";
import { observer } from 'mobx-react';


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

function Workout(props: WorkoutProps) {
    
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
          {/*TODO: Make buttons funcitonal */}
          <div className={styles.buttonView} >
            <div className={styles.deleteButton} >
              <MyButton 
                onClick={() => router.push('/signup')}
                style={{backgroundColor: "rgba(96, 252, 162, 1)", fontFamily: 'sans-serif'}}
                size='sm'
              >
                {store.language === Languages.English ? "Sign-up" : "Inscriri"}
              </MyButton>
            </div>
          </div>
        </div>
    );
}

export default observer(Workout);