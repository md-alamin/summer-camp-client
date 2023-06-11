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
			<div className="mt-4 flex justify-around items-center pt-4">
				<h4 className="text-3xl">Total Classes: {cart.length}</h4>
				<h4 className="text-3xl">Total Price: ${total}</h4>
			</div>
			{cart.length > 0 ? (
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
								<th></th>
							</tr>
						</thead>
						{cart.map((item, idx) => (
							<Table key={item._id} item={item} idx={idx}></Table>
						))}
					</table>
				</div>
			) : (
				<div className="h-[40vh] flex justify-center items-center text-3xl">
					No Classes added to Cart
				</div>
			)}
		</div>
	);
};

export default MySelectedClasses;
