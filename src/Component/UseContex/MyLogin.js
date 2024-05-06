import React, {useContext } from 'react';
import UserContext from '../../Contex/UserContext';

function MyLogin({newUpdateStudy,handelUpdateStudy}) {
  const user = useContext(UserContext);

    const handelUpdateStudyChange = (e) =>{
      handelUpdateStudy(e.target.value)
    }
  return (
    <div className={user.windownView === 0 ? 'd-flex flex-column align-items-center justify-content-center w-100':'d-flex align-items-center justify-content-center w-100'}> <h6 className='m-0 w-50 mx-2 mb-2' >I am a</h6>
     <input onChange={(e) => handelUpdateStudyChange(e)}  value={newUpdateStudy} type='text' />
    </div>

  )
}

export default MyLogin