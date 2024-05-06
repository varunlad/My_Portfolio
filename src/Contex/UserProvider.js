// UserProvider.js
import React, { useState,useEffect } from 'react';
import UserContext from './UserContext';

const UserProvider = ({children}) => {
  
  const [myUser, setMyUser] = useState({ username: 'Varun Lad', stack : "Web Developer" });
  const [techStack, setTechStack] = useState(false);
  const [windownView, setWindownView] = useState(1);

  const updateTechStack = (val) =>{
    setTechStack(val)
  }
  const update = (a1, a2) =>{
    setTimeout(()=>{
        setMyUser({username:a1 , stack : a2 })
    },100);
  }
  const checkScreenRatio = () => {
    let isMobile = window.matchMedia("only screen and (max-width: 990px)").matches;
    if (isMobile) {
        setWindownView(0);
    } else {
        setWindownView(1);
    }
}
useEffect(() => {
    checkScreenRatio()
}, [])

  return (
    <UserContext.Provider value={{myUser,techStack,windownView, update, updateTechStack}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
