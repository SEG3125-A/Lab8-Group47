"use client"

import styles from './styles.module.css';
import store from '../store.ts'
import Languages from '../store.ts'

export default function Home() {
  return (
    <div className={styles.pageBody}>
      <div className={styles.mainText} >
        {/* TODO: Convert these elements back to h1 when we figure out how to override defualt h1 styles */}
        <div> 
          Health
        </div>
        <div className={styles.trackText}>
          Track
        </div>
      </div>
      <div className={styles.descriptionText}>
      <p style={{fontFamily: 'sans-serif'}}>
        {store.language === Languages.English ? "Sign up and start your fitness journey today!" : "Inscrivez-vous et commencez votre parcours de remise en forme dès aujourd'hui !"}
      </p>

      </div>
  </div>
  );
}
