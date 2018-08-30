import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="NewTopic">
          <input type="text" placeholder="Write a new topic"></input>
          <input type="submit" value="Add new topic"></input>
        </form>
        <div className="TopicsList">
          <div className="TopicsListItem">
            <div className="actions">
              <button><span className="vote-btn">🔼</span></button>
              <span>0</span>
              <button><span className="vote-btn">🔽</span></button>
            </div>
            <div className="content">
              <h2>Porting from Angular.js to Angular 2</h2>
              <span><small>Created on </small>Date</span>
            </div>
            <div className="accessory"><span>🗑</span></div>
          </div>

          <div className="TopicsListItem">
            <div className="actions">
              <button><span>🔼</span></button>
              <span>0</span>
              <button><span>🔽</span></button>
            </div>
            <div className="content">
              <h2>Porting from Angular.js to Angular 2</h2>
              <span><small>Created on </small>Date</span>
            </div>
            <div className="accessory"><spna>🗑</spna></div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
