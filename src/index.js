import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import PostsIndex from './components/PostsIndex';
import PostNew from './components/PostNew';
import PostView from './components/PostView';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <Switch>
      <Route path="/posts/new" component={PostNew} />
      <Route path="/posts/:id" component={PostView} />
      <Route path="/" component={PostsIndex} />
    </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
