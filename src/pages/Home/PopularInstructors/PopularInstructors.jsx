import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InstructorsCard from '../../../shared/InstructorsCard';

const PopularInstructors = () => {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios(
					`${import.meta.env.VITE_SERVER_LINK}/users/sortInstructor`
				);
				setInstructors(response.data);
			} catch (e) {
				console.error(e);
			}
		};

		fetchData();
	}, []);
	return (
		<div className="py-10">
			<h1 className="text-center text-5xl font-bold">
				Our Popular Instructors
			</h1>
			<div className="grid lg:grid-cols-3 mt-10 gap-10">
				{instructors.map((instructor, idx) => (
					<InstructorsCard key={idx} instructor={instructor}></InstructorsCard>
				))}
			</div>
		</div>
	);
};

export default PopularInstructors;
