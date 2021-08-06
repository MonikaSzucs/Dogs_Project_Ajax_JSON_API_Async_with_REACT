import React from 'react';
import ReactDOM from 'react-dom';
//the '.' means that it is in the same folder
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const author= 'Author';
const title = 'title here';
const img = 'https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg';

function DogList(){
  return (
    <section className="booklist">
      <Book job="developer"/>
      <Book title="random title" number={22}/>
    </section>
  );
}

// there are parameters and arguments in a function like Books
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title.replace(/\b(\w)/g, s => s.toUpperCase())}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

ReactDOM.render(<DogList/>, document.getElementById('root'));