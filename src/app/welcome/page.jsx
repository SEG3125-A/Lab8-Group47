import styles from './styles.module.css';
import '@fontsource/kanit/300.css';
import '@fontsource/kanit/400.css';

export default function Home() {
  return (
    <div>
      <div className={styles.mainText} >
        <h1>
          Health
        </h1>
        <h1 className={styles.trackText}>
          Track
        </h1>
      </div>
      <div className={styles.descriptionText}>
        <p>
          Sign up and start your fitness journey today!
        </p>
      </div>
  </div>
  );
}
