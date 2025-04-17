import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return <>
  <div className={styles.container}>
    <div className={styles['typing-indicator']}>
      <div className={styles['typing-circle']}></div>
      <div className={styles['typing-circle']}></div>
      <div className={styles['typing-circle']}></div>
      <div className={styles['typing-shadow']}></div>
      <div className={styles['typing-shadow']}></div>
      <div className={styles['typing-shadow']}></div>
    </div>
    </div>
  </>
};

export default Loader;