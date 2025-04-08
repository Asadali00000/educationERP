import React from 'react';
import styles from '../styles/statCard.module.css';

type StatCardProps = {
  value: string;
  label: string;
  trend: string;
  color: 'purple' | 'yellow';
};

const StatCard: React.FC<StatCardProps> = ({ value, label, trend, color }) => {
  return (
    <div className={`${styles.statCard} ${styles[color]}`}>
      <div className={styles.trendBadge}>{trend}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StatCard;
