import React, { Component } from 'react';
import TopicsListItem from './TopicsListItem';

export default class TopicsList extends Component {

  renderTopics = () => {
    const { topics, ...rest } = this.props;
    return this.props.topics.map(topic => (
      <TopicsListItem key={topic._id} topic={topic} {...rest}></TopicsListItem>)
    )
  }

  render () {
    return (
      <div className="TopicsList">
        {this.renderTopics()}
    </div>
    )
  }
}