import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import axios from 'axios';
import MyClassTable from './MyClassTable';

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
			{classes.length > 0 ? (
				<div className="overflow-x-auto py-6">
					<table className="table text-center">
						<thead className="text-xl">
							<tr>
								<th>#</th>
								<th>Class Name</th>
								<th>Available Seats</th>
								<th>Enrolled Students</th>
								<th>Price</th>
								<th>Status</th>
								<th>Feedback</th>
								<th>Update</th>
							</tr>
						</thead>
						{classes.map((item, idx) => (
							<MyClassTable
								key={item._id}
								item={item}
								idx={idx}
								_id={item._id}
							></MyClassTable>
						))}
					</table>
				</div>
			) : (
				<div className="h-[40vh] flex justify-center items-center text-3xl">
					No Classes added to Cart
				</div>
			)}
		</div>
	);
};

export default MyClassInstructor;
