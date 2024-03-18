import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { symlink } from 'fs';


export default function Workouts() {
  return (
    <div className={styles.pageBody}>
      <div className={styles.mainText} >
        <div> 
          Workout History
        </div>
      </div>
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
              TIME (STARTED)
            </div>
            <div className={styles.informationEntryValue} >
              3:00 PM
            </div>
          </div>
          <div className={styles.informationEntry} >
            <div className={styles.informationEntryLabel} >
              EXERCISE TYPE
            </div>
            <div className={styles.informationEntryValue} >
              Pushups
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
              REPS (Per Set)
            </div>
            <div className={styles.informationEntryValue} >
              15
            </div>
          </div>
        </div>
      </div>
      <div className={styles.addWorkoutButton} >
        <div className={styles.plusLogo} >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
}
