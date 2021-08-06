import React from 'react';
import ReactDOM from 'react-dom';
//the '.' means that it is in the same folder
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firstBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg',
  title: 'Where\'s Spot?',
  author: 'Eric Hill'
}
const secondBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth, Tim Warnes'
}


function DogList(){
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
  );
}

// there are parameters and arguments in a function like Books
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt=""/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDOM.render(<DogList/>, document.getElementById('root'));