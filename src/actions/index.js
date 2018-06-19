import axios from 'axios';

const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `?key=hockey123`;

export const ACTIONS = {
  FETCH_POST: 'FETCH_POST',
  FETCH_POSTS: 'FETCH_POSTS',
  ADD_POST: 'ADD_POST',
  DELETE_POST: 'DELETE_POST'
};

export function fetchPosts() {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.get(url);
    return {
        type: ACTIONS.FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const request = axios.get(url);
  return {
    type: ACTIONS.FETCH_POST,
    payload: request
  }
}

export function addPost(values,callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    .then( callback );
  return {
    type: ACTIONS.ADD_POST,
    payload: request
  }
}

export function deletePost(id,callback) {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const request = axios.delete(url).then( callback );
  console.log('created action with payload',request)
  return {
    type: ACTIONS.DELETE_POST,
    payload: request
  }
}