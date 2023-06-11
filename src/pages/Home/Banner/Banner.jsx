import React from 'react';
import banner3 from '../../../assets/banner/banner-4.webp';

const Banner = () => {
	return (
		<div
			className="hero min-h-[70vh]"
			style={{
				backgroundImage: `url(${banner3})`,
			}}
		>
			<div className="hero-overlay bg-opacity-70"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-xl">
					<h1 className="mb-5 text-2xl sm:text-5xl font-bold">
						Welcome to Music Summer Camp
					</h1>
					<p className="mb-5 font-bold">
						Get ready to harmonize, compose, and let your musical spirit soar in
						the warm embrace of our Musical Summer Camp!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
