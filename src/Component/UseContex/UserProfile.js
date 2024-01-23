// UserProfile.js
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Contex/UserContext';
import MyLogin from './MyLogin';

function UserProfile() {
  const user = useContext(UserContext);
  const [updateName, setUpdateName] = useState(user.myUser.username);
  const [newUpdateStudy, setNewUpdateStudy] = useState(user.myUser.stack);
  const handelUpdate = (a1, a2) => {
    user.update(a1,a2);
  }
  const handelUpdateName = (e) =>{
    setUpdateName(e.target.value)
  }
  const handelUpdateStudy = (e) =>{
    setNewUpdateStudy(e)
  }
 
  return (
    <div>
      {user ?
        <div style={{ textAlign: "center" }}>
          <div>Welcome <input onChange={(e) => handelUpdateName(e)}  value={updateName} type='text' /></div>
          <MyLogin newUpdateStudy={newUpdateStudy} handelUpdateStudy={handelUpdateStudy} />
          <button className="btn btn-outline-primary" onClick={()=>{handelUpdate(updateName, newUpdateStudy)}}>Update</button>
        </div> : null
      }
    </div>
  );
}

export default UserProfile;
