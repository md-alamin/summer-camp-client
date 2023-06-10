import React from 'react';

const ClassCard = ({ item }) => {
	const { name, image, price } = item;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure className="px-10 pt-10">
				<img src={image} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
			</div>
			<div className="card-body">
				<div className=" flex justify-between items-center">
					<p>Price: ${price}</p>
					<button className="btn">Select</button>
				</div>
			</div>
		</div>
	);
};

export default ClassCard;
