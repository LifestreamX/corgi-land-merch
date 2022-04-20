import React from 'react';
import '../styles/Login.scss';

const Login = () => {
  return (
    <div className='login-wrapper'>
      <form className='form-wrapper'>
        {/* Username input  */}
        <label htmlFor='username' name='username'>
          Username:
        </label>
        <input name='username' type='text' placeholder='Enter Username...' />
        {/* First password input  */}
        <label htmlFor='password1'>Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Enter Password...'
        />

        {/* Login Button*/}
        <div className='button-wrapper'>
          <button className='signup-button'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
