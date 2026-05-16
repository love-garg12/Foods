import React from 'react'

const UserRegister = () => {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">Foods</div>
        <h1>Create user account</h1>
        <p className="auth-subtitle">Join as a user and discover fresh meals near you.</p>
        <form className="auth-form">
          <label>
            Full name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create a password" />
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
