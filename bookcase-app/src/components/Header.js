import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
return <>
    <h1>My Bookcase</h1>
    <Link to ='/'>Home</Link> <n/>
    <Link to ='/bookcase' className="bookLink">Bookcase</Link> <n/>
    <Link to ='/about'>About</Link>
</>
}

export default Header;