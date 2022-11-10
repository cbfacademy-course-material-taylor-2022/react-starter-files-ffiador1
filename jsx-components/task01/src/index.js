import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "Florina";
const MY_NAME = "FLORINA";

function Profile(){
  if (name.toUpperCase() === MY_NAME.toUpperCase()){
    return <main id="content" role="main" className="base">
            <h1>{name}'s React Page</h1>
              <p>I'm super excited to see this work! 
                This is first time using React </p>
            </main>
  } else  {
    return <main id="content" role="main" className="base">
     <h1>Just a React Page</h1>
	   <p>Nothing to see here!</p>
    </main>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile());

