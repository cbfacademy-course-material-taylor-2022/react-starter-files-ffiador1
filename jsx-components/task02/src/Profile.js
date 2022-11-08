
/* Add the Profile function here */

function Profile(name){
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
export default Profile