"use client"

import styles from './styles.module.css';
import store from '../store'
import Languages from '../store'
import { observer } from 'mobx-react';

function Home() {
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
      {store.language === Languages.English ? "Inscrivez-vous et commencez votre parcours de remise en forme dès aujourd'hui !" : "Sign up and start your fitness journey today!"} {/*??????????? */}
      </p>

      </div>
  </div>
  );
}

export default observer(Home);
