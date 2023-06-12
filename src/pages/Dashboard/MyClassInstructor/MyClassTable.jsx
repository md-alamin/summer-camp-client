import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyClassTable = ({ item, idx, _id, refetch }) => {
	const [myClass, setMyClass] = useState([]);
	const token = localStorage.getItem('access-token');

	const { name, price, availableSeats, numberOfStudents, status, feedback } =
		item;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal(id) {
		setIsOpen(true);
		axios(`${import.meta.env.VITE_SERVER_LINK}/my-class/${id}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		}).then((res) => setMyClass(res.data));
	}

	const onSubmit = (data) => {
		data.price = parseFloat(data.price);
		data.availableSeats = parseFloat(data.availableSeats);
		console.log(data);

		axios
			.patch(`${import.meta.env.VITE_SERVER_LINK}/my-class/${_id}`, data, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res.data);
				closeModal();
				refetch();
				if (res.data.modifiedCount > 0) {
					Swal.fire({
						icon: 'success',
						title: 'Edited Successfully',
						showConfirmButton: false,
						timer: 1500,
					});
				} else {
					Swal.fire({
						icon: 'error',
						title: 'No Changes',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<>
			<tbody>
				<tr>
					<th>{idx + 1}</th>
					<td>{name}</td>
					<td>{availableSeats}</td>
					<td>{numberOfStudents}</td>
					<td>$ {price}</td>
					{status === 'pending' ? (
						<td className="btn btn-sm btn-warning cursor-default py-2">
							Pending
						</td>
					) : status === 'approved' ? (
						<td className="btn btn-sm btn-success cursor-default py-2">
							Approved
						</td>
					) : status === 'denied' ? (
						<td className="btn btn-sm btn-error cursor-default py-2">Denied</td>
					) : null}
					<td>{feedback ? feedback : 'N/A'}</td>
					<td className="text-center mx-auto">
						<button
							onClick={() => {
								openModal(_id);
							}}
						>
							<FaEdit></FaEdit>
						</button>
					</td>
				</tr>
			</tbody>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 w-2/3 mx-auto overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-center text-lg font-medium leading-6 text-gray-900"
									>
										Edit Class
									</Dialog.Title>
									<div className="mt-2">
										<form
											onSubmit={handleSubmit(onSubmit)}
											className="flex justify-center py-4"
										>
											<div className="w-1/2">
												<p className="text-center text-red-500">
													<small>Please enter all fields to submit</small>
												</p>
												<div className="grid grid-cols-2 gap-6">
													<div className="my-4 shadow-md">
														<label className="text-sm font-medium text-gray-700 block">
															Class Name:
														</label>
														<input
															type="text"
															defaultValue={myClass?.name}
															placeholder="Enter class name"
															{...register('className', { required: true })}
															className="form-input w-full p-2 mt-1"
														/>
														{errors.className && (
															<span className="text-red-500">
																This field is required
															</span>
														)}
													</div>
													<div className="my-4 shadow-md">
														<label className="text-sm font-medium text-gray-700 block">
															Instructor:
														</label>
														<input
															type="text"
															placeholder="Enter instructor name"
															defaultValue={myClass?.instructor}
															{...register('instructor', { required: true })}
															className="form-input w-full p-2 mt-1"
														/>
														{errors.instructor && (
															<span className="text-red-500">
																This field is required
															</span>
														)}
													</div>
													<div className="my-4 shadow-md">
														<label className="text-sm font-medium text-gray-700 block">
															Image URL:
														</label>
														<input
															type="text"
															defaultValue={myClass?.image}
															placeholder="Enter image URL"
															{...register('image', { required: true })}
															className="form-input w-full p-2 mt-1"
														/>
														{errors.image && (
															<span className="text-red-500">
																This field is required
															</span>
														)}
													</div>
													<div className="my-4 shadow-md">
														<label className="text-sm font-medium text-gray-700 block">
															Email:
														</label>
														<input
															type="email"
															placeholder="Enter email"
															defaultValue={myClass?.email}
															{...register('email', { required: true })}
															className="form-input w-full p-2 mt-1"
														/>
														{errors.email && (
															<span className="text-red-500">
																This field is required
															</span>
														)}
													</div>
													<div className="my-4 shadow-md">
														<label className="text-sm font-medium text-gray-700 block">
															Available Seats:
														</label>
														<input
															type="text"
															defaultValue={myClass?.availableSeats}
															placeholder="Enter available seats"
															{...register('availableSeats', {
																required: true,
																pattern: {
																	value: /^\d+$/,
																	message: 'Please enter a valid number',
																},
															})}
															className="form-input w-full p-2 mt-1"
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
															defaultValue={myClass?.price}
															placeholder="Enter price"
															{...register('price', {
																required: true,
																pattern: {
																	value: /^\d+$/,
																	message: 'Please enter a valid number',
																},
															})}
															className="form-input w-full p-2 mt-1"
														/>
														{errors.price && (
															<span className="text-red-500">
																Please enter a valid price
															</span>
														)}
													</div>
												</div>
												<div className="flex justify-center gap-4">
													<button
														type="submit"
														className="btn btn-outline border-0 border-b-4 border-b-blue-700 hover:bg-blue-700 hover:border-b-blue-700"
													>
														Submit
													</button>
													<button
														type="button"
														className="btn btn-outline border-0 border-b-4 border-b-red-700 hover:bg-red-700 hover:border-b-red-700"
														onClick={closeModal}
													>
														Close
													</button>
												</div>
											</div>
										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default MyClassTable;
