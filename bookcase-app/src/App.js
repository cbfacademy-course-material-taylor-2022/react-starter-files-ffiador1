import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './components/Book';
// import PropTypes from 'prop-types';
import BookList from './components/BookList';
import data from './models/books.json';
import Search from './Search';
import Header from './components/Header';
import About from './pages/About';

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

return <> 
   <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Home findBooks={findBooks} 
            books={books} 
            keyword={keyword} 
            setKeyword={setKeyword}/>} />

         <Route exact path="/bookcase" element={<BookCase books={books} 
            />} />
         <Route exact path="/about" element={<><Header/><About/> </>} />
      </Routes>
   </BrowserRouter>
    </>; 

 }
function Home (props){
   return <>
   <Header/>
   <h2>Welcome to the Bookcase App</h2>
   <Search findBooks={props.findBooks} keyword={props.keyword} setKeyword={props.setKeyword}/> <br/>
   <BookList books={props.books}/>
</>
}
function BookCase (props){
   return  <>
   <Header/>
   <h2>Welcome to the Bookcase App</h2>
   <BookList books={props.books}/>
</>
}
 
export default App;

