import React from 'react';
import errorImg from '../../assets/error.json';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'react-lottie';

const ErrorPage = () => {
	const { error } = useRouteError();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: errorImg,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div className="w-full mx-auto text-center">
			<Lottie options={defaultOptions} height={400} width={400} />
			<p className="text-2xl font-semibold md:text-3xl text-red-600 my-8">
				{error?.message}
			</p>
			<Link
				to="/"
				className="btn bg-blue-600 text-white border-none hover:bg-blue-600 hover:shadow-xl"
			>
				Back to homepage
			</Link>
		</div>
	);
};

export default ErrorPage;
