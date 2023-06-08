import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
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
]);
