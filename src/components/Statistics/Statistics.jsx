import React from 'react'
import styles from './Statistics.module.css';
import data from './data.json';

let statData = [];
let findValue;
data.forEach((element) => {
    findValue = statData.find(el => el.label === element.label);
    if (findValue === undefined) {
        statData.push(element);
    } else {
        findValue.percentage += element.percentage;
    }
});

let getRandomHexColor = function() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
export const Statistics = () => {
 
 return (
   <section className={styles.statistics}>
     <h2 className={styles.title}>Upload stats</h2>
        <ul className={styles.list }>
        {statData.map(element =>
            <li style={{
             backgroundColor: getRandomHexColor()}} className={styles.itemList} key={element.id}>
            <span class="label">{element.label}</span>
            <span>  </span>
            <span class="percentage">{element.percentage}%</span>      
            </li>
        )}
        </ul>
    </section>  
    );
     
};
