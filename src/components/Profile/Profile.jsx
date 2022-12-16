import user from './user.json';
import styles from './Profile.module.css';
console.log(styles);
export const Profile = () => {
  
  return (
    <div >
      <div className={styles.profile}>
        <div className={styles.description}>
          <img className={styles.imgLogo}
            src={user.avatar}
            alt="User avatar"
            class="avatar"
          />
          <p className={styles.name}>{user.username}</p>
          <p class="tag">{user.tag}</p>
          <p class="location">{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.itemList}>
            <span class="label">Followers</span>
            <p>
              <span className={styles.quantity}> {user.stats.followers}</span>
            </p>
          </li>
          <li className={styles.itemList}>
            <span class="label">Views</span>
            <p>
              <span className={styles.quantity}> {user.stats.views}</span>
            </p>
          </li>
          <li className={styles.itemList}>
            <span class="label">Likes</span>
            <p>
          <span className={styles.quantity}> {user.stats.likes}</span>
          </p>
          </li>
        </ul>
      </div>
    </div>
  );
};