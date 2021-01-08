import React from 'react';
import { connect, useDispatch } from 'react-redux';
//import { startLogin } from '../actions/auth';
import { login } from '../slices/authSlice';
import { history } from '../App'

export const LoginPage = () => {
	const dispatch = useDispatch();

	const handleLogin = async () => {
		dispatch(login());
		history.push('/dashboard');
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