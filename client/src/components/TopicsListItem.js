import React, { Component } from 'react';
import moment from 'moment';


export default class TopicsListItem extends Component {

  render () {
    const { score, title, published_at: publishedAt } = this.props.topic;
    const topic = this.props.topic;

    return (
      <div className="TopicsListItem">
        <div className="actions">
          <button onClick={() => this.props.onVote(true, topic)}><span className="vote-btn">🔼</span></button>
          <span>{score}</span>
          <button onClick={() => this.props.onVote(false, topic)}><span className="vote-btn">🔽</span></button>
        </div>
        <div className="content">
          <h2>{title}</h2>
          <span><small>Created on </small>{moment(publishedAt).format('MMM Do')}</span>
        </div>
        <div className="accessory" onClick={() => this.props.onDelete(topic)}><span>🗑</span></div>
      </div>
    )
  }
}