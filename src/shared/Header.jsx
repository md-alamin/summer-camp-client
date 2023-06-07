import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
				<NavLink to="/login">Login</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<GiHamburgerMenu></GiHamburgerMenu>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navItems}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navItems}</ul>
			</div>
			<div className="navbar-end">
				<label className="swap swap-rotate">
					{/* this hidden checkbox controls the state */}
					<input type="checkbox" />

					{/* sun icon */}
					<FaSun className="swap-on"></FaSun>

					{/* moon icon */}
					<FaMoon className="swap-off"></FaMoon>
				</label>
			</div>
		</div>
	);
};

export default Header;
