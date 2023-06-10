import React from 'react';
import useCart from '../../../hooks/useCart';

const MySelectedClasses = () => {
	const [cart] = useCart();
	return (
		<div>
			<h1 className="text-center text-5xl font-bold">Checkout your cart!</h1>
			<div>
				<h4 className="text-3xl">{cart.length}</h4>
			</div>
		</div>
	);
};

export default MySelectedClasses;
