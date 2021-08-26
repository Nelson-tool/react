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
   return <article className= 'books'>
     <Image> </Image>
     <Title />
     <Author/>
   </article>
  
 }

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/517GItAEg9L._AC_SX184_.jpg " alt=" " />;


const Title = () => <h1> Fun at the Fair : A sticker storybook  </h1>

const Author = () => <h4 style={{color : '#617d98', fontSize : '0.75em', marginTop : '0.25em'}}> Paperbacks</h4>

ReactDOM.render(<Bookslist />, document.getElementById('root'));
