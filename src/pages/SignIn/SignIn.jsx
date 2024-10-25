import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
    return (
        <div className='signin-container'>
            <header className='heading'>
                <span className='header'>Sign In</span>
                <small className='mini-header'>School of Air Defence</small>
            </header>
            <input className='input' type="text" placeholder='Force number' />
            <input className='input' type="password" placeholder='Password' />
            <button className='button'>Log In</button>

            <div className='instruction-container'>
            <span className='instruction'>You don't have an account? <Link className='link' to={'/sign-up'}>SignUp</Link></span>
            <span className='instruction'>You have new guest? <Link className='link' to={'/registration'}>Register</Link></span>
            </div>
            
        </div>
    )
}

export default SignIn