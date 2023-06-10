import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Table = ({ item, idx }) => {
	const { className, price, availableSeats, numberOfStudents } = item;
	return (
		<tbody>
			<tr>
				<th>{idx + 1}</th>
				<td>{className}</td>
				<td>{numberOfStudents}</td>
				<td>{availableSeats}</td>
				<td>{price}</td>
				<th>
					<button className="btn btn-ghost text-red-600 bg-gray-500 bg-opacity-5">
						<FaTrash></FaTrash>
					</button>
				</th>
			</tr>
		</tbody>
	);
};

export default Table;
