import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostView extends Component {
  componentDidMount() {
    // /posts/:id provided by react-router 
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  deletePost() {
    const { id } = this.props.match.params;    
    this.props.deletePost(id,() => this.props.history.push('/'));
  }

  render() {
    const post = this.props.post;
    if (!post) {
      return "...Loading";
    }
    const delete_url = `/posts/${post.id}/delete`;
    return (
    <div className="post">
      <div className="text-xs-left">
      <Link className="btn btn-primary" to="/">
      Back to Index
      </Link>
      </div>
      <div className="text-xs-right">
      <button className="btn btn-danger" onClick={this.deletePost.bind(this)}>
      Delete
      </button>
      </div>          
    <h3>{post.title}</h3>
    <h6>{post.categories}</h6>
    <p>{post.content}</p>
    </div>
    );
  }
}

// syntactic sugar 
// function mapStateToProps(state) {
function mapStateToProps({posts}, ownProps) {
  //return { posts }
  // lets only map the one post we care about
  return { post: posts[ownProps.match.params.id] };
}

// instead of using mapDispatchToProps we use a shortcut and just pass the action creator to connect
// this only works when we are not really doing anything in mapDispatchToProps
//export default connect(mapStateToProps,{ fetchPost })(PostView);
export default connect(mapStateToProps,{ fetchPost, deletePost })(PostView);