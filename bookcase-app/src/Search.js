import React, { useState } from 'react';



const Search = (props) => {

    const [keyword, setKeyword] = useState('');
return <form>
    <label>
        <input 
            type="text" 
            placeholder="Enter search term"
            name="search"
            value={keyword} 
            onChange={(e) =>setKeyword(e.target.value)}/>
     </label>
     <p style={{color:"red"}}>
        <em>{keyword && 'Keywords Typed: ' + keyword}</em></p>
    <input type="submit" value="Submit" id="submit-button"/>
   

</form>
}

export default Search;

