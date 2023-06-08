import React from 'react';
import Lottie from 'react-lottie';
import loaderImg from '../assets/loading-spinner.json';

const Loader = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loaderImg,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return <Lottie options={defaultOptions} height={500} width={500} />;
};

export default Loader;
