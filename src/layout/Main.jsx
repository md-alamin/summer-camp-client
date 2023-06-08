import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
	const location = useLocation();
	const homePage = location.pathname === '/';

	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	console.log(homePage, location.pathname);
	return (
		<div className={`px-10 ${isDarkMode && homePage ? 'bg-black' : ''}`}>
			<Header
				toggleTheme={toggleTheme}
				isDarkMode={isDarkMode && homePage ? isDarkMode : false}
			></Header>
			<Outlet isDarkMode={isDarkMode}></Outlet>
			<Footer isDarkMode={isDarkMode}></Footer>
		</div>
	);
};

export default Main;
