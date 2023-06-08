import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/Loader';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return <Loader></Loader>;
	}
	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
