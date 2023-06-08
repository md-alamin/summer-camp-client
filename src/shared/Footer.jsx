import React from 'react';
import logo from '../../public/logo.png';

const Footer = ({ isDarkMode }) => {
	return (
		<footer>
			<div
				className={`footer p-10 ${
					isDarkMode ? 'bg-black' : 'bg-base-200'
				}  text-base-content`}
			>
				<div className="text-center mx-auto">
					<img className="mx-auto" src={logo} alt="" />
					<p
						className={`text-center text-2xl font-semibold ${
							isDarkMode ? 'text-white' : ''
						}`}
					>
						Believe in us
						<br />
						Give your child a better future
					</p>
				</div>
				<div
					className={`text-center mx-auto ${isDarkMode ? 'text-white' : ''}`}
				>
					<span className="footer-title text-center w-full">Address</span>
					<p className="text-center w-full">
						869 Monroe Ave.
						<br />
						Elkhart, IN 46514
					</p>
				</div>
				<div
					className={`text-center mx-auto ${isDarkMode ? 'text-white' : ''}`}
				>
					<span className="footer-title">Company</span>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Jobs</a>
					<a className="link link-hover">Press kit</a>
				</div>
				<div
					className={`text-center mx-auto ${isDarkMode ? 'text-white' : ''}`}
				>
					<span className="footer-title">Legal</span>
					<a className="link link-hover">Terms of use</a>
					<a className="link link-hover">Privacy policy</a>
					<a className="link link-hover">Cookie policy</a>
				</div>
			</div>
			<div
				className={`footer footer-center p-4 ${
					isDarkMode ? 'text-white bg-black' : 'text-base-content'
				}`}
			>
				<div>
					<p>Copyright © 2023 - All right reserved by Radial Music Camp</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
