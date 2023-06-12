import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const UsersTable = ({ idx, user, refetch }) => {
	const token = localStorage.getItem('access-token');

	const { _id, name, role } = user;
	const handleAction = (id, myState) => {
		axios
			.patch(
				`${import.meta.env.VITE_SERVER_LINK}/users/${
					myState ? 'make-admin' : 'make-instructor'
				}/${id}`,
				token,
				{
					headers: { authorization: `Bearer ${token}` },
				}
			)
			.then((response) => {
				if (response.data.modifiedCount) {
					refetch();
					Swal.fire({
						icon: 'success',
						title: `${name} is now ${myState ? 'Admin' : 'Instructor'}`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<tbody>
			{/* row 1 */}
			<tr>
				<th>{idx + 1}</th>
				<td>{name}</td>
				<td>{role}</td>
				<th className="flex justify-center gap-4">
					<button
						onClick={() => handleAction(_id, true)}
						className="btn btn-xs bg-blue-600 text-white hover:bg-gray-300 hover:text-blue-600"
						disabled={role === 'Admin' ? true : false}
					>
						Admin
					</button>
					<button
						onClick={() => handleAction(_id, false)}
						disabled={role === 'Instructor' ? true : false}
						className="btn btn-xs bg-blue-600 text-white hover:bg-gray-300 hover:text-blue-600"
					>
						Instructor
					</button>
				</th>
			</tr>
		</tbody>
	);
};

export default UsersTable;
