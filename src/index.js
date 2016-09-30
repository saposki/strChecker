import React from 'react';
import ReactDOM from 'react-dom';

//path reference to source files
import Input from './components/inputs';

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
}

// Render generated component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
