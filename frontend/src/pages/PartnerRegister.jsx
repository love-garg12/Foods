import React from 'react'

const PartnerRegister = () => {
  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">Foods</div>
        <h1>Partner sign up</h1>
        <p className="auth-subtitle">Register your food business and start serving customers.</p>
        <form className="auth-form">
          <div className="field-row">
            <label>
              Business name
              <input type="text" placeholder="Enter business name" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Enter business address" />
            </label>
          </div>
          <div className="field-row">
            <label>
              Contact name
              <input type="text" placeholder="Enter contact person name" />
            </label>
            <label>
              Contact number
              <input type="tel" placeholder="Enter phone number" />
            </label>
          </div>
          <label>
            Email address
            <input type="email" placeholder="partner@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>
          <button type="button" className="auth-button">Register partner</button>
        </form>
        <div className="auth-footer">
          <span>Already a partner?</span>
          <a href="/food-partner/login">Login</a>
        </div>
      </div>
    </div>
  )
}

export default PartnerRegister
