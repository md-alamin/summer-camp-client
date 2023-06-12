import React from 'react';
import { FaEdit } from 'react-icons/fa';

const AllClassTable = ({ item, idx, _id }) => {
	const { name, price, image, availableSeats, instructor, email, status } =
		item;
	return (
		<tbody>
			<tr>
				<th>{idx + 1}</th>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={image} alt="Class image" />
							</div>
						</div>
						<div>{name}</div>
					</div>
				</td>
				<td>{instructor}</td>
				<td>{email}</td>
				<td>{availableSeats}</td>
				<td>$ {price}</td>
				{status === 'pending' ? (
					<td>
						<button className="btn btn-xs btn-warning py-1">Pending</button>
					</td>
				) : status === 'approved' ? (
					<td>
						<div className="btn btn-xs btn-success py-1 cursor-default">
							Approved
						</div>
					</td>
				) : status === 'denied' ? (
					<td>
						<div className="btn btn-xs btn-error py-1 cursor-default">
							Denied
						</div>
					</td>
				) : null}
				<td className="text-center mx-auto">
					<button>
						<FaEdit></FaEdit>
					</button>
				</td>
			</tr>
		</tbody>
	);
};

export default AllClassTable;
