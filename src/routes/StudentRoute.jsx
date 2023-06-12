import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../shared/Loader';
import useStudent from '../hooks/useStudent';

const StudentRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const [isStudent, isStudentLoading] = useStudent();
	const location = useLocation();

	if (loading || isStudentLoading) {
		return <Loader></Loader>;
	}

	if (user && isStudent?.student) {
		return children;
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
