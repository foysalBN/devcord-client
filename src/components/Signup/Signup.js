import '../Login/Login.css'
import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png'
import { RiUser2Line, RiLock2Line } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const { user, signUpWithEmailPass } = useAuth()
    const navigate = useNavigate()

    // redirect if signed in
    useEffect(() => {
        if (user.email) {
            navigate('/chat')
        }

    }, [user, navigate])


    const handleSignup = event => {
        event.preventDefault()

        console.log('signup click')
        signUpWithEmailPass(username, email, pass)

    }


    return (
        <div className='login'>
            <div className="inner-containner">
                <img src={logo} alt="logo" height='30px' />
                <h2>Sign up</h2>
                <p>Sign up to continue to Devcord.</p>
                <form
                    className='login-form'
                    onSubmit={handleSignup}
                >
                    <p>Username</p>
                    <div className='input-group'>
                        <RiUser2Line className='icon' />
                        <input
                            type="text"
                            required
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <p>Email</p>
                    <div className='input-group'>
                        <RiUser2Line className='icon' />
                        <input
                            required
                            onChange={e => setEmail(e.target.value)}
                            type="text" />
                    </div>
                    <p>Password</p>
                    <div className='input-group'>
                        <RiLock2Line className='icon' />
                        <input
                            required
                            onChange={e => setPass(e.target.value)}
                            type="text" />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>

                <p>
                    Already have an account ?
                    <Link
                        to='/'
                        style={
                            {
                                color: '#7269ef',
                                textDecoration: 'none'
                            }}
                    > Login now</Link>
                </p>


            </div>
        </div>
    );
};

export default Signup;