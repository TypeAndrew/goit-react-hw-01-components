import styles from './Statistics.module.css';
import data from './data.json';
console.log(data.find(el => el.label === ".docx").percentage);
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
            <span class="percentage"> {data.find(el => el.label === ".docx").percentage}%</span>
          </li>
          <li className={styles.itemList+" "+styles.purple}>
            <span class="label">.mp3</span>
            <span class="percentage"> {data.find(el => el.label === ".mp3").percentage}%</span>
          </li>
          <li className={styles.itemList+" "+styles.magenta}>
            <span class="label">.pdf</span>
            <span class="percentage"> {data.find(el => el.label === ".pdf").percentage}%</span>
          </li>
          <li className={styles.itemList+" "+styles.cyan}>
            <span class="label">.mp4</span>
            <span class="percentage"> {data.find(el => el.label === ".mp4").percentage}%</span>
          </li>
        </ul>
      </section>
    </div>
  );
 return (
    <div className={styles.main }>
        <ul className={styles.list }>
        {friends.map(element =>
            <li className={styles.itemList } key={element.id}>
                <div className={styles.blockList}>
                    {element.isOnline === true
                        ? <span className={styles.dotGreen}></span>
                        : <span className={styles.dotRed}></span>}
                    <img className={styles.imgLogo} src={element.avatar} alt={element.name}></img>{element.name}</div></li>
        )}
        </ul>
    </div>  
    );

};
