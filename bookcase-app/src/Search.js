import React, { useState } from 'react';
import PropTypes from 'prop-types';
import findBooks from './App';



const handleSubmit = (event) =>{
    event.preventDefault();
    props.findBooks(keyword);
    };
const [keyword, setKeyword] = useState('');

const Search = (props) => {



return <form onSubmit={handleSubmit}>
    <label>
        <input 
            type="text" 
            placeholder="Enter search term"
            name="search"
            value={keyword} 
            onChange={(e) =>
                props.setKeyword(e.target.value)}/>      
     </label>
     <p style={{color:"red"}}>
        <em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
    <input type="submit" value="Submit" id="submit-button"/>
   

</form>
}

export default Search;

