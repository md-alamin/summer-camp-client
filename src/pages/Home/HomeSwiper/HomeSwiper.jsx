import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

import slide1 from '../../../assets/slides/slide-1.jpg';
import slide2 from '../../../assets/slides/slide-2.jpg';
import slide3 from '../../../assets/slides/slide-3.jpg';
import slide4 from '../../../assets/slides/slide-4.jpg';
import slide5 from '../../../assets/slides/slide-5.jpg';

const HomeSwiper = () => {
	return (
		<Swiper
			className="my-20"
			slidesPerView={3}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
		>
			<SwiperSlide className="relative">
				<img className="h-56" src={slide1} alt="" />
				<h1 className="absolute text-white top-3/4 left-1/3 bg-slate-500 bg-opacity-90">
					Learn Guitar
				</h1>
			</SwiperSlide>
			<SwiperSlide className="relative">
				<img className="h-56" src={slide2} alt="" />
				<h1 className="absolute text-white top-3/4 left-1/3 bg-slate-500 bg-opacity-90">
					Learn Violin
				</h1>
			</SwiperSlide>
			<SwiperSlide className="relative">
				<img className="h-56" src={slide3} alt="" />
				<h1 className="absolute text-white top-3/4 left-1/3 bg-slate-500 bg-opacity-90">
					Learn Trumpet
				</h1>
			</SwiperSlide>
			<SwiperSlide className="relative">
				<img className="h-56" src={slide4} alt="" />
				<h1 className="absolute text-white top-3/4 left-1/3 bg-slate-500 bg-opacity-90">
					Learn Piano
				</h1>
			</SwiperSlide>
			<SwiperSlide className="relative">
				<img className="h-56" src={slide5} alt="" />
				<h1 className="absolute text-white top-3/4 left-1/3 bg-slate-500 bg-opacity-90">
					Learn Drums
				</h1>
			</SwiperSlide>
		</Swiper>
	);
};

export default HomeSwiper;
