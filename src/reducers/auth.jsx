import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILED } from '../constants';

const initialState = {
  loading: false,
  errors: []
}

export const auth = (state = initialState, action) => {
  
  switch(action.type) {
    case LOG_IN:
      return {
        ...state,
        loading: true,
        errors: []
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.data.signInUser,
        errors: [],
        loading: false
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        errors: action.errors,
        loading: false
      };
    default:
      return state;
  }
}

export default auth;