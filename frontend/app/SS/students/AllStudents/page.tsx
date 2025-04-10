// pages/students.js
"use client"
import { useState } from 'react';
import styles from '../../../styles/studentsList.module.css' // We can reuse the same CSS
import { Search, Filter, Plus, Edit, Trash, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StudentsList() {
  const router = useRouter();
	interface Student {
		id: number;
		firstName: string;
		lastName: string;
		email: string;
		grade: number;
		section: string;
		studentId: string;
		dateOfBirth: string; // You can use `Date` if you're converting it later
		gender: 'MALE' | 'FEMALE' | string;
		mobile: string;
		city: string;
		state: string;
	}
// will setStudent when api hit later
  const [students] = useState<Student[]>([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.dddsdss.edu',
      grade: 9,
      section: 'A',
      studentId: 'STU-9A-101',
      dateOfBirth: '2010-05-15',
      gender: 'MALE',
      mobile: '(555) 123-4567',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 2,
      firstName: 'Emma',
      lastName: 'Johnson',
      email: 'emma.johnson@.edu',
      grade: 10,
      section: 'B',
      studentId: 'STU-10B-102',
      dateOfBirth: '2009-07-22',
      gender: 'FEMALE',
      mobile: '(555) 234-5678',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Williams',
      email: 'michael. @schoolhigh.edu',
      grade: 8,
      section: 'C',
      studentId: 'STU-8C-103',
      dateOfBirth: '2011-03-10',
      gender: 'MALE',
      mobile: '(555) 345-6789',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 4,
      firstName: 'Sophia',
      lastName: 'Brown',
      email: 'sophia. @schoolhigh.edu',
      grade: 11,
      section: 'A',
      studentId: 'STU-11A-104',
      dateOfBirth: '2008-11-30',
      gender: 'FEMALE',
      mobile: '(555) 456-7890',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 5,
      firstName: 'James',
      lastName: 'Garcia',
      email: 'james. @schoolhigh.edu',
      grade: 7,
      section: 'B',
      studentId: 'STU-7B-105',
      dateOfBirth: '2012-09-05',
      gender: 'MALE',
      mobile: '(555) 567-8901',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 6,
      firstName: 'Olivia',
      lastName: 'Miller',
      email: 'olivia. @schoolhigh.edu',
      grade: 12,
      section: 'A',
      studentId: 'STU-12A-106',
      dateOfBirth: '2007-01-25',
      gender: 'FEMALE',
      mobile: '(555) 678-9012',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 7,
      firstName: 'William',
      lastName: 'Davis',
      email: 'william. @schoolhigh.edu',
      grade: 10,
      section: 'C',
      studentId: 'STU-10C-107',
      dateOfBirth: '2009-04-18',
      gender: 'MALE',
      mobile: '(555) 789-0123',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 8,
      firstName: 'Ava',
      lastName: 'Rodriguez',
      email: 'ava. @schoolhigh.edu',
      grade: 9,
      section: 'B',
      studentId: 'STU-9B-108',
      dateOfBirth: '2010-12-03',
      gender: 'FEMALE',
      mobile: '(555) 890-1234',
      city: 'Springfield',
      state: 'IL'
    },
    {
      id: 9,
      firstName: 'Ethan',
      lastName: 'Martinez',
      email: 'ethan. @schoolhigh.edu',
      grade: 8,
      section: 'A',
      studentId: 'STU-8A-109',
      dateOfBirth: '2011-08-12',
      gender: 'MALE',
      mobile: '(555) 901-2345',
      city: 'Greenfield',
      state: 'IL'
    },
    {
      id: 10,
      firstName: 'Asad',
      lastName: 'Ansari',
      email: 'aa@gmail.com',
      grade: 2,
      section: 'A',
      studentId: 'STU-2A-110',
      dateOfBirth: '2017-12-17',
      gender: 'FEMALE',
      mobile: '9340333379',
      city: 'Bhopal',
      state: 'Madhya Pradesh'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pages = 17;

  function renderPagination() {
    const pageNumbers = [];
    // const visiblePages = 5;

    // Show first page, last page, and current page with neighbors
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

  // Format date of birth to be more readable
  const formatDate = (dateString : string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Get full name
  // const getFullName = (student:Student) => {
  //   return `${student.firstName} ${student.lastName}`;
  // };

  // Get grade with section
  const getGradeSection = (student:Student) => {
    return `Grade ${student.grade}-${student.section}`;
  };


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Students List</h1>
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder="Search by Name, or Subject" />
          </div>
          <button className={styles.filterButton}>
            <Filter size={16} />
          </button>
          <button className={styles.addButton}  onClick={()=>router.push('./AddStudent') }>
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
              <th>student Name</th>
              <th>School ID</th>
              <th>Class</th>
              <th>Phone Number</th>

              <th>Date of Birth</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className={styles.checkboxCell}>
                  <input type="checkbox" />
                </td>
                <td className={styles.nameCell}>
                  <div className={styles.studentInfo}>
                    <div className={styles.avatar}>
                      {student.firstName.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.studentName}>{student.firstName}</div>
                      <div className={styles.studentEmail}>{student.email}</div>
                    </div>
                  </div>
                </td>
                <td>{student.studentId}</td>
				<td>{getGradeSection(student)}</td>
                <td>{student.mobile}</td>
				<td>{formatDate(student.dateOfBirth)}</td>
                <td className={styles.addressCell}>  {`${student.city}, ${student.state}`}</td>
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
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        >
          &larr;
        </button>
        {renderPagination()}
        <button
          className={styles.paginationArrow}
          disabled={currentPage === pages}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pages))}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
