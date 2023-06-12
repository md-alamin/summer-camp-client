import React, { useState } from 'react';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const AllClassTable = ({ item, idx, _id, refetch }) => {
	const token = localStorage.getItem('access-token');

	const {
		name,
		price,
		image,
		availableSeats,
		instructor,
		email,
		status,
		feedback,
	} = item;

	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	const handleAction = (id, myState) => {
		axios
			.patch(
				`${import.meta.env.VITE_SERVER_LINK}/all-class-admin/${
					myState ? 'approved' : 'denied'
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
						title: `${name} class is now ${myState ? 'approved' : 'denied'}`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		axios
			.put(
				`${import.meta.env.VITE_SERVER_LINK}/all-class-admin/feedback/${_id}`,
				data,
				{
					headers: { authorization: `Bearer ${token}` },
				}
			)
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						icon: 'success',
						title: 'Feedback added',
						showConfirmButton: false,
						timer: 1500,
					});
				}
				onCloseModal();
				reset();
			});
	};
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
						<button className="btn btn-sm btn-warning py-1">Pending</button>
					</td>
				) : status === 'approved' ? (
					<td>
						<div className="btn btn-sm btn-success py-1 cursor-default">
							Approved
						</div>
					</td>
				) : status === 'denied' ? (
					<td>
						<div className="btn btn-sm btn-error py-1 cursor-default">
							Denied
						</div>
					</td>
				) : null}
				<td className="flex gap-1 items-center mt-3">
					<button
						disabled={status !== 'pending'}
						className="btn btn-xs btn-success py-1"
						onClick={() => handleAction(_id, true)}
					>
						Approve
					</button>
					<button
						onClick={() => handleAction(_id, false)}
						disabled={status !== 'pending'}
						className="btn btn-xs btn-error py-1"
					>
						Deny
					</button>
					<button
						disabled={!!feedback}
						onClick={onOpenModal}
						className="btn btn-xs btn-primary py-1"
					>
						Feedback
					</button>
					<Modal open={open} onClose={onCloseModal} center>
						<div className="container mx-auto p-8">
							<h2 className="text-2xl font-bold mb-4">Feedback</h2>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-4">
									<label
										htmlFor="feedback"
										className="text-gray-700 font-medium mb-2"
									>
										Your Feedback:
									</label>
									<textarea
										{...register('feedback', { required: true })}
										className="form-textarea mt-1 block w-full p-2 rounded shadow-md"
										rows="5"
									></textarea>
									{errors.feedback && (
										<span className="text-red-500">This field is required</span>
									)}
								</div>
								<div className="text-center">
									<button
										type="submit"
										className="btn btn-outline border-0 border-b-4 border-b-blue-700 hover:bg-blue-700 hover:border-b-blue-700"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</Modal>
				</td>
			</tr>
		</tbody>
	);
};

export default AllClassTable;
