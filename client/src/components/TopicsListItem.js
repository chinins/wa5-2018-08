import React, { Component } from 'react';
import moment from 'moment';


export default class TopicsListItem extends Component {

  render () {
    const { score, title, published_at: publishedAt } = this.props.topic;

    return (
      <div className="TopicsListItem">
        <div className="actions">
          <button><span className="vote-btn">🔼</span></button>
          <span>{score}</span>
          <button><span className="vote-btn">🔽</span></button>
        </div>
        <div className="content">
          <h2>{title}</h2>
          <span><small>Created on </small>{moment(publishedAt).format('MMM Do')}</span>
        </div>
        <div className="accessory"><span>🗑</span></div>
      </div>
    )
  }
}