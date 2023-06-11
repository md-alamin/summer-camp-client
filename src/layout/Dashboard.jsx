import React from 'react';
import { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import useAdmin from '../hooks/useAdmin';
import useStudent from '../hooks/useStudent';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
	const { logOut } = useContext(AuthContext);
	const navigate = useNavigate();
	const [isAdmin] = useAdmin();
	const [isStudent] = useStudent();
	const [isInstructor] = useInstructor();

	const handleLogOut = () => {
		logOut().then(Swal.fire('Successfully logged out!'));
		navigate('/');
	};

	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex lg:block pt-10 flex-col items-center justify-center bg-base-200 text-base-content">
				{/* <!-- Page content here --> */}
				<div className="w-full px-4">
					<Outlet></Outlet>
				</div>
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

					{isAdmin.admin && (
						<>
							<li>
								<NavLink to="all-class-admin">All Classes</NavLink>
							</li>
							<li>
								<NavLink to="all-users-admin">All Users</NavLink>
							</li>
						</>
					)}
					{isStudent.student && (
						<>
							<li>
								<NavLink to="my-cart">My Selected Classes</NavLink>
							</li>
							<li>
								<a>My Enrolled Classes</a>
							</li>
							<li>
								<a>Payment History</a>
							</li>
						</>
					)}

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
