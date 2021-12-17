import './Login.css'
import React from 'react';
import logo from '../../img/logo.png'
import { RiUser2Line, RiLock2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className="inner-containner">
                <img src={logo} alt="logo" height='30px' />
                <h2>Sign in</h2>
                <p>Sign in to continue to Devcord.</p>
                <form className='login-form'>
                    <p>Email</p>
                    <div className='input-group'>
                        <RiUser2Line className='icon' />
                        <input type="text" />
                    </div>
                    <p>Password</p>
                    <div className='input-group'>
                        <RiLock2Line className='icon' />
                        <input type="text" />
                    </div>
                    <button type="submit">Login</button>
                </form>

                <p>
                    Don't have an account ?
                    <Link
                        to='/signin'
                        style={
                            {
                                color: '#7269ef',
                                textDecoration: 'none'
                            }}
                    > Signup now</Link>
                </p>


            </div>
        </div>
    );
};

export default Login;