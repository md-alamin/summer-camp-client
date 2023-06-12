import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Dashboard from '../layout/Dashboard';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MySelectedClasses from '../pages/Dashboard/MySelectedClasses/MySelectedClasses';
import PrivateRoute from './PrivateRoute';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import MyClassInstructor from '../pages/Dashboard/MyClassInstructor/MyClassInstructor';
import AddClass from '../pages/Dashboard/AddClass/AddClass';
import AllClass from '../pages/Dashboard/AllClass/AllClass';
import AdminRoute from './AdminRoute';
import StudentRoute from './StudentRoute';
import InstructorRoute from './InstructorRoute';
import Payment from '../pages/Dashboard/Payment/Payment';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/instructors',
				element: <Instructors></Instructors>,
			},
			{
				path: '/classes',
				element: <Classes></Classes>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: 'my-cart',
				element: (
					<StudentRoute>
						<MySelectedClasses></MySelectedClasses>
					</StudentRoute>
				),
			},
			{
				path: 'payment',
				element: (
					<StudentRoute>
						<Payment></Payment>
					</StudentRoute>
				),
			},
			{
				path: 'all-users-admin',
				element: (
					<AdminRoute>
						<AllUsers></AllUsers>
					</AdminRoute>
				),
			},
			{
				path: 'my-class-instructor',
				element: (
					<InstructorRoute>
						<MyClassInstructor></MyClassInstructor>
					</InstructorRoute>
				),
			},
			{
				path: 'add-class',
				element: (
					<InstructorRoute>
						<AddClass></AddClass>
					</InstructorRoute>
				),
			},
			{
				path: 'all-class-admin',
				element: (
					<AdminRoute>
						<AllClass></AllClass>
					</AdminRoute>
				),
			},
		],
	},
]);
