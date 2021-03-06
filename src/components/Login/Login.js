import './Login.css'
import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png'
import { RiUser2Line, RiLock2Line } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';


const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const { user } = useAuth()

    const navigate = useNavigate()

    const { signInWithEmailPass } = useAuth()

    const handleSignIn = event => {
        event.preventDefault();

        signInWithEmailPass(email, pass)
    }

    // redirect if signed in
    useEffect(() => {
        if (user.email) {
            navigate('/chat')
        }

    }, [user])

    return (
        <div className='login'>
            <div className="inner-containner">
                <img src={logo} alt="logo" height='30px' />
                <h2>Sign in</h2>
                <p>Sign in to continue to Devcord.</p>
                <form
                    onSubmit={handleSignIn}
                    className='login-form'
                >
                    <p>Email</p>
                    <div className='input-group'>
                        <RiUser2Line className='icon' />
                        <input
                            type="text"
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <p>Password</p>
                    <div className='input-group'>
                        <RiLock2Line className='icon' />
                        <input
                            type="text"
                            required
                            onChange={e => setPass(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>

                <p>
                    Don't have an account ?
                    <Link
                        to='/signup'
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