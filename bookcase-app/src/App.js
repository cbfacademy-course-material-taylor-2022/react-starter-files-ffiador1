import React, { useState } from 'react';
 import Book from './components/Book';

 import BookList from './components/BookList';
 import data from './models/books.json';
import Search from './Search';

 const App = (props) => {
 const [books] = useState(data);
 
 return books.map(book => 
 <> 
  <Search/> <br/>
  { <Book key={book.id} book={book}/>}

  
 </>
 ); 

//  function addBook(title) {
//     console.log(`The Book'${title}' was clicked`);
    // }

 }

   

 export default App;

