import React, { useEffect, useState } from 'react';
import ClassCard from '../../shared/ClassCard';
import axios from 'axios';

const Classes = () => {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios(
					`${import.meta.env.VITE_SERVER_LINK}/allClass/all`
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
			<h1 className="text-center text-5xl font-bold">Our Classes</h1>
			<div className="grid lg:grid-cols-3 my-10 gap-10">
				{classes.map((item, idx) => (
					<ClassCard key={idx} item={item}></ClassCard>
				))}
			</div>
		</div>
	);
};

export default Classes;
