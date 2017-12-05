import React, { Component } from 'react';
import AuthAPI from '../services/AuthAPI';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions/auth'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
    
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin() {
    this.props.signIn(
      {
        email: this.state.email,
        password: this.state.password
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.props.loading && 
        !nextProps.loading && nextProps.errors.length == 0) {
      console.log('test');
      this.setState({ email: '', password: '' });
    }
  }

  render() {
    return(
      <div className="form-inline">
        <h2>
          Sign In
        </h2>
        <div className="form-group">
          <input 
            className="form-control"
            type="email"
            placeholder="email"
            value={ this.state.email }
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input 
            className="form-control"
            type="password"
            placeholder="password"
            value={ this.state.password }
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.submitLogin}
          disabled={this.props.loading}
        >
          Sign In
        </button>
        <Link to={'/signup'} className="btn btn-primary">
          register
        </Link>
        <div className="">
          <small className="text-danger">
            {
              this.props.errors.map(error => error.message)
            }
          </small>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, { signIn })(SignIn);