import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
	const { user } = useContext(AuthContext);
	const token = localStorage.getItem('access-token');

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ['isAdmin', user?.email],
		queryFn: async () => {
			if (user) {
				const res = await fetch(
					`${import.meta.env.VITE_SERVER_LINK}/user/admin/${user?.email}`,
					{
						headers: {
							authorization: `Bearer ${token}`,
						},
					}
				);
				return res.json();
			}
			return [];
		},
	});
	return [isAdmin, isAdminLoading];
};

export default useAdmin;
