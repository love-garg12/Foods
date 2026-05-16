import React from 'react'

const PartnerLogin = () => {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">Foods</div>
        <h1>Partner login</h1>
        <p className="auth-subtitle">Sign in to manage your food service and listings.</p>
        <form className="auth-form">
          <label>
            Email address
            <input type="email" placeholder="partner@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button type="button" className="auth-button">Sign in</button>
        </form>
        <div className="auth-alt-links">
          <a href="/user/register">Register as normal user</a>
        </div>
        <div className="auth-footer">
          <span>New partner?</span>
          <a href="/food-partner/register">Create account</a>
        </div>
      </div>
    </div>
  )
}

export default PartnerLogin
