import React from 'react'
import axios from 'axios';


const UserRegister = () => {
   const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.fullName);
    const fullName = e.target.fullName;
    console.log(fullName);
   }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">Foods</div>
        <h1>Create user account</h1>
        <p className="auth-subtitle">Join as a user and discover fresh meals near you.</p>
        <form className="auth-form" onClick={hanldeSubmit}>
          <label>
            Full name
            <input id='fullName'value={fullName} type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email address
            <input id='email' type="email" placeholder="name@example.com" />
          </label>
          <label>
            Password
            <input id='password' type="password" placeholder="Create a password" />
          </label>
          <button type="button" className="auth-button">Create account</button>
        </form>
        <div className="auth-footer">
          <span>Already have an account?</span>
          <a href="/user/login">Login</a>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
