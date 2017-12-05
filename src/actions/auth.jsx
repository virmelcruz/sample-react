import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILED } from '../constants';
import axios from 'axios';

export const signIn = (credentials) => {
  return dispatch => {
    console.log('nag dispatch ng signin');
    dispatch({
      ...credentials,
      type: LOG_IN
    });

    let graphQuery = { query: `mutation { signInUser(email: "${credentials.email}", password: "${credentials.password}"){ }}` };

    axios.post('http://localhost:3000/graphql', graphQuery)
      .then((response) => {
        console.log(response);
        if (response.data.errors) {
          setTimeout(() => {
            dispatch({
              type: LOG_IN_FAILED,
              errors: response.data.errors
            });
          }, 1000)
        } else {
          dispatch({
            type: LOG_IN_SUCCESS,
            data: response.data.data
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: LOG_IN_FAILED,
          errors: error.message
        });
      });
    
    }
}