import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Greeting(){
  return (
    <div>
      <Person/>
      <p>This is my message.</p>
    </div>
  );
}

const Person = () => <h2>John Doe</h2>

ReactDOM.render(<Greeting/>, document.getElementById('root'));