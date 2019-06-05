import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootRuducer from '../reducers';

const store = createStore(
  rootRuducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
