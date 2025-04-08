"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu, selectMobileMenuOpen } from '../redux/features/navigationSlice';
import { FaSearch, FaBell } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';
import styles from '../styles/TopBar.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  const dispatch = useDispatch();
  const showMobileMenu = useSelector(selectMobileMenuOpen);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    dispatch(toggleMobileMenu());
  };

  const toggleMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
  };

	return (
		<div className={styles.topBarContainer}>
			<div className={styles.topBar}>
			<div className={styles.topLeftNavBarTitle}>
					smart
					<span>ERP</span>
				</div>
				{/* Left: Hamburger */}

				<button
          className={styles.menuButton}
          onClick={handleToggleMobileMenu}
          aria-label="Toggle menu"
        >
					<FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} />
				</button>

				{/* Middle: Search input */}
				<div className={styles.searchContainer}>
					<FaSearch className={styles.searchIcon} />
					<input
						type="text"
						placeholder="Search"
						className={styles.searchInput}
					/>
				</div>

				{/* Smart ERP label */}
				<div className={styles.firstContainer}>
					smart
					<span>ERP</span>
				</div>

				{/* Right section (dots for mobile, full for desktop) */}
				<div className={styles.rightSection}>
					<div className={styles.desktopIcons}>
						<div className={styles.iconContainer}>
							<BsChatDotsFill className={styles.chatIcon} />
						</div>
						<div className={styles.iconContainer}>
							<FaBell className={styles.bellIcon} />
						</div>
						<div className={styles.userSection}>
							<div className={styles.userInfo}>
								<span className={styles.userName}>Linda Adora</span>
								<span className={styles.userRole}>Admin</span>
							</div>
							<div className={styles.avatarContainer}>
								<Image
									src="/profileImage.png"
									alt="User avatar"
									className={styles.avatar}
									width={40}
									height={40}
								/>
							</div>
						</div>
					</div>

					{/* Three dots button (mobile) */}
					<div className={styles.moreMenuWrapper}>
						<button
							className={styles.moreMenuButton}
							onClick={toggleMoreMenu}
							aria-label="More options"
						>
							&#8942;
						</button>
						{showMoreMenu && (
							<div className={styles.moreDropdown}>
								<div>Messages</div>
								<div>Notifications</div>
								<div>Profile</div>
								<div>Settings</div>
								<div>Log out</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
