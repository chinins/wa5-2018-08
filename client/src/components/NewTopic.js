import React, { Component } from 'react';

export default class NewTopic extends Component {
  render () {
    return (
      <form className="NewTopic">
        <input type="text" placeholder="Write a new topic"></input>
        <input type="submit" value="Add new topic"></input>
      </form>
    )
  }
}