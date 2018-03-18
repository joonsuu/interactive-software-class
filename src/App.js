import React, { Component } from 'react';
import './App.css';


class Topicelement extends Component {
  render(){
    return(
      <div className="topicmenu-element img-button">
      </div>
    )
  }
}

class Topinput extends Component {
  render(){
    return(
      <div className="input-container">
        <label>INPUT</label>
        <input className="top-input"></input>
        <button>Ütlen</button>
      </div>
    )
  }
}

class Topmenu extends Component {
  render(){
    return(
      <div className="topmenu-container">
      <Topinput></Topinput>
      </div>
    )
  }
}

class Topicmenu extends Component {
  render(){
    return(
      <div className="topicmenu-container">
        <div className="topicmenu-inner">
          <Topicelement></Topicelement>
          <Topicelement></Topicelement>
          <Topicelement></Topicelement>
          <Topicelement></Topicelement>
          <Topicelement></Topicelement>
          <Topicelement></Topicelement>
        </div>
      </div>
    )
  }
}

class Wordelement extends Component {
  render(){
    return(
      <div className="word-element img-button">
      </div>
    )
  }
}

class Middlecontainer extends Component {
  render(){
    return(
      <div className="middle-container">
        <div className="middle-inner">
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
          <Wordelement></Wordelement>
        </div>
    </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Topmenu></Topmenu>
        </header>
        <div className="app-view">
          <Topicmenu></Topicmenu>
          <Middlecontainer>
          </Middlecontainer>
        </div>
      </div>
    );
  }
}



export default App;
