import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const ClassCard = ({ item }) => {
	const [disabled, setDisabled] = useState(false);
	const { name, image, price, availableSeats, numberOfStudents, _id } = item;
	const { user } = useContext(AuthContext);
	const token = localStorage.getItem('access-token');

	const navigate = useNavigate();
	const [, refetch] = useCart();

	const [isAdmin] = useAdmin();
	const [isInstructor] = useInstructor();

	console.log(isAdmin?.admin, isInstructor?.instructor);

	useEffect(() => {
		if (!availableSeats || isAdmin?.admin || isInstructor?.instructor) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [availableSeats, isAdmin?.admin, isInstructor?.instructor]);

	const handleSelect = () => {
		if (user) {
			const myClass = {
				classId: _id,
				email: user?.email,
				className: name,
				image,
				price,
				availableSeats,
				numberOfStudents,
				name: user?.displayName || user?.name,
			};
			fetch(`${import.meta.env.VITE_SERVER_LINK}/cart`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(myClass),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						refetch();
						Swal.fire({
							icon: 'success',
							title: 'Added to cart',
							showConfirmButton: false,
							timer: 1500,
						});
					} else if (data.error) {
						Swal.fire({
							icon: 'error',
							title: 'Duplicate class',
							text: 'The class already exists in your cart',
						});
					}
				})
				.catch((e) => {
					console.log('hello');
				});
		} else {
			Swal.fire({
				title: 'Login if you want to select class!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login!',
			}).then((result) => {
				if (result.isConfirmed) {
					navigate('/login');
				}
			});
		}
	};

	return (
		<div
			className={`card w-96 ${
				availableSeats ? 'bg-base-100' : 'bg-red-500'
			} shadow-xl`}
		>
			<figure className="px-10 pt-10">
				<img src={image} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
			</div>
			<div className="card-body">
				<div className=" flex justify-between items-center">
					<p>Price: ${price}</p>
					<button
						className={`btn btn-outline border-0 border-b-4 ${
							disabled
								? 'border-b-white pointer-events-none'
								: 'border-b-blue-700'
						} hover:bg-blue-700 hover:border-b-blue-700`}
						onClick={handleSelect}
					>
						{disabled ? 'Not Available' : 'Select'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClassCard;
