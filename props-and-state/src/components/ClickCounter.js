import React, { useState, useEffect} from 'react';

const ClickCounter = () => {
 const clickStyle = {"background-color":"light-green"};
 const unclickStyle = {"background-color":"light-green"};
 const [count, setCount] = useState(0);
 
//  useEffect(() => {
//     const timeout = setTimeout(() => {
//        setCount(1);
//      }, 3000);
//    },[]);
 
 return (
 <div>
 <h2>Count: {count}</h2>
 <div>Click the button below to increment/decrement the counter</div>
 <button style={clickStyle} onClick={() => setCount(count + 1)}>Add!</button>
 <button style={unclickStyle} onClick={() => setCount(count - 1)}>Subtract!</button>
 
 </div>
 );
 }

 export default ClickCounter;
