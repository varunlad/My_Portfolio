// UserProvider.js
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({children}) => {
  
  const [myUser, setMyUser] = useState({ username: 'Varun Lad', stack : " React" })
  const update = (a1, a2) =>{
    setTimeout(()=>{
        setMyUser({username:a1 , stack : a2 })
    },100);
  }

  return (
    <UserContext.Provider value={{myUser , update}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
