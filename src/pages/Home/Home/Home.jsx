import React from 'react';
import HomeSwiper from '../HomeSwiper/HomeSwiper';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<HomeSwiper></HomeSwiper>
			<PopularClass></PopularClass>
		</div>
	);
};

export default Home;
