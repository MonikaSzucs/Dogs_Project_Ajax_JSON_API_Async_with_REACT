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
    </section>
  );
}

const Book = () => {
  return (
    <article>
        <Image/>
        <Title/>
        <Author/>
    </article>
  )
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg" alt=""/>

const Title = () => <h4>TITLE HERE</h4>

const Author = () => <p>Author</p>

ReactDOM.render(<DogList/>, document.getElementById('root'));