import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};
	console.log(isDarkMode);
	return (
		<div className={`px-10 ${isDarkMode ? 'bg-black' : ''}`}>
			<Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Header>
			<Outlet isDarkMode={isDarkMode}></Outlet>
			<Footer isDarkMode={isDarkMode}></Footer>
		</div>
	);
};

export default Main;
