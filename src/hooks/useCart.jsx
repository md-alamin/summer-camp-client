import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useCart = () => {
	const { user, loading } = useContext(AuthContext);
	const token = localStorage.getItem('access-token');

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ['cart', user?.email],
		enabled: !!user?.email && !!localStorage.getItem('access-token'),
		queryFn: async () => {
			const res = await fetch(
				`${import.meta.env.VITE_SERVER_LINK}/cart/${user?.email}`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			return res.json();
		},
	});
	return [cart, refetch];
};

export default useCart;
