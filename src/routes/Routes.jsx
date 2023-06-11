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
		children: [
			{
				path: 'my-cart',
				element: <MySelectedClasses></MySelectedClasses>,
			},
			{
				path: 'all-users-admin',
				element: <AllUsers></AllUsers>,
			},
		],
	},
]);
