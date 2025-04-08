import React from 'react';
import styles from '../styles/attendanceChart.module.css';

const AttendanceChart = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const presentData = [65, 75, 90, 70, 73];
  const absentData = [60, 67, 40, 80, 62];

  return (
    <div className={styles.container}>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${styles.presentDot}`}></div>
          <span>Total Present</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${styles.absentDot}`}></div>
          <span>Total Absent</span>
        </div>
      </div>

      <div className={styles.chart}>
        <div className={styles.yAxis}>
          <div>100</div>
          <div>75</div>
          <div>50</div>
          <div>25</div>
          <div>0</div>
        </div>

        <div className={styles.chartBars}>
          {days.map((day, index) => (
            <div key={day} className={styles.dayColumn}>
              <div className={styles.barContainer}>
                <div className={styles.barGroup}>
                  <div
                    className={`${styles.bar} ${styles.presentBar}`}
                    style={{height: `${presentData[index]}%`}}
                  ></div>
                  <div
                    className={`${styles.bar} ${styles.absentBar}`}
                    style={{height: `${absentData[index]}%`}}
                  ></div>
                  {day === 'Wed' && (
                    <div className={styles.percentLabel}>95%<div className={styles.percentSubLabel}>Present</div></div>
                  )}
                </div>
              </div>
              <div className={styles.dayLabel}>{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;
