import React, { useContext, useEffect, useState } from "react";
import * as icon from "../../Assets/Images/index";
import men from "../../Assets/Images/men_removebg.png"
import men_bg from "../../Assets/Images/men.png"
import "./Common.scss"
import UserContext from "../../Contex/UserContext";

function Css() {
    const user = useContext(UserContext)
    return (
        <div className='container'>
        <div className='row box_shadow'>
            <div className='col-md-4'>
                <div className=' my_card'>
                    <h5>Drop Shadow </h5>
                    <p style={{ fontSize: "10px" }}>Filter Drop Shadow property ( filter: drop-shadow(5px 5px 10px #7a92c3))</p>
                    <img loading="lazy" className=' custom_box_shadow w-75' src={men} alt='men' />
                </div>
            </div>
            <div className='col-md-4'>
                <div className='my_card'>
                    <h5>Object-fit</h5>
                    <p style={{ fontSize: "10px" }}>object-fit Cover property (object-fit: cover)</p>
                    <div className='my_box'>
                        <img loading="lazy" className=' custom_box_Overflow ' src={men_bg} alt='men' />
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='my_card'>
                    <h5>Gray-Scale</h5>
                    <p style={{ fontSize: "10px" }}>gray-scale property (filter: grayscale(100%))</p>
                    <img loading="lazy" className=' gray_box_Overflow w-75 ' src={men_bg} alt='men' />
                </div>
            </div>
            <div className='col-md-4'>
                <div className='my_card'>
                    <h5>Flip Section</h5>
                    <p style={{ fontSize: "10px" }}>transform-style property (transform: rotateY(180deg) ,transform-style: preserve-3d)</p>
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