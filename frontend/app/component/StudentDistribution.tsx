import React from 'react';
import styles from '../styles/studentDistribution.module.css';

type StudentDistributionProps={
		boys: number;
		girls: number;
		boysPercentage:number;
		girlsPercentage:number;

}

const StudentDistribution:React.FC<StudentDistributionProps> = ({ boys, girls, boysPercentage, girlsPercentage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <div className={styles.chartInner}>
          <div className={styles.chartIcon}>
            <div className={styles.boyIcon}></div>
            <div className={styles.girlIcon}></div>
          </div>
        </div>
        <svg className={styles.chartRing} viewBox="0 0 100 100">
          <circle
            className={styles.boyRing}
            cx="50"
            cy="50"
            r="45"
            strokeDasharray={`${boysPercentage * 2.83} 283`}
            strokeDashoffset="0"
          />
          <circle
            className={styles.girlRing}
            cx="50"
            cy="50"
            r="35"
            strokeDasharray={`${girlsPercentage * 2.51} 251`}
            strokeDashoffset="0"
          />
        </svg>
      </div>

      <div className={styles.stats}>
        <div className={styles.statBoys}>
          <div className={styles.dot}></div>
          <div>
            <div className={styles.statValue}>{boys.toLocaleString()}</div>
            <div className={styles.statLabel}>Boys ({boysPercentage}%)</div>
          </div>
        </div>
        <div className={styles.statGirls}>
          <div className={styles.dot}></div>
          <div>
            <div className={styles.statValue}>{girls.toLocaleString()}</div>
            <div className={styles.statLabel}>Girls ({girlsPercentage}%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDistribution;
