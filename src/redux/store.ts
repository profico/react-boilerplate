import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState?) {
  const composeEnhancers = compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware()));

  return store;
}
