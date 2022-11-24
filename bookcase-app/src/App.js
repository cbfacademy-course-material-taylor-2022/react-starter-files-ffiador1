import React, { useState } from 'react';
 import Book from './components/Book';
 import BookList from './components/BookList';
 import data from './models/books.json';


 const App = (props) => {
 const [books] = useState(data);
 
 return books.map(book => 
 <> 
  <BookList >{
    <Book book={book} />
    }
  </BookList>
 </>
 ); 

//  function addBook(title) {
//     console.log(`The Book'${title}' was clicked`);
    // }

 }

   

 export default App;

