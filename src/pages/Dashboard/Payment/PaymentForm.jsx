import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const PaymentForm = ({ price }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const token = localStorage.getItem('access-token');

	useEffect(() => {
		fetch(`${import.meta.env.VITE_SERVER_LINK}/create-payment-intent`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ price }),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price, token]);
	console.log(clientSecret);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			console.log('error', error);
			setCardError(error.message);
		} else {
			setCardError('');
			console.log(paymentMethod);
		}
	};

	return (
		<>
			<form className="w-1/2 mx-auto mt-20 text-center" onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className="mt-10 btn btn-outline border-0 border-b-4 border-b-blue-700 hover:bg-blue-700 hover:border-b-blue-700"
					type="submit"
					disabled={!stripe}
				>
					Pay
				</button>
			</form>
			{cardError && (
				<p className="text-red-500 text-center mt-4 font-bold">{cardError}</p>
			)}
		</>
	);
};

export default PaymentForm;
