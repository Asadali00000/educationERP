// Dashboard.jsx
import React from 'react';
import styles from '../../styles/dashboard.module.css';
import StatCard from '../../component/StatCard';
import StudentDistribution from '../../component/StudentDistribution';
import AttendanceChart from '../../component/AttendanceChart';
import EarningsChart from '../../component/EarningsChart';
import Calendar from '../../component/Calendar';
import Agenda from '../../component/Agenda';
import Messages from '../../component/Messages';
// import OlympicStudents from '../../component/OlympicStudents';
// import CompetitionStats from '../../component/CompetitionStats';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.statsRow}>
        <StatCard
          value="124,684"
          label="Students"
          trend="+15%"
          color="purple"
        />
        <StatCard
          value="12,379"
          label="Teachers"
          trend="+3%"
          color="yellow"
        />
        <StatCard
          value="29,300"
          label="Staffs"
          trend="+2%"
          color="purple"
        />
        <StatCard
          value="95,800"
          label="Awards"
          trend="+5%"
          color="yellow"
        />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <div className={`${styles.panel} ${styles.invisible}`} >
            <div className={styles.panelHeader}>
              <h3>Students</h3>
              <button className={styles.moreBtn}>•••</button>
            </div>
            <StudentDistribution
              boys={45414}
              girls={40270}
              boysPercentage={47}
              girlsPercentage={53}
            />
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h3>Attendance</h3>
              <div className={styles.filterContainer}>
                <div className={styles.filter}>
                  <span>Weekly</span>
                  <span className={styles.dropdownArrow}>▼</span>
                </div>
                <div className={styles.filter}>
                  <span>Grade 3</span>
                  <span className={styles.dropdownArrow}>▼</span>
                </div>
              </div>
            </div>
            <AttendanceChart />
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h3>Earnings</h3>
              <button className={styles.moreBtn}>•••</button>
            </div>
            <EarningsChart />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.panel}>
            <Calendar month="September 2030" />
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h3>Agenda</h3>
              <button className={styles.moreBtn}>•••</button>
            </div>
            <Agenda />
          </div>

          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h3>Messages</h3>
              <button className={styles.viewAllBtn}>View All</button>
            </div>
            <Messages />
          </div>

          {/* <div className={styles.statsCard}>
            <OlympicStudents value="24,680" percentage="15" />
          </div>

          <div className={styles.statsCard}>
            <CompetitionStats value="3,000" percentage="9" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
