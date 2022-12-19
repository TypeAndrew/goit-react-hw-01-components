import React from 'react'
import styles from './Friends.module.css';
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    
    return (
    <div className={styles.main }>
        <ul className={styles.list }>
        
                {friends.map(element => 
                    <FriendListItem key={element.id} id={ element.id } isOnline={ element.isOnline } avatar={element.avatar} name={element.name}/>
                )};
      
        </ul>
    </div>  
    );
};    

export const FriendListItem = ({id,isOnline,avatar,name}) => {
    
    return (
        
        <li className={styles.itemList } key={id}>
            <div className={styles.blockList}>
                {isOnline === true
                    ? <span className={styles.dotGreen}></span>
                    : <span className={styles.dotRed}></span>}
                <img className={styles.imgLogo} src={avatar} alt={name}></img>{name}</div></li>
        )

};                       


FriendList.propTypes = {
  friends: 
        PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
}

FriendListItem.propTypes = {

            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
    
  
}