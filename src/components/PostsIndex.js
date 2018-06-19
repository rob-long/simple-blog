import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPost(post) {
    const route = `/posts/${post.id}`;
    return (<li className="list-group-item" key={post.id}>
    <Link to={route}> {post.title} </Link>
    </li>);
  }

  render() {
    // without lodash
    //const posts = Object.keys(this.props.posts).map( key => this.renderPost(this.props.posts[key]));
    const posts =  _.map(this.props.posts, post => this.renderPost(post));
    return (
    <div>
      <div className="text-xs-right">
      <Link className="btn btn-primary" to="/posts/new">
      Add a Post
      </Link>
      </div>
      <h1>Posts</h1>
      <ul className="list-group">
      {posts}
      </ul>
    </div>);
  }
}
// syntactic sugar 
// function mapStateToProps(state) {
  function mapStateToProps({posts}) {
    return {
        posts
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchPosts: () => dispatch(fetchPosts())
  }
}

// instead of using mapDispatchToProps we use a shortcut and just pass the action creator to connect
// this only works when we are not really doing anything in mapDispatchToProps
export default connect(mapStateToProps,{ fetchPosts })(PostsIndex);