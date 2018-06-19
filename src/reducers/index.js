import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';

const rootReducer = combineReducers({
  posts,
  // redux-form assumes the key is form!
  form: formReducer
});

export default rootReducer;
