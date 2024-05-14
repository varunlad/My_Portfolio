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
            </div>
            <div className='row box_shadow mt-4'>
                <div className='col-md-12'>
                    <div className="neon">Animations</div>
                </div>
                <div className='col-md-4'>
                    <div className=' my_card' style={{ minHeight: 250 }}>
                        <div className="bizzy">
                            <p className="bizzy-letters letter-b">F</p>
                            <p className="bizzy-letters letter-i">U</p>
                            <p className="bizzy-letters letter-z1">N</p>
                            <p className="bizzy-letters letter-z2">N</p>
                            <p className="bizzy-letters letter-y">Y</p>
                        </div>
                        <div className="bizzy-B">
                            <p className="bizzy-letters-B letter-C">C</p>
                            <p className="bizzy-letters-B letter-O">O</p>
                            <p className="bizzy-letters-B letter-D">D</p>
                            <p className="bizzy-letters-B letter-I">I</p>
                            <p style={{ transitionDelay: ".1s" }} className="bizzy-letters-B letter-N">N</p>
                            <p className="bizzy-letters-B letter-N">G</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className=' my_card' style={{ minHeight: 250 }}>
                        <div className="my_loader">
                            <span>C</span>
                            <span>U</span>
                            <span>S</span>
                            <span>T</span>
                            <span>O</span>
                            <span>M</span>
                        </div>
                        <div className="my_loader">
                            <span>A</span>
                            <span>N</span>
                            <span>I</span>
                            <span>M</span>
                            <span>A</span>
                            <span>T</span>
                            <span>I</span>
                            <span>O</span>
                            <span>N</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className=' my_card' style={{ minHeight: 250 }}>
                        <div className="my_wrapper">
                            <p>W</p>
                            <p>O</p>
                            <p>W</p>
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-4'>
                    <div className=' my_card'>
                        <h5>Drop Shadow </h5>
                        <img loading="lazy" className=' custom_box_shadow w-75' src={men} alt='men' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Object-fit</h5>
                        <div className='my_box'>
                            <img loading="lazy" className=' custom_box_Overflow ' src={men_bg} alt='men' />
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Gray-Scale</h5>
                        <img loading="lazy" className=' gray_box_Overflow w-75 ' src={men_bg} alt='men' />
                    </div>
                </div> */}
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5 className="mb-4">Flip Section</h5>
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
                <div className='col-md-8'>
                    <div className='my_card p-4 '>
                        {/* <div className="moving_animation  css_position">
                            <span className="square_me mb-3"></span>
                            <span className="hexagon_me"></span>
                        </div>
                        <div className="moving_animation html_position ">
                        <span className="pentagon_me mb-3"></span>
                        <span className="triangle_me "></span>
                        </div> */}
                        <div className="d-flex">
                            <h5 className=" mb-3 mx-3" style={{ whiteSpace: "nowrap" }}></h5>
                            <i onClick={() => { handelShapeClick("square") }} className={myShape === "square" ? "bi bi-square-fill my_color mx-2" : "bi bi-square-fill mx-2"} style={{ cursor: "pointer" }}></i>
                            <i onClick={() => { handelShapeClick("triangle") }} className={myShape === "triangle" ? "bi bi-triangle-fill my_color mx-2" : "bi bi-triangle-fill mx-2"} style={{ cursor: "pointer" }}></i>
                            <i onClick={() => { handelShapeClick("pentagon") }} className={myShape === "pentagon" ? "bi bi-pentagon-fill my_color mx-2" : "bi bi-pentagon-fill mx-2"} style={{ cursor: "pointer" }}></i>
                            <i onClick={() => { handelShapeClick("hexagon") }} className={myShape === "hexagon" ? "bi bi-hexagon-fill my_color mx-2" : "bi bi-hexagon-fill mx-2"} style={{ cursor: "pointer" }}></i>
                            <i onClick={() => { handelShapeClick("circle") }} className={myShape === "circle" ? "bi bi-circle-fill my_color mx-2" : "bi bi-circle-fill mx-2"} style={{ cursor: "pointer" }}></i>
                        </div>
                        <img loading="lazy" className={myShape === "square" ? "square " :
                            myShape === "triangle" ? "triangle" :
                                myShape === "pentagon" ? "pentagon" :
                                    myShape === "hexagon" ? "hexagon" : "circle "}
                            style={user.windownView === 0 ? { maxWidth: "250px" } : { maxWidth: "450px" }}
                            src={sport_pitch} alt='shape' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Css