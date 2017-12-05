import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Signin from './components/SignIn';
import Signup from './components/SignUp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter path="/">
      <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={Signin} />
        <Route path="/Signup" component={Signup} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)