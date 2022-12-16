import styles from './Statistics.module.css';

export const Statistics = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

        <ul className={styles.stats1}>
          <li className={styles.itemList+" "+styles.blue}>
            <span class="label">.docx</span>
            <span class="percentage"> 4%</span>
          </li>
          <li className={styles.itemList+" "+styles.purple}>
            <span class="label">.mp3</span>
            <span class="percentage"> 14%</span>
          </li>
          <li className={styles.itemList+" "+styles.magenta}>
            <span class="label">.pdf</span>
            <span class="percentage"> 41%</span>
          </li>
          <li className={styles.itemList+" "+styles.cyan}>
            <span class="label">.mp4</span>
            <span class="percentage"> 12%</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
