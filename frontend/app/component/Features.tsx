"use client"
import React, { useEffect } from 'react'
import styles from '../styles/features.module.css'
import Image from 'next/image'

function Features() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add(styles.visible);
				}
				else {
					entry.target.classList.remove(styles.visible);
				}
			});
		}, {
			threshold: 0.1,
			rootMargin: '-10px'
		});

		const featureBoxes = document.querySelectorAll(`.${styles.featureBox}`);
		featureBoxes.forEach(box => observer.observe(box));

		return () => {
			featureBoxes.forEach(box => observer.unobserve(box));
		};

	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.topHeading}>
				<div className={styles.contentContainer}>
					<h1>
						Powerful Features for Modern Education
					</h1>
					<p>
						Everything you need to manage your educational institution efficiently
					</p>
				</div>
			</div>
			<div>
				<div className={styles.featureBox}>
					<div>
						<h2 className={styles.featureHeading}>
							Student Management
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti nisi cum impedit. Sit quae fuga omnis nam ea quaerat illo quia veniam blanditiis. Vitae iusto explicabo quas in quod!
						</p>
					</div>
					<div className={styles.featureImage}>
						<Image src="/studentManagement.png" alt="Educational platform interface" width={500} height={500} />
					</div>
				</div>
				<div className={styles.featureBox}>
					<div className={styles.featureImage}>
						<Image src="/studentManagement.png" alt="Educational platform interface" width={500} height={500} />
					</div>
					<div>
						<h2 className={styles.featureHeading}>
							Student Management
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti nisi cum impedit. Sit quae fuga omnis nam ea quaerat illo quia veniam blanditiis. Vitae iusto explicabo quas in quod!
						</p>
					</div>
				</div>

				<div className={styles.featureBox}>
					<div>
						<h2 className={styles.featureHeading}>
							Student Management
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti nisi cum impedit. Sit quae fuga omnis nam ea quaerat illo quia veniam blanditiis. Vitae iusto explicabo quas in quod!
						</p>
					</div>
					<div className={styles.featureImage}>
						<Image src="/studentManagement.png" alt="Educational platform interface" width={500} height={500} />
					</div>
				</div>
				<div className={styles.featureBox}>
					<div className={styles.featureImage}>
						<Image src="/studentManagement.png" alt="Educational platform interface" width={500} height={500} />
					</div>
					<div>
						<h2 className={styles.featureHeading}>
							Student Management
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti nisi cum impedit. Sit quae fuga omnis nam ea quaerat illo quia veniam blanditiis. Vitae iusto explicabo quas in quod!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features
