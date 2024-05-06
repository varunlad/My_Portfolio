import React, { useContext, useEffect, useState } from "react";
import * as icon from "../../Assets/Images/index";
import men from "../../Assets/Images/men_removebg.png"
import men_bg from "../../Assets/Images/men.png"
import sport_pitch from "../../Assets/Images/sport_pitch.jpg"
import "./Common.scss"
import UserContext from "../../Contex/UserContext";

function Css() {
    const user = useContext(UserContext);
    const [myShape, setMyShape] = useState("square");
    const handelShapeClick = (shape) => {
        setMyShape(shape)
    }
    return (
        <div className='container my_smooth_animation'>
            <div className='row box_shadow'>
                <div className='col-md-12'>
                    <h3 style={{ color: "#1ed760" }}>Technical CSS Skills<img className={user.windownView === 0 && 'my_icons'} src={icon.css.src} alt="css" /> </h3>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Proficient in writing CSS code to style web pages and applications, including knowledge of selectors, properties, and values.</p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Strong understanding of CSS layout techniques such as Flexbox and Grid for building responsive and flexible designs.</p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Skilled in using CSS preprocessors like Sass or Less to write modular, maintainable, and reusable CSS code.</p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Familiarity with CSS animations and transitions for adding interactive and engaging effects to elements on web pages.</p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Proficient in using media queries to create responsive designs that adapt to different screen sizes and devices, ensuring a consistent user experience across various platforms.</p>
                </div>
                <div className='col-md-12'>
                    <div className='my_card p-4 '>
                        <div className="d-flex">
                            <h5 className="mb-4 mx-3">Clip-path</h5>
                            <i onClick={() => { handelShapeClick("square") }} className={myShape === "square" ? "bi bi-square-fill my_color mx-2" : "bi bi-square-fill mx-2"} style={{cursor:"pointer"}}></i>
                            <i onClick={() => { handelShapeClick("triangle") }} className={myShape === "triangle" ? "bi bi-triangle-fill my_color mx-2" : "bi bi-triangle-fill mx-2"} style={{cursor:"pointer"}}></i>
                            <i onClick={() => { handelShapeClick("pentagon") }} className={myShape === "pentagon" ? "bi bi-pentagon-fill my_color mx-2" : "bi bi-pentagon-fill mx-2"} style={{cursor:"pointer"}}></i>
                            <i onClick={() => { handelShapeClick("hexagon") }} className={myShape === "hexagon" ? "bi bi-hexagon-fill my_color mx-2" : "bi bi-hexagon-fill mx-2"} style={{cursor:"pointer"}}></i>
                            <i onClick={() => { handelShapeClick("circle") }} className={myShape === "circle" ? "bi bi-circle-fill my_color mx-2" : "bi bi-circle-fill mx-2"} style={{cursor:"pointer"}}></i>
                        </div>
                        <img loading="lazy" className={myShape === "square" ? "square " :
                            myShape === "triangle" ? "triangle" :
                                myShape === "pentagon" ? "pentagon" :
                                    myShape === "hexagon" ? "hexagon" : "circle "}
                            style={user.windownView === 0 ?{maxWidth: "250px"} :{ maxWidth: "450px" }}
                            src={sport_pitch} alt='shape' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className=' my_card'>
                        <h5>Drop Shadow </h5>
                        {/* <p style={{ fontSize: "10px" }}>Filter Drop Shadow property ( filter: drop-shadow(5px 5px 10px #7a92c3))</p> */}
                        <img loading="lazy" className=' custom_box_shadow w-75' src={men} alt='men' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Object-fit</h5>
                        {/* <p style={{ fontSize: "10px" }}>object-fit Cover property (object-fit: cover)</p> */}
                        <div className='my_box'>
                            <img loading="lazy" className=' custom_box_Overflow ' src={men_bg} alt='men' />
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Gray-Scale</h5>
                        {/* <p style={{ fontSize: "10px" }}>gray-scale property (filter: grayscale(100%))</p> */}
                        <img loading="lazy" className=' gray_box_Overflow w-75 ' src={men_bg} alt='men' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Flip Section</h5>
                        {/* <p style={{ fontSize: "10px" }}>transform-style property (transform: rotateY(180deg) ,transform-style: preserve-3d)</p> */}
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img loading="lazy" className='w-75 ' src={men_bg} alt='men' />
                                </div>
                                <div className="flip-card-back">
                                    <img loading="lazy" className=' custom_box_shadow w-75' src={men} alt='men' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Css