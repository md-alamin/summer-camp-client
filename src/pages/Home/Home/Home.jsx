import React from 'react';
import HomeSwiper from '../HomeSwiper/HomeSwiper';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<HomeSwiper></HomeSwiper>
			<PopularClass></PopularClass>
			<PopularInstructors></PopularInstructors>
		</div>
	);
};

export default Home;
