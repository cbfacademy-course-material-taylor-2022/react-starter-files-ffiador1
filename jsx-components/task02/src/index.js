import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';



function App() {
  return (
      //Replace the string below with the JSX Profile component
      <Profile name="Flo" bio="Using functional components"/>
     
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

