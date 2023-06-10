import React from 'react';
import useCart from '../../../hooks/useCart';
import Table from './Table';

const MySelectedClasses = () => {
	const [cart] = useCart();
	console.log(cart);
	const total = cart.reduce((sum, item) => item.price + sum, 0);
	return (
		<div>
			<h1 className="text-center text-5xl font-bold">Checkout your cart!</h1>
			<div className="flex justify-between items-center pt-4">
				<h4 className="text-3xl">Total Classes: {cart.length}</h4>
				<h4 className="text-3xl">Total Price: ${total}</h4>
				<button className="btn bg-red-600 hover:bg-red-600 hover:shadow-lg text-white px-6">
					Pay
				</button>
			</div>
			<div className="overflow-x-auto">
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Class Name</th>
							<th>Number of students</th>
							<th>Available Seats</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					{cart.map((item, idx) => (
						<Table key={idx} item={item} idx={idx}></Table>
					))}
				</table>
			</div>
		</div>
	);
};

export default MySelectedClasses;
