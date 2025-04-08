import React from 'react';
import '../globals.css'; // global styles here
import SidebarMenu from '../component/SideBar';
import TopBar from '../component/TopBar';

export const metadata = {
	title: 'My App',
	description: 'A dashboard app',
};

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<TopBar />
				<div className="flex min-h-screen w-full overflow-x-hidden">
					<SidebarMenu />
					<main className="flex-1 min-w-0">
						{children}
					</main>
				</div>

			</body>
		</html>
	);
}
