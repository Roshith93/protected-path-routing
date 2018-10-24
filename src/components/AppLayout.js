import React from 'react';
import auth from './auth'

 const AppLayout = (props) => {
  return (
    <div>
      <p className="display-4">Logged in</p>
      <button onClick={
        ()=> {
          auth.logout(()=>{
            props.history.push("/");
          })
        }
      }>Logout</button>
    </div>
  )
}
export default AppLayout;