"use client";
import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import store from '../../store.ts';
import { Languages } from '../../store.ts';
import { Plus } from 'react-bootstrap-icons';

export default function NewWorkout() {

  return (
    <div className={styles.pageBody}>
      <div className={styles.mainText}>
        {store.language === Languages.English ? "New Workout" : "Nouvel entraînement"}
      </div>
      <div className={styles.workout}>
        <div className={styles.fields}>
            <div className={styles.topSection}>
                <div className={styles.exerciseType}>
                    <div className={styles.label}> 
                        {store.language === Languages.English ? "EXERCISE TYPE " : "TYPE D'EXERCICE"}
                    </div>
                    <div className={styles.selectionBox}>
                        <div className={styles.boxContent}>
                            <div className={styles.boxText}>
                                <div className={styles.boxValue}>
                                    {store.language === Languages.English ? "XXXXXXX " : "XXXXXXX"}
                                </div>
                            </div>
                            <div className={styles.chevron}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dateAndTime}>
                    <div className={styles.time}>
                        <div className={styles.label}>
                            {store.language === Languages.English ? "TIME" : "TEMPS"}</div>
                        <div className={styles.selectionBox}>
                            <div className={styles.boxContent}>
                                <div className={styles.boxText}>
                                    <div className={styles.value}>\
                                    {store.language === Languages.English ? "XXXXXX" : "XXXXXX"}
                                    </div>
                                </div>
                                <div className={styles.clock}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.date}>
                    <div className={styles.label}>
                        {store.language === Languages.English ? "DATE" : "DATE"}
                    </div>
                        <div className={styles.selectionBox}>
                            <div className={styles.boxContent}>
                                <div className={styles.boxText}>
                                    <div className={styles.value}>
                                    {store.language === Languages.English ? "XXXXXX" : "XXXXXX"}
                                </div>
                                </div>
                                <div className={styles.calendar}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.horizontalDivider}>
        
            </div>
            <div className={styles.workoutDetails}>
                <div className={styles.totalSets}>
                    <div className={styles.label}>
                        {store.language === Languages.English ? "SETS" : "ENSEMBLES"}
                    </div>
                    <div className={styles.selectionBox}>
                        <div className={styles.boxContent}>
                            <div className={styles.boxText}>
                                <div className={styles.value}>
                                    {store.language === Languages.English ? "xxxxxx" : "xxxxxx"}
                                </div>
                            </div>
                            <div className={styles.chevronUpDown}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.totalReps}>
                    <div className={styles.label}>
                        {store.language === Languages.English ? "REPS (PER SET)" : "RÉPÉTITIONS (PAR SET)"}
                    </div>
                    <div className={styles.selectionBox}>
                        <div className={styles.boxContent}>
                            <div className={styles.boxText}>
                                <div className={styles.value}>
                                    {store.language === Languages.English ? "xxxxxx" : "xxxxxx"}
                                </div>
                            </div>
                            <div className={styles.chevronUpDown}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*TODO: Turn buttons into MyButtons that perform proper tasks with store.*/}
        <div className={styles.bottomAligned}>
            <div className={styles.buttonView}>
                <div className={styles.saveButton}>
                    <div className={styles.buttonText}> 
                        {store.language === Languages.English ? "SAVE" : "SAUVEGARDER"} 
                    </div>
                </div>
                <div className={styles.cancelButton}>
                    <div className={styles.buttonText}> 
                        {store.language === Languages.English ? "CANCEL" : "ANNULER"}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
