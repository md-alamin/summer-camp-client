import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner-1.jpg';
import banner2 from '../../../assets/banner/banner-2.avif';
import banner3 from '../../../assets/banner/banner-3.jpg';
import './Banner.css';

const Banner = () => {
	return (
		<Carousel className="text-center mt-20 mb-32">
			<div>
				<img src={banner1} />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<img src={banner2} />
				<p className="legend">Legend 2</p>
			</div>
			<div>
				<img src={banner3} />
				<p className="legend">Legend 3</p>
			</div>
		</Carousel>
	);
};

export default Banner;
