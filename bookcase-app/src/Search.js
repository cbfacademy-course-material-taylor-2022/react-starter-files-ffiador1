import React, { useState } from 'react';

const Search = (props) => {
const [keyword, setKeyword]= useState('');
const handleSubmit = (event) =>{
    event.preventDefault();
    props.findBooks(keyword);
    };
    
return <form onSubmit = {handleSubmit}> 
    <p style = {{color:"red"}}><em>
        {keyword && 'Keywords Typed:' + keyword}</em></p>
    <input type="text" 
        value={keyword} 
        onChange={(e) =>setKeyword(e.target.value)}/>
    <input type="submit" value="Check-in" id="submit-button"/>



</form>
}
export default Search;



