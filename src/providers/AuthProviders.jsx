import React, { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const handleGoogleSignIn = () => {
		return signInWithPopup(auth, provider);
	};

	const updateInfo = (user, name, photo) => {
		return updateProfile(user, {
			displayName: name,
			photoURL: photo,
		});
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
			if (loggedUser) {
				axios
					.post(`${import.meta.env.VITE_SERVER_LINK}/jwt`, {
						email: loggedUser.email,
					})
					.then((data) => {
						localStorage.setItem('access-token', data.data.token);
						setLoading(false);
					});
			} else {
				localStorage.removeItem('access-token');
				setLoading(false);
			}
		});
		return unsubscribe;
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		signIn,
		handleGoogleSignIn,
		updateInfo,
		logOut,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
