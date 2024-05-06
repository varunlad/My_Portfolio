// UserProfile.js
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Contex/UserContext';
import MyLogin from './MyLogin';

function UserProfile() {
  const user = useContext(UserContext);
  const [updateName, setUpdateName] = useState(user.myUser.username);
  const [newUpdateStudy, setNewUpdateStudy] = useState(user.myUser.stack);
  const [isErrorMsg, setIsErrorMsg] = useState("");
  const [showElement,setShowElement] = useState(false)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 5000);
       },
   [showElement])

  const handelUpdate = (a1, a2) => {
    if(a1 !== "" || a2 !== ""){
    user.update(a1,a2);
    setShowElement(true)
    setIsErrorMsg("Info updated")
    }
    else{
      setShowElement(true)
      setIsErrorMsg("Invalid input")
    }
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
          <div className={user.windownView === 0 ? 'd-flex flex-column w-100  mb-2':'d-flex align-items-center w-100  mb-2'}><h6 className={user.windownView === 0 ? 'w-100 mb-2 m-0 mx-2':'w-50 m-0 mx-2'}>Hello my name is</h6> <input onChange={(e) => handelUpdateName(e)}  value={updateName} type='text' /></div>
          <MyLogin newUpdateStudy={newUpdateStudy} handelUpdateStudy={handelUpdateStudy} />
          <button className="btn btn-outline-primary mt-2" onClick={()=>{handelUpdate(updateName, newUpdateStudy)}}>Update</button>
         {showElement && <p className='vanish_msg'>{isErrorMsg}</p> }
        </div> : null
      }
    </div>
  );
}

export default UserProfile;
