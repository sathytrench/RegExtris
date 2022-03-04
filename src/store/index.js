import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import regexChoices from './playerRegex';
import error from './errorStore';
import tetrisRegexRatio from './tetrisRegexRatio';

const reducer = combineReducers({
  error,
  regexChoices,
  ratios: tetrisRegexRatio,
});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, middleware);

export default store;
