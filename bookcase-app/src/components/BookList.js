import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(book){
    return <Book book={book} />
}

export default BookList; 