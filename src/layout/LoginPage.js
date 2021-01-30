import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, authVerified } from '../slices/authSlice';
import { history } from '../App'
import { firebase } from '../firebase'

export const LoginPage = () => {
	const dispatch = useDispatch();
	const uid = useSelector(({ uid }) => uid );
	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if(user && user.uid) {
				dispatch(authVerified(user.uid))
				history.push('/dashboard');
			}
		});
		return unsubscribe;
	}, [])
	
	const handleLogin = async () => {
		dispatch(login());
	}

	return (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">EZ Budget</h1>
			<p>Max your spending power by tracking your expenses.</p>
			<button className="button" onClick={handleLogin}>Login with Google</button>
		</div>	
	</div>
	);
}

export default LoginPage;