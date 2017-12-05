import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return(
      <div className="form-inline">
        <h2>
          Sign Up
        </h2>
        <div className="form-group">
          <input 
            className="form-control"
            type="email"
            placeholder="email"
          />
          <input 
            className="form-control"
            type="password"
            placeholder="password"
          />
        </div>
        <button
          className="btn btn-primary"
          type="button"
        >
          Sign Up
        </button>
      </div>
    )
  }
}

export default Signup;