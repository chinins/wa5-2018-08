import React, { Component } from 'react';

export default class NewTopic extends Component {
  state = {
    title: ''
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.onTopicCreate(this.state.title);
    this.setState({ title: '' });
  }

  handleChange = (e) => {
    this.setState ({
      title: e.target.value
    })
  }

  render () {
    return (
      <form className="NewTopic" onSubmit={this.submitForm}>
        <input type="text" placeholder="Write a new topic" onChange={this.handleChange} value={this.state.title}></input>
        <input type="submit" value="Add new topic"></input>
      </form>
    )
  }
}