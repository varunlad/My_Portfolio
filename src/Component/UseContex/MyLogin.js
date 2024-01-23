import React, { useState,useContext } from 'react';
import UserContext from '../../Contex/UserContext';

function MyLogin({newUpdateStudy,handelUpdateStudy}) {
 
    const handelUpdateStudyChange = (e) =>{
      handelUpdateStudy(e.target.value)
    }
  return (
    <div>I study
     <input onChange={(e) => handelUpdateStudyChange(e)}  value={newUpdateStudy} type='text' />
    </div>

  )
}

export default MyLogin