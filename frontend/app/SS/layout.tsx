"use client"
import React from 'react';
import '../globals.css'; // global styles here
import TopBar from '../component/TopBar';
import SideBar from '../component/SideBar';


export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
			<TopBar/>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        <SideBar />
        <main className="flex-1 min-w-0">{children}</main>
      </div>



			</body>
		</html>
	);
}

