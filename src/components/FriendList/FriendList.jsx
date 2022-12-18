import React from 'react'
import styles from './Friends.module.css';
import PropTypes from "prop-types";

export const FriendList = ({ children }) => {
    
    return (
    <div className={styles.main }>
        <ul className={styles.list }>
        
           {children}
      
        </ul>
    </div>  
    );
           
};    

export const FriendCard = ({friends}) => {
    
    return (
        friends.map(element =>
            <li className={styles.itemList } key={element.id}>
                <div className={styles.blockList}>
                    {element.isOnline === true
                        ? <span className={styles.dotGreen}></span>
                        : <span className={styles.dotRed}></span>}
                    <img className={styles.imgLogo} src={element.avatar} alt={element.name}></img>{element.name}</div></li>
              )
 );
           
};                       


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,  
      })
  )
}