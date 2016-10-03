import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//path reference to source files
import Input from './components/inputs';
import Results from './components/results';

class App extends Component {
  constructor(props){
  super(props);
  }

  render() {
    return (
      <div>
        <Input />
        <Results />
      </div>
    );
  }
}

// Render generated component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
