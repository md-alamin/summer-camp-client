import React, { useContext, useEffect, useState } from 'react';
import { FaCartPlus, FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import defaultImg from '../assets/defaultImg.png';
import logo from '../../public/logo.png';
import logo2 from '../../public/logo-2.png';
import useCart from '../hooks/useCart';
import useStudent from '../hooks/useStudent';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const [cart] = useCart();
	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();
	const [isStudent] = useStudent();

	console.log(isAdmin?.admin, isInstructor?.instructor, isStudent?.student);

	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
	);

	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	useEffect(() => {
		localStorage.setItem('theme', theme);
		const myTheme = localStorage.getItem('theme');
		document.querySelector('html').setAttribute('data-theme', myTheme);
	}, [theme]);

	const handleLogOut = () => {
		logOut().then(Swal.fire('Successfully logged out!'));
	};

	const navItems = (
		<>
			<li>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/instructors"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Instructors
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/classes"
					className={({ isActive }) => (isActive ? 'active' : 'default')}
				>
					Classes
				</NavLink>
			</li>
			{user ? (
				<>
					<li>
						{isAdmin?.admin && (
							<NavLink to="/dashboard/all-users-admin">Dashboard</NavLink>
						)}
						{isStudent?.student && (
							<NavLink to="/dashboard/my-cart">
								Dashboard
								<div className="indicator">
									<FaCartPlus size={24}></FaCartPlus>
									<span className="badge indicator-item bg-transparent border-none pr-1">
										+{cart?.length || 0}
									</span>
								</div>
							</NavLink>
						)}
						{isInstructor?.instructor && (
							<NavLink to="/dashboard/my-class-instructor">Dashboard</NavLink>
						)}
					</li>
					<li onClick={handleLogOut}>
						<Link>Logout</Link>
					</li>
				</>
			) : (
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			)}
		</>
	);
	return (
		<div
			className={`navbar bg-base-100
			 sticky top-0 z-10`}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<GiHamburgerMenu></GiHamburgerMenu>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
					>
						{navItems}
					</ul>
				</div>
				<a>
					{theme === 'light' ? (
						<img className="h-16" src={logo} alt="" />
					) : (
						<img className="h-16" src={logo2} alt="" />
					)}
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navItems}</ul>
			</div>
			<div className="navbar-end flex mr-5">
				{user ? (
					user.photoURL ? (
						<img
							className="mr-5 h-10 w-10 rounded-full"
							src={user.photoURL}
							alt=""
						/>
					) : (
						<img
							className="mr-5 h-10 w-10 rounded-full"
							src={defaultImg}
							alt=""
						/>
					)
				) : (
					<></>
				)}
				<label className="swap swap-rotate">
					{/* this hidden checkbox controls the state */}
					<input
						onChange={handleToggle}
						checked={theme === 'light' ? false : true}
						type="checkbox"
					/>

					{/* sun icon */}
					<FaSun size={20} className="swap-on"></FaSun>

					{/* moon icon */}
					<FaMoon size={20} className="swap-off"></FaMoon>
				</label>
			</div>
		</div>
	);
};

export default Header;
