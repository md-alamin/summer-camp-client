import React from 'react';
import { Fade } from 'react-awesome-reveal';

const InstructorsCard = ({ instructor }) => {
	const { name, image } = instructor;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure className="px-10 pt-10">
				<Fade>
					<img
						src={image}
						alt="Shoes"
						className="rounded-xl h-56 w-48 object-cover"
					/>
				</Fade>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
			</div>
		</div>
	);
};

export default InstructorsCard;
