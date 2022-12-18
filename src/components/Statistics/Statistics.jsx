import React from 'react'
import styles from './Statistics.module.css';
import PropTypes from "prop-types";



let getRandomHexColor = function() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
export const Statistics = ({statHeader,statData }) => {
 
 return (
   <section className={styles.statistics}>
     {statHeader && <h2 className={styles.title}>{statHeader}</h2>}
        <ul className={styles.list }>
        {statData.map(element =>
            <li style={{
             backgroundColor: getRandomHexColor()}} className={styles.itemList} key={element.id}>
            <span className="label">{element.label}</span>
            <span>  </span>
            <span className="percentage">{element.percentage}%</span>      
            </li>
        )}
        </ul>
    </section>  
    );
     
};

Statistics.propTypes = {
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      })
  ),
  statHeader: PropTypes.string,
}