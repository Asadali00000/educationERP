"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectMobileMenuOpen } from '../redux/features/navigationSlice';
import styles from '../styles/sideBar.module.css';

import {
  FaBook, FaChalkboardTeacher, FaClipboardList, FaCog, FaMoneyBillWave,
  FaRegCalendarAlt, FaRegCommentDots, FaSignOutAlt, FaUserCircle, FaUserGraduate,
} from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const SidebarMenu = () => {
  const showMobileMenu = useSelector(selectMobileMenuOpen);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', icon: <MdOutlineDashboard className={styles.icon} />, path: '/SS/dashboard' },
    { label: 'Teachers', icon: <FaChalkboardTeacher className={styles.icon} />, path: '/SS/teachers' },
    { label: 'Students', icon: <FaUserGraduate className={styles.icon} />, path: '/students' },
    { label: 'Attendance', icon: <FaClipboardList className={styles.icon} />, path: '/attendance' },
    { label: 'Finance', icon: <FaMoneyBillWave className={styles.icon} />, path: '/finance' },
    { label: 'Notice', icon: <HiOutlineSpeakerphone className={styles.icon} />, path: '/notice' },
    { label: 'Calendar', icon: <FaRegCalendarAlt className={styles.icon} />, path: '/calendar' },
    { label: 'Library', icon: <FaBook className={styles.icon} />, path: '/library' },
    { label: 'Message', icon: <FaRegCommentDots className={styles.icon} />, path: '/message' },
  ];

  const otherItems = [
    { label: 'Profile', icon: <FaUserCircle className={styles.icon} />, path: '/profile' },
    { label: 'Setting', icon: <FaCog className={styles.icon} />, path: '/setting' },
    { label: 'Log out', icon: <FaSignOutAlt className={styles.icon} />, path: '/logout' },
  ];

  return (
    <div className={`${styles.sidebar} ${showMobileMenu ? styles.sidebarMobile : ''}`}>
      {menuItems.map(item => (
        <Link key={item.label} href={item.path}>
          <div className={`${styles.menuItem} ${pathname === item.path ? styles.active : ''}`}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}

      <div className={styles.sectionTitle}>OTHER</div>

      {otherItems.map(item => (
        <Link key={item.label} href={item.path}>
          <div className={`${styles.menuItem} ${pathname === item.path ? styles.active : ''}`}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;
