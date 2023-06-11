import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import axios from 'axios';

const MyClassInstructor = () => {
	const [classes, setClasses] = useState([]);
	const { user } = useContext(AuthContext);

	const token = localStorage.getItem('access-token');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios(
					`${import.meta.env.VITE_SERVER_LINK}/class/${user?.email}`,
					{
						headers: {
							authorization: `Bearer ${token}`,
						},
					}
				);
				setClasses(response.data);
			} catch (e) {
				console.error(e);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1 className="text-center text-5xl font-bold">My Classes</h1>
			{classes.length}
		</div>
	);
};

export default MyClassInstructor;
