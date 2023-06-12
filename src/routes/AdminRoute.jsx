import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/Loader';

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [isAdmin, isAdminLoading] = useAdmin();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <Loader></Loader>;
	}

	if (user && isAdmin?.admin) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
