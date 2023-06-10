import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useCart = () => {
	const { user } = useContext(AuthContext);

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ['cart', user?.email],
		queryFn: async () => {
			const res = await fetch(
				`${import.meta.env.VITE_SERVER_LINK}/cart/${user?.email}`
			);
			return res.json();
		},
	});
	return [cart, refetch];
};

export default useCart;
