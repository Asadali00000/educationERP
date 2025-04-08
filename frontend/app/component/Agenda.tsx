import React from 'react';
import styles from '../styles/agenda.module.css';

const Agenda = () => {
  const agendaItems = [
    {
      time: '08:00 am',
      title: 'Homeroom & Announcement',
      subtitle: 'All Grade',
      color: 'purple'
    },
    {
      time: '10:00 am',
      title: 'Math Review & Practice',
      subtitle: 'Grade 3-5',
      color: 'yellow'
    },
    {
      time: '10:30 am',
      title: 'Science Experiment & Discussion',
      subtitle: 'Grade 6-8',
      color: 'blue'
    }
  ];

  return (
    <div className={styles.agenda}>
      {agendaItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.agendaItem} ${styles[item.color]}`}
        >
          <div className={styles.time}>{item.time}</div>
          <div className={styles.details}>
            <div className={styles.subtitle}>{item.subtitle}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
