import React from 'react'
import styles from './Profile.module.css';
import PropTypes from "prop-types";

export const Profile = ({user}) => {
  
  return (
    
      <div className={styles.profile}>
        <div className={styles.description}>
          <div className={styles.imgLogo}>
          <img 
            src={user.avatar}
            alt="User avatar"
            className={styles.avatar}
            />
          </div>
          <p className={styles.name}>{user.username}</p>
          <p className="tag">{user.tag}</p>
          <p className="location">{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.itemList}>
            <span className="label">Followers</span>
            <p>
              <span className={styles.quantity}> {user.stats.followers}</span>
            </p>
          </li>
          <li className={styles.itemList}>
            <span className="label">Views</span>
            <p>
              <span className={styles.quantity}> {user.stats.views}</span>
            </p>
          </li>
          <li className={styles.itemList}>
            <span className="label">Likes</span>
            <p>
          <span className={styles.quantity}> {user.stats.likes}</span>
          </p>
          </li>
        </ul>
      </div>
  
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  }),
  
};