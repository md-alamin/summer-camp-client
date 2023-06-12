import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProviders';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddClass = () => {
	const token = localStorage.getItem('access-token');
	const { user } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.status = 'pending';
		data.numberOfStudents = 0;
		data.price = parseFloat(data.price);
		data.availableSeats = parseFloat(data.availableSeats);
		console.log(data);

		axios
			.post(`${import.meta.env.VITE_SERVER_LINK}/allClass`, data, {
				headers: { authorization: `Bearer ${token}` },
			})
			.then((response) => {
				if (response.data.insertedId) {
					Swal.fire({
						icon: 'success',
						title: 'Submitted for review',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<div>
			<h1 className="text-center text-5xl font-bold">Add Class</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex justify-center py-4"
			>
				<div className="w-1/2">
					<div className="grid grid-cols-2 gap-6">
						<div className="my-4 shadow-md">
							<label className="text-sm font-medium text-gray-700 block">
								Class Name:
							</label>
							<input
								type="text"
								placeholder="Enter class name"
								{...register('className', { required: true })}
								className="form-input p-2 mt-1"
							/>
							{errors.className && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>
						<div className="my-4 shadow-md">
							<label className="text-sm font-medium text-gray-700 block">
								Instructor:
							</label>
							<input
								type="text"
								placeholder="Enter instructor name"
								defaultValue={user?.displayName}
								{...register('instructor', { required: true })}
								className="form-input p-2 mt-1"
							/>
							{errors.instructor && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>
						<div className="my-4 shadow-md">
							<label className="text-sm font-medium text-gray-700 block">
								Image URL:
							</label>
							<input
								type="text"
								placeholder="Enter image URL"
								{...register('imageUrl', { required: true })}
								className="form-input p-2 mt-1"
							/>
							{errors.imageUrl && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>
						<div className="my-4 shadow-md">
							<label className="text-sm font-medium text-gray-700 block">
								Email:
							</label>
							<input
								type="email"
								placeholder="Enter email"
								defaultValue={user?.email}
								{...register('email', { required: true })}
								className="form-input p-2 mt-1"
							/>
							{errors.email && (
								<span className="text-red-500">This field is required</span>
							)}
						</div>
						<div className="my-4 shadow-md">
							<label className="text-sm font-medium text-gray-700 block">
								Available Seats:
							</label>
							<input
								type="text"
								placeholder="Enter available seats"
								{...register('availableSeats', {
									required: true,
									pattern: {
										value: /^\d+$/,
										message: 'Please enter a valid number',
									},
								})}
								className="form-input p-2 mt-1"
							/>
							{errors.availableSeats && (
								<span className="text-red-500">
									Please enter a valid number of available seats
								</span>
							)}
						</div>
						<div className="my-4 shadow-md">
							<label className="text-sm font-medium text-gray-700 block">
								Price:
							</label>
							<input
								type="text"
								placeholder="Enter price"
								{...register('price', {
									required: true,
									pattern: {
										value: /^\d+$/,
										message: 'Please enter a valid number',
									},
								})}
								className="form-input p-2 mt-1"
							/>
							{errors.price && (
								<span className="text-red-500">Please enter a valid price</span>
							)}
						</div>
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							className="btn btn-outline border-0 border-b-4 border-b-blue-700 hover:bg-blue-700 hover:border-b-blue-700"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddClass;
