import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
// import { useHistory } from 'react-router-dom'; // Import useHistory


function Login() {
 
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt=''
        />
      </Link>

      <div className='login_container'>
        <h1>Sign in</h1>
        <form className='login_form'>
          <h5>Email or mobile phone number</h5>
          <input value='' type='text' placeholder='E-mail' required /><br /><br />

          <button  className='login_button'>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

        <a href=''>Forgot Password</a><br/>
        <a href=''>Other issues with Sign-In</a>
      </div>

      <div className='login_newAcount'>
        <h6>------New to Amazon?------</h6>
        <button className='create_account_button'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login;
