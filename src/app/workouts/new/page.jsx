import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import store from '../../store.ts';

import { Plus } from 'react-bootstrap-icons';

export default function NewWorkout() {

  return (
    <div className={styles.pageBody}>
      <div className={styles.mainText}>New Workout</div>
      <div className={styles.workout}>
        <div className={styles.fields}>
            <div className={styles.topSection}>
                <div className={styles.exerciseType}>
                    <div className={styles.label}> EXERCISE TYPE </div>
                    <div className={styles.selectionBox}>
                        <div className={styles.boxContent}>
                            <div className={styles.boxText}>
                                <div className={styles.boxValue}>Dummy Text</div>
                            </div>
                            <div className={styles.chevron}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dateAndTime}>
                    <div className={styles.time}>
                        <div className={styles.label}>TIME</div>
                        <div className={styles.selectionBox}>
                            <div className={styles.boxContent}>
                                <div className={styles.boxText}>
                                    <div className={styles.value}>99:99 AM</div>
                                </div>
                                <div className={styles.clock}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.date}>
                    <div className={styles.label}>DATE</div>
                        <div className={styles.selectionBox}>
                            <div className={styles.boxContent}>
                                <div className={styles.boxText}>
                                    <div className={styles.value}>99/99/9999</div>
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
                    <div className={styles.label}>SETS</div>
                    <div className={styles.selectionBox}>
                        <div className={styles.boxContent}>
                            <div className={styles.boxText}>
                                <div className={styles.value}>5</div>
                            </div>
                            <div className={styles.chevronUpDown}>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.totalReps}>
                    <div className={styles.label}>REPS (PER SET)</div>
                    <div className={styles.selectionBox}>
                        <div className={styles.boxContent}>
                            <div className={styles.boxText}>
                                <div className={styles.value}>7</div>
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
                    <div className={styles.buttonText}> Save </div>
                </div>
                <div className={styles.cancelButton}>
                    <div className={styles.buttonText}> Cancel </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
