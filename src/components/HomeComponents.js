import React from 'react'
import auth from './auth';

 const Home = (props) => {
  return (
    <div>
      <p className="display-3">This is HOME Page</p>
      <button onClick={
        () => {
          auth.login(() => {
            props.history.push("/app");
          });
        }
      }>Login</button>
    </div>
  )
}

export default Home;
