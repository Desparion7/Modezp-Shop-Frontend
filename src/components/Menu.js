import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/usersActions.js';
import { userRegisterActions } from '../store.js';
import './Menu.css';

const Menu = ({ hideMenu }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userLogin.userDetailsInfo);

	const logoutHandler = (e) => {
		e.preventDefault();
		dispatch(logout());
		dispatch(userRegisterActions.userRegisterReset());
		navigate('/Modezp-Shop-Frontend/');
	};

	return (
		<div className='menu box-shadow'>
			{user ? (
				<div className='menu-links'>
					<Link to='/Modezp-Shop-Frontend/Modezp-Shop-Frontend/profile' className='menu-link' onClick={hideMenu}>
						Moje Konto
					</Link>
					<Link
						to='/Modezp-Shop-Frontend/profile/orderlist'
						className='menu-link'
						onClick={hideMenu}
					>
						Moje zamówienia
					</Link>
					<Link
						to='/Modezp-Shop-Frontend/profile/messagecenter'
						className='menu-link'
						onClick={hideMenu}
					>
						Wyślij wiadomość
					</Link>
					<Link to='/Modezp-Shop-Frontend/login'>
						<button
							className='btn'
							onClick={(e) => {
								logoutHandler(e);
								hideMenu();
							}}
						>
							Wyloguj się
						</button>
					</Link>
				</div>
			) : (
				<>
					<Link to='/Modezp-Shop-Frontend/login'>
						<button className='btn' onClick={hideMenu}>
							Zaloguj się
						</button>
					</Link>

					<p>Nie masz konta?</p>
					<Link
						to='/Modezp-Shop-Frontend/register'
						className='menu-link-register'
						onClick={hideMenu}
					>
						Zarejestruj się
					</Link>
				</>
			)}
		</div>
	);
};

export default Menu;
