import React from 'react'
import styles from './Profile.module.css';
import PropTypes from "prop-types";

export const Profile = ({username,tag,location,avatar,stats}) => {
  
  return (
    
      <div className={styles.profile}>
        <div className={styles.description}>
          <div className={styles.imgLogo}>
          <img 
            src={avatar}
            alt="User avatar"
            className={styles.avatar}
            />
          </div>
          <p className={styles.name}>{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.itemList}>
            <span className="label">Followers</span>
            <p>
              <span className={styles.quantity}> {stats.followers}</span>
            </p>
          </li>
          <li className={styles.itemList}>
            <span className="label">Views</span>
            <p>
              <span className={styles.quantity}> {stats.views}</span>
            </p>
          </li>
          <li className={styles.itemList}>
            <span className="label">Likes</span>
            <p>
          <span className={styles.quantity}> {stats.likes}</span>
          </p>
          </li>
        </ul>
      </div>
  
  );
};

Profile.propTypes = {
  
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    
  }),
  
};