import React from 'react'

const UserLogin = () => {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">Foods</div>
        <h1>User login</h1>
        <p className="auth-subtitle">Sign in to manage your orders and favorites.</p>
        <form className="auth-form">
          <label>
            Email address
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="button" className="auth-button">Sign in</button>
        </form>
        <div className="auth-alt-links">
          <a href="/food-partner/register">Register as food partner</a>
        </div>
        <div className="auth-footer">
          <span>New user?</span>
          <a href="/user/register">Create account</a>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
