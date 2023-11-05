import React, { useContext } from 'react'
import * as icon from "../../Assets/Images/index";
import Slider from "../../Assets/Images/Slider-1.png"
import UserContext from './UserContext';

function HTML() {
  const user = useContext(UserContext);
  console.log("Myuser==", user)
  return (
    <div className='container'>
    <div className='row box_shadow'>
      <h3>✨ Iframe tag {user.myUser?.stack} </h3>
      {/* <iframe src="https://www.javatpoint.com/html-interview-questions" height="400" width="100%"></iframe> */}
      <h3 className='mt-3'>✨ Anchor tag </h3>
      <a className='mb-3' href='https://www.javatpoint.com/html-interview-questions' target="_blank" > Visit JavaTPoint</a>
      <p className='m-0'> target="_blank" attribute will open link in other tab. </p>
      <p className='m-0'> target="_self" attribute will open link in same tab. </p>
      <h3 className='mt-3'>✨ Map tag </h3>
      <img src={Slider} useMap="#workmap" height="300" style={{ maxWidth: "300px" }} />
      {/* <map name="workmap">
        <area shape="rect" coords="34,44,270,350" alt="Computer" href="https://www.javatpoint.com/html-interview-questions" />
        <area shape="rect" coords="290,172,333,250" alt="Phone" href="https://www.javatpoint.com/html-interview-questions" />
        <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="https://www.javatpoint.com/html-interview-questions" />
      </map> */}
    </div>
    </div>
  )
}



export default HTML