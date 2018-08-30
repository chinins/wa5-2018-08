import React, { Component } from 'react';
import './App.css';
import TopicsList from './components/TopicsList';
import NewTopic from './components/NewTopic';
import * as Actions from './redux/actions';

import { connect } from 'react-redux';

const baseUrl = 'https://private-anon-7bcdfda42c-codemocracy.apiary-mock.com/topics';

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

  render() {
    return (
      <div className="App">
        <NewTopic></NewTopic>
        <TopicsList topics={this.props.topics}></TopicsList>
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
