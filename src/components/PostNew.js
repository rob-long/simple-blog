import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions';

class PostNew extends Component {

  renderField(field,label,type) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return (
    <div className={className}>
    <label>{field.label}</label>
    <input className="form-control" type="text" {...field.input} />
    <div className="text-help">
    {touched ? error : ''}
    </div>
  </div>
    )
  }

  onSubmit(values) {
    // history is added to our props by React-Router
    // we manipulate history in the callback to the addPost dispatch to redirect back to index page after new post added
    this.props.addPost(values, () => this.props.history.push('/'));
    return null;
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/posts">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }
  // if errors is empty, the form is fine to submit
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'  // a unique identifier for this form
})(
  connect(null, { addPost })(PostNew)
)