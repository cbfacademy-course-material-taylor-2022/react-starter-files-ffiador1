
/* Add the Profile function here */

function Profile(props){
  if (Object.keys(props).length !== 0){
 
   return <main id="content" role="main" className="base">
     <h1>{props.name}'s React Page</h1>
       <p>{props.bio}</p>
   </main>
   
  } else {
    return <main id="content" role="main" className="base">
    <h1>Just a React Page</h1>
    <p>Nothing to see here!</p>
   </main>
  }
  }
export default Profile