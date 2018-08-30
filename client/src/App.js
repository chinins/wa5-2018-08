import React, { Component } from 'react';
import './App.css';
import TopicsList from './components/TopicsList';
import NewTopic from './components/NewTopic';
import * as Actions from './redux/actions';

import { connect } from 'react-redux';

// const baseUrl = 'https://private-anon-7bcdfda42c-codemocracy.apiary-mock.com/topics';
const baseUrl = 'http://localhost:3001/topics';

class App extends Component {
  constructor (props) {
    super(props);
    this.fetchTopics();
  }

  fetchTopics () {
    fetch(baseUrl)
      .then(res => res.json())
      .then(topics => this.props.setTopics(topics))
  }

  createTopic = (title) => {
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => this.fetchTopics());
  }

  deleteTopic = (topic) => {

    fetch(baseUrl + '/' + topic._id, {
      method: 'DELETE',
    })
      .then(() => this.fetchTopics());
  }

  voteTopic = (up, topic) => {
    const direction = up ? 'up': 'down';

    fetch(`${baseUrl}/${topic._id}/${direction}`, {
      method: 'PUT'
    })
      .then(() => this.fetchTopics());
  }

  render() {
    return (
      <div className="App">
        <NewTopic onTopicCreate={this.createTopic}></NewTopic>
        <TopicsList topics={this.props.topics} onDelete={this.deleteTopic} onVote={this.voteTopic}></TopicsList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topics: state.topics
})

const mapDispatchToProps = (dispatch) => ({
  setTopics: (topics) => dispatch(Actions.setTopics(topics))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
