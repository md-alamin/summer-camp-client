import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import MyClassTable from './MyClassTable';
import { useQuery } from '@tanstack/react-query';

const MyClassInstructor = () => {
	const { user } = useContext(AuthContext);

	const token = localStorage.getItem('access-token');

	const { refetch, data: classes = [] } = useQuery({
		queryKey: ['my-class'],
		queryFn: async () => {
			const res = await fetch(
				`${import.meta.env.VITE_SERVER_LINK}/class/${user?.email}`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			return res.json();
		},
	});

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
					No Classes added
				</div>
			)}
		</div>
	);
};

export default MyClassInstructor;
