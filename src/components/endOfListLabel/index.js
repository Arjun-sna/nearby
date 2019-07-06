import React from 'react';
import styles from './styles.scss';

export default ({ label }) => (
  <div className={styles['end-of-list-label']}>
    { label || 'End Of List'}
  </div>
);
