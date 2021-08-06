import React from 'react';
import ReactDOM from 'react-dom';
//the '.' means that it is in the same folder
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function DogList(){
  return (
    <section className="booklist">
      <Book />
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>
  )
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg" alt=""/>

const Title = () => <h1>TITLE HERE</h1>

const Author = () => <h4>Author</h4>

ReactDOM.render(<DogList/>, document.getElementById('root'));