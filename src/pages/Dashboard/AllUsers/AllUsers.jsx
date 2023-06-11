import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UsersTable from './UsersTable';

const AllUsers = () => {
	const token = localStorage.getItem('access-token');

	const { refetch, data: users = [] } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/users`, {
				headers: {
					authorization: `bearer ${token}`,
				},
			});
			return res.json();
		},
	});
	return (
		<div>
			<h1 className="text-center text-5xl font-bold">All Users</h1>
			<div className="overflow-x-auto mt-4">
				<table className="table text-center">
					{/* head */}
					<thead className="text-2xl text-black">
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Job</th>
							<th>Actions</th>
						</tr>
					</thead>
					{users.map((user, idx) => (
						<UsersTable
							key={user._id}
							user={user}
							idx={idx}
							refetch={refetch}
						></UsersTable>
					))}
				</table>
			</div>
		</div>
	);
};

export default AllUsers;
