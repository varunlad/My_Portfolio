// UserProfile.js
import React, { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import MyLogin from './MyLogin';

function UserProfile() {
  const user = useContext(UserContext);
  const [updateName, setUpdateName] = useState(user.myUser.username);
  const handelUpdate = (a1, a2) => {
    user.update(a1,a2);
  }
  const handelUpdateName = (e) =>{
    setUpdateName(e.target.value)
  }
 
  return (
    <div>
      {user ?
        <div style={{ textAlign: "center" }}>
          <div>Welcome <input onChange={(e) => handelUpdateName(e)}  value={updateName} type='text' /></div>
          <MyLogin />
          <button className="btn btn-outline-primary" onClick={()=>{handelUpdate(updateName, user.myUser.stack)}}>Update</button>
        </div> : null
      }
    </div>
  );
}

export default UserProfile;
