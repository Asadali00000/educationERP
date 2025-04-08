import React from 'react';
import styles from '../styles/calender.module.css';

const Calendar = ({ month }:{month:string}) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentWeek = [19, 20, 21, 22, 23, 24, 25];

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button className={styles.navBtn}>◀</button>
        <h3>{month}</h3>
        <button className={styles.navBtn}>▶</button>
      </div>

      <div className={styles.days}>
        {days.map(day => (
          <div key={day} className={styles.dayName}>{day}</div>
        ))}
      </div>

      <div className={styles.dates}>
        {currentWeek.map((date) => (
          <div
            key={date}
            className={`${styles.date} ${date === 22 ? styles.active : ''}`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
