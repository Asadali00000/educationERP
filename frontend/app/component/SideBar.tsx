"use client";
import React, { useState } from 'react';
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
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const SidebarMenu = () => {
		const router = useRouter();
  const showMobileMenu = useSelector(selectMobileMenuOpen);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', icon: <MdOutlineDashboard />, path: '/SS/dashboard' },
    { label: 'Teachers', icon: <FaChalkboardTeacher />, path: '/SS/teachers' ,
			children: [
        { label: 'All Teachers', path: '/SS/teachers/AllTeachers' },
        { label: 'Add Teacher', path: '/SS/teachers/AddTeacher' },

      ]
		},
    {
      label: 'Students', icon: <FaUserGraduate />, path: '/students',
      children: [
        { label: 'All Students', path: '/SS/students/AllStudents' },
        { label: 'Add Students', path: '/SS/students/AddStudent' },
        { label: 'Performance', path: '/SS/students/performance' },
        { label: 'Classes', path: '/SS/students/classes' },
        { label: 'Discipline', path: '/SS/students/discipline' },
      ]
    },
    { label: 'Attendance', icon: <FaClipboardList />, path: '/attendance' },
    {
      label: 'Finance', icon: <FaMoneyBillWave />, path: '/finance',
      children: [
        { label: 'Fees Collection', path: '/finance/fees' },
        { label: 'School Expenses', path: '/finance/expenses' },
      ]
    },
    { label: 'Notice', icon: <HiOutlineSpeakerphone />, path: '/notice' },
    { label: 'Calendar', icon: <FaRegCalendarAlt />, path: '/calendar' },
    { label: 'Library', icon: <FaBook />, path: '/library' },
    { label: 'Message', icon: <FaRegCommentDots />, path: '/message' },
  ];

  const otherItems = [
    { label: 'Profile', icon: <FaUserCircle className={styles.icon} />, path: '/profile' },
    { label: 'Setting', icon: <FaCog className={styles.icon} />, path: '/setting' },
    { label: 'Log out', icon: <FaSignOutAlt className={styles.icon} />, path: '/logout' },
  ];

  return (
    <div className={`${styles.sidebar} ${showMobileMenu ? styles.sidebarMobile : ''}`}>
      {menuItems.map(item => (
        <div key={item.label}>
          <div
            className={`${styles.menuItem} ${pathname.includes(item.path) || expanded === item.label ? styles.dropdownActive : ''}`}
            onClick={() => item.children ? (item.label === expanded ? setExpanded(null) : setExpanded(item.label)) :((() => {
							setExpanded(null);
						  router.push('/SS/dashboard');
						})())}
          >
            <span className={styles.iconWrapper}>{item.icon}</span>
            <span>{item.label}</span>
            {item.children && (
              <span className={styles.arrow}>
                {expanded === item.label ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            )}
          </div>

          {item.children && expanded === item.label && (
            <div className={styles.subMenu}>
              {item.children.map(child => (
                <Link
                  key={child.label}
                  href={child.path}
                  className={`${styles.subMenuItem} ${pathname === child.path ? styles.activeSubItem : ''}`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className={styles.sectionTitle}>OTHER</div>

      {otherItems.map(item => (
        <Link key={item.label} href={item.path}>
          <div className={`${styles.menuItem}`}>
            <span className={styles.iconWrapper}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarMenu;

