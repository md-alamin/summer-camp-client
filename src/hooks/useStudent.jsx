import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useStudent = () => {
	const { user } = useContext(AuthContext);
	const token = localStorage.getItem('access-token');

	const { data: isStudent, isLoading: isStudentLoading } = useQuery({
		queryKey: ['isStudent', user?.email],
		enabled: !!user?.email && !!localStorage.getItem('access-token'),
		queryFn: async () => {
			const res = await fetch(
				`${import.meta.env.VITE_SERVER_LINK}/user/student/${user?.email}`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			return res.json();
		},
	});
	return [isStudent, isStudentLoading];
};

export default useStudent;
