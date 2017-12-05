import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: false,
  duration: true
});

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, loggerMiddleware)
  );
}