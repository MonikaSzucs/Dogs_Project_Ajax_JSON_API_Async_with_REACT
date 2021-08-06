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
    </section>
  );
}

const author= 'Author'

const Book = () => {
  const title = 'TITLE HEREee'
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg" alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* <p>{let x=6}</p> */}
      <p>{6+6}</p>
    </article>
  )
}

ReactDOM.render(<DogList/>, document.getElementById('root'));