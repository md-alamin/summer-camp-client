import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClassCard from '../../../shared/ClassCard';

const PopularClass = () => {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios(
					`${import.meta.env.VITE_SERVER_LINK}/allClass/sort`
				);
				setClasses(response.data);
			} catch (e) {
				console.error(e);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="py-10">
			<h1 className="text-center text-5xl font-bold">Our Popular Classes</h1>
			<div className="grid lg:grid-cols-3 mt-10 gap-10">
				{classes.map((item, idx) => (
					<ClassCard key={idx} item={item}></ClassCard>
				))}
			</div>
		</div>
	);
};

export default PopularClass;
