import React, { useState,useContext } from 'react';
import UserContext from './UserContext';

function MyLogin(props) {
    const user  = useContext(UserContext);
    const [newUpdateStudy, setNewUpdateStudy] = useState(user.myUser.stack);
    // const handelUpdateStudy = (e) =>{
    //   setNewUpdateStudy(e.target.value)
    // }
  return (
    // <p>I study  <input onChange={(e) => handelUpdateStudy(e)}  value = {newUpdateStudy} type='text' /></p>
    <p>I study {newUpdateStudy}</p>

  )
}

export default MyLogin