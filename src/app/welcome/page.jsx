import styles from './styles.module.css';

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
        <p>
          Sign up and start your fitness journey today!
        </p>
      </div>
  </div>
  );
}
