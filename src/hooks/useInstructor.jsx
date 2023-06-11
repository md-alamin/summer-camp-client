import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
	const { user } = useContext(AuthContext);
	const token = localStorage.getItem('access-token');

	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
		queryKey: ['isInstructor', user?.email],
		enabled: !!user?.email && !!localStorage.getItem('access-token'),
		queryFn: async () => {
			const res = await fetch(
				`${import.meta.env.VITE_SERVER_LINK}/user/instructor/${user?.email}`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			return res.json();
		},
	});
	return [isInstructor, isInstructorLoading];
};

export default useInstructor;
