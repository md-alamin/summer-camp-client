import { useQuery } from '@tanstack/react-query';
import AllClassTable from './AllClassTable';

const AllClass = () => {
	const token = localStorage.getItem('access-token');

	const { refetch, data: allClass = [] } = useQuery({
		queryKey: ['all-class'],
		queryFn: async () => {
			const res = await fetch(
				`${import.meta.env.VITE_SERVER_LINK}/all-class-admin`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			return res.json();
		},
	});

	return (
		<div>
			<h1 className="text-center text-5xl font-bold">All Classes</h1>
			{allClass.length > 0 ? (
				<div className="overflow-x-auto py-6">
					<table className="table text-center">
						<thead>
							<tr className="text-lg">
								<th>#</th>
								<th>Class Name</th>
								<th>Instructor Name</th>
								<th>Instructor Email</th>
								<th>Available Seats</th>
								<th>Price</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						{allClass.map((item, idx) => (
							<AllClassTable
								key={item._id}
								item={item}
								idx={idx}
								_id={item._id}
								refetch={refetch}
							></AllClassTable>
						))}
					</table>
				</div>
			) : (
				<div className="h-[40vh] flex justify-center items-center text-3xl">
					No Classes added to Cart
				</div>
			)}
		</div>
	);
};

export default AllClass;
