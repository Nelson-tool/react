import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Bookslist() {
  return (
    <section className= 'books-list'>
      <Book />
      <Book />
      <Book />
    </section>
  )
}


const Book = () => {
   const title = 'Fun at the Fair : A sticker storybook ;'

   return  (<article className= 'books'>
     <img src="https://images-na.ssl-images-amazon.com/images/I/517GItAEg9L._AC_SX184_.jpg " alt=" " />
     <h1> {title} </h1>
     <h4> Paperbacks</h4>
   </article>
   )  
 }

ReactDOM.render(<Bookslist />, document.getElementById('root'));
