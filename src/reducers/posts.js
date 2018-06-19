import { ACTIONS } from '../actions'
import _ from 'lodash';

export default function posts(state = {}, action) {
  switch(action.type) {
    case ACTIONS.FETCH_POST:
      const post = action.payload.data;
      return Object.assign({}, state, {[post.id]: post});
    case ACTIONS.FETCH_POSTS:
      console.log('reducing fetch_posts');
      console.log(action);
      const remapById = _.mapKeys(action.payload.data,'id');
      return remapById;
    case ACTIONS.DELETE_POST:
      console.log('reducing delete_post');
      console.log(action);
      return _.omit(state, action.payload);
    default:
      return state;
  }
  return state;
}
