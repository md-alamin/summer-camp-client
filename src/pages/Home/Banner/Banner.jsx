import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner-1.jpg';
import banner3 from '../../../assets/banner/banner-4.webp';
import './Banner.css';

const Banner = () => {
	return (
		<div className="relative">
			<Carousel
				className="text-center mt-20 mb-32"
				autoPlay
				interval={3000}
				infiniteLoop
			>
				<div>
					<img src={banner1} />
				</div>
				<div>
					<img src={banner3} />
				</div>
			</Carousel>
			<div className="absolute top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center px-10 py-6 bg-slate-200 bg-opacity-30 text-black rounded-2xl">
				<h4 className="text-3xl">Welcome to Music Summer Camp</h4>
				<br />
				<h1 className="text-5xl">Where Adventures Await!</h1>
			</div>
		</div>
	);
};

export default Banner;
