import styles from './Friends.module.css';

export const FriendList = ({ friends }) => {
    
    return (
    <div className={styles.main }>
        <ul className={styles.list }>
        {friends.map(element =>
            <li className={styles.itemList } key={element.id}>
            <img className={styles.imgLogo } src={element.avatar} alt={element.name}></img>{element.name}</li>
        )}
        </ul>
    </div>  
    );
           
};    
