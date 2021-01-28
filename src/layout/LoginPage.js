import React from 'react';
import { connect, useDispatch, useSelector} from 'react-redux';
//import { startLogin } from '../actions/auth';
import { login, authVerified } from '../slices/authSlice';
import { history } from '../App'
import {fetchExpenses} from '../slices/expensesSlice'
import { firebase } from '../firebase'

import { useEffect } from 'react'

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
		//history.push('/dashboard');
		/* const user = await firebase.auth().onAuthStateChanged(user => {
			history.push('/dashboard');
		}); */		
				

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
//export default connect(undefined, mapDispatchToProps)(LoginPage);