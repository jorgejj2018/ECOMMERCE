import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import {ProdutosReducers} from '../reducers/productReducers'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  producto:ProdutosReducers 
});

const store = createStore(
  reducers, {},
  composeEnhancers(
    applyMiddleware(reduxThunk),
  ),
);
export default store;