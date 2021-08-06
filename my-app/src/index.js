import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function DogList(){
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Image/>
    </section>
  );
}

const Book = () => {
  return <article>
    this is a car
  </article>
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg" alt=""/>


ReactDOM.render(<DogList/>, document.getElementById('root'));