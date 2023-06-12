import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import { Link } from 'react-router-dom';

const Table = ({ item, idx }) => {
	const { className, price, availableSeats, numberOfStudents, _id } = item;
	const [, refetch] = useCart();
	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`${import.meta.env.VITE_SERVER_LINK}/cart/${id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount) {
							refetch();
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						}
					});
			}
		});
	};
	return (
		<tbody>
			<tr>
				<th>{idx + 1}</th>
				<td>{className}</td>
				<td>{numberOfStudents}</td>
				<td>{availableSeats}</td>
				<td>{price}</td>
				<th>
					<button
						onClick={() => handleDelete(_id)}
						className="btn btn-ghost p-2 text-red-600 bg-gray-500 bg-opacity-5"
					>
						<FaTrash></FaTrash>
					</button>
				</th>
				<td>
					<Link to={`/dashboard/payment?price=${price}&id=${_id}`}>
						<button className="btn bg-red-600 hover:bg-red-600 hover:shadow-lg text-white">
							Pay
						</button>
					</Link>
				</td>
			</tr>
		</tbody>
	);
};

export default Table;
