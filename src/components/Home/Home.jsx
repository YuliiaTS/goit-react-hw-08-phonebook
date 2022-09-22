import styles from '../Home/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeWrap}>
      <h2 className={styles.homeTitle}>
      Phonebook: At Your Service
      </h2>
    </div>
  );
}