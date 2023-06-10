import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const Dashboard = () => {
	const { logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogOut = () => {
		logOut().then(Swal.fire('Successfully logged out!'));
		navigate('/');
	};

	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center bg-base-200 text-base-content">
				{/* <!-- Page content here --> */}
				<Outlet></Outlet>
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 h-full  bg-blue-600 text-white">
					{/* <!-- Sidebar content here --> */}
					<li>
						<NavLink to="my-cart">My Selected Classes</NavLink>
					</li>
					<li>
						<a>My Enrolled Classes</a>
					</li>
					<li>
						<a>Payment History</a>
					</li>
					<div className="divider h-1 rounded-xl bg-white"></div>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li onClick={handleLogOut}>
						<Link>Logout</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;