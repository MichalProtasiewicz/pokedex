import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link className='button' to='/' onClick={()=> localStorage.setItem('user','user')}>Click here to login</Link>
    </div>
  );
}

export default LoginPage;
