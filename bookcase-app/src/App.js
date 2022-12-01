import React, { useState } from 'react';
import Book from './components/Book';
// import PropTypes from 'prop-types';
import BookList from './components/BookList';
import data from './models/books.json';
import Search from './Search';

 const App = () => {

 const [books, setBooks] = useState(data);
 const [keyword, setKeyword] = useState('');
 
 async function findBooks(value) {
    const url =
    `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;
     const results = await fetch(url).then(res => res.json());
     if (!results.error) {
     setBooks(results.items);
     }
    }
   
//  function addBook(title) {
      // console.log(`The Book'${title}' was clicked`);
      // }

 return <> 

  <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/> <br/>
  { books.map(book => <Book key={book.id} book={book}/>)}
 
 </>; 

 }

 
export default App;

