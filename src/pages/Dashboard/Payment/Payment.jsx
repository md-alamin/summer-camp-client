import React from 'react';
import PaymentForm from './PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const price = parseFloat(parseFloat(queryParams.get('price')).toFixed(2));
	const id = queryParams.get('id');
	return (
		<div>
			<h1 className="text-center text-5xl font-bold mt-10">This is payment</h1>
			<h1 className="text-center text-5xl text-red-500 font-bold mt-10">
				Could not finish this
			</h1>
			{/* <Elements stripe={stripePromise}>
				<PaymentForm price={price}></PaymentForm>
			</Elements> */}
		</div>
	);
};

export default Payment;
