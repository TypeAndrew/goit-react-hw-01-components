
import styles from './Friends.module.css';

export const FriendList = ({ friends }) => {
    
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