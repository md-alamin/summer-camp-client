import React, { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
	const location = useLocation();
	const homePage = location.pathname === '/';

	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<div className={`px-10 ${isDarkMode && homePage ? 'bg-black' : ''}`}>
			<Header></Header>
			<Outlet></Outlet>
			<Footer isDarkMode={isDarkMode && homePage ? isDarkMode : false}></Footer>
		</div>
	);
};

export default Main;
