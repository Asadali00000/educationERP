'use client';
import { JSX, useState } from 'react';
import styles from '../../../styles/teachersList.module.css';
import { Search, Filter, Plus, Edit, Trash, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Teacher {
  id: number;
  name: string;
  email: string;
  schoolId: string;
  subject: string;
  classes: string;
  phone: string;
  address: string;
}

export default function TeachersList() {
  const router = useRouter();
// NEED TO add setTeacher i remove because want to deploy
  const [teachers] = useState<Teacher[]>([
    {
      id: 1,
      name: 'Ms. Elizabeth Johnson',
      email: 'johnson@schoolhigh.edu',
      schoolId: 'SLJ-ENG-123',
      subject: 'English Literature',
      classes: '9A, 10B',
      phone: '(555) 101-0101',
      address: '123 Elm St, Springfield, IL',
    },
    {
      id: 2,
      name: 'Mr. Carlos Garcia',
      email: 'garcia@schoolhigh.edu',
      schoolId: 'GRC-HIS-456',
      subject: 'History',
      classes: '8C, 11A',
      phone: '(555) 101-0102',
      address: '456 Oak Ave, Springfield, IL',
    },
    {
      id: 3,
      name: 'Ms. Angela Jackson',
      email: 'jackson@schoolhigh.edu',
      schoolId: 'JCK-MATH-789',
      subject: 'Math',
      classes: '7A, 12 AP Calculus',
      phone: '(555) 101-0103',
      address: '789 Pine Rd, Springfield, IL',
    },
    {
      id: 4,
      name: 'Mr. Luis Rodrigo',
      email: 'rodrigo@schoolhigh.edu',
      schoolId: 'ROD-DRA-012',
      subject: 'Drama',
      classes: 'Drama Club',
      phone: '(555) 101-0104',
      address: '012 Maple Dr, Springfield, IL',
    },
    {
      id: 5,
      name: 'Ms. Susan Chen',
      email: 'chen@schoolhigh.edu',
      schoolId: 'CHN-SCI-345',
      subject: 'Science',
      classes: '8B, 9B Biology',
      phone: '(555) 101-0105',
      address: '345 Birch Ln, Springfield, IL',
    },
    {
      id: 6,
      name: 'Mr. William Blake',
      email: 'blake@schoolhigh.edu',
      schoolId: 'THM-HIS-678',
      subject: 'History',
      classes: '10A, 11 AP World History',
      phone: '(555) 101-0106',
      address: '678 Cedar Blvd, Springfield, IL',
    },
    {
      id: 7,
      name: 'Ms. Emily Lee',
      email: 'lee@schoolhigh.edu',
      schoolId: 'LEE-ENG-901',
      subject: 'English',
      classes: '7B, 8A',
      phone: '(555) 101-0107',
      address: '901 Walnut St, Springfield, IL',
    },
    {
      id: 8,
      name: 'Mr. Fernando Davis',
      email: 'davis@schoolhigh.edu',
      schoolId: 'HER-SPA-234',
      subject: 'Spanish',
      classes: 'Spanish I, Spanish II',
      phone: '(555) 101-0108',
      address: '234 Spruce Way, Springfield, IL',
    },
    {
      id: 9,
      name: 'Ms. Laura Lopez',
      email: 'lopez@schoolhigh.edu',
      schoolId: 'LOP-MATH-567',
      subject: 'Math',
      classes: '7C Pre-Algebra',
      phone: '(555) 101-0109',
      address: '567 Redwood Ct, Springfield, IL',
    },
    {
      id: 10,
      name: 'Mr. Daniel Kim',
      email: 'kim@schoolhigh.edu',
      schoolId: 'KIM-ART-890',
      subject: 'Art',
      classes: 'Art I, Art II',
      phone: '(555) 101-0110',
      address: '890 Fir St, Springfield, IL',
    },
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pages: number = 17;

  function renderPagination(): JSX.Element[] {
    const pageNumbers: (number | string)[] = [];

    for (let i = 1; i <= pages; i++) {
      if (
        i === 1 ||
        i === pages ||
        (i >= currentPage - 1 && i <= currentPage + 1) ||
        (currentPage <= 2 && i <= 4) ||
        (currentPage >= pages - 1 && i >= pages - 3)
      ) {
        pageNumbers.push(i);
      } else if (
        (pageNumbers[pageNumbers.length - 1] !== '...' && i < currentPage - 1) ||
        (pageNumbers[pageNumbers.length - 1] !== '...' && i > currentPage + 1)
      ) {
        pageNumbers.push('...');
      }
    }

    return pageNumbers.map((num, idx) => {
      if (num === '...') {
        return <span key={`ellipsis-${idx}`} className={styles.ellipsis}>...</span>;
      }

      return (
        <button
          key={num}
          className={`${styles.pageButton} ${currentPage === num ? styles.activePage : ''}`}
          onClick={() => setCurrentPage(num as number)}
        >
          {num}
        </button>
      );
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Teachers List</h1>
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder="Search by Name, or Subject" />
          </div>
          <button className={styles.filterButton}>
            <Filter size={16} />
          </button>
          <button className={styles.addButton} onClick={() => router.push('./AddTeacher')}>
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.checkboxCell}>
                <input type="checkbox" />
              </th>
              <th>Teacher Name</th>
              <th>School ID</th>
              <th>Subject</th>
              <th>Class(es)</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className={styles.checkboxCell}>
                  <input type="checkbox" />
                </td>
                <td className={styles.nameCell}>
                  <div className={styles.teacherInfo}>
                    <div className={styles.avatar}>
                      {teacher.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.teacherName}>{teacher.name}</div>
                      <div className={styles.teacherEmail}>{teacher.email}</div>
                    </div>
                  </div>
                </td>
                <td>{teacher.schoolId}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.classes}</td>
                <td>{teacher.phone}</td>
                <td className={styles.addressCell}>{teacher.address}</td>
                <td className={styles.actionCell}>
                  <button className={styles.actionButton}>
                    <Edit size={16} className={styles.editIcon} />
                  </button>
                  <button className={styles.actionButton}>
                    <Eye size={16} className={styles.viewIcon} />
                  </button>
                  <button className={styles.actionButton}>
                    <Trash size={16} className={styles.deleteIcon} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.paginationArrow}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          &larr;
        </button>
        {renderPagination()}
        <button
          className={styles.paginationArrow}
          disabled={currentPage === pages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages))}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
