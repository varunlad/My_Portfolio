import React, { useContext, useEffect, useState } from "react";
import profilePic from "../../Assets/Images/MicrosoftTeams-image.png"
import laptop from "../../Assets/Images/laptop.jpg"
import * as icon from "../../Assets/Images/index";
import "./Common.scss"
import ReactJS from "./ReactJS";
import Css from "./Css";
import HTML from "./HTML";
import JavaScript from "./JavaScript";
import UserContext from "./UserContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css';
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";



function HomePage() {
    const user = useContext(UserContext);
    const [tabs, setTabs] = useState(0);
    const [tabsOption, setTabsOption] = useState([{ tabName: "React" }, { tabName: "Java Script" }, { tabName: "HTML" }, { tabName: "CSS & Animations" }]);
    const [mode, setMode] = useState(true);
    const [show_Me, setShow_Me] = useState(true);
    const [myPortfolio, setMyPortFolio] = useState([
        { name: "Crafting Excellence", description: "As an engineer, I am dedicated to the pursuit of excellence. My work is a testament to my unwavering commitment to quality and innovation. Whether it's developing cutting-edge software solutions or mastering the intricacies of technology, I approach every challenge with passion and precision." },
        { name: "Passion for Technology", description: "My passion for technology knows no bounds. With a profound love for both football and cricket, I understand the importance of teamwork, strategy, and dedication qualities that transcend sports and are embedded in my work." },
        { name: "Limitless Learning", description: "In my world, learning is a lifelong adventure. I thrive on exploring new horizons, mastering new skills, and staying at the forefront of technological advancements. Every day is an opportunity to learn, grow, and adapt." },
        { name: "Starry Dreams", description: "Beyond the realm of programming, my fascination with astronomy takes me on celestial journeys. Gazing at the stars, I find inspiration, wonder, and a reminder of the limitless possibilities in our universe." }]);
    const handelTabs = (e) => {
        setTabs(e);
    }
    const handelMode = () => {
        setMode(!mode)
    }
    const handelShow = () => {
        setShow_Me(!show_Me)
    }

    return (
        <>
            <div className="row ">
                <div className="col-md-12">
                    <div className="portfolio_bg">
                        {/* <div className="typing-demo">
                            Welcome to my Portfolio.
                        </div> */}
                        <div class="slider-thumb"></div>
                        <div class="wrap">
                            <p className="m-0"> Welcome to my</p>
                            <p class="flip"><span>Portfolio</span>
                                <span>Website</span>
                                <span>Story</span>
                            </p>
                        </div>
                        <div className="my_laptop">
                            {/* <div className="laptop_new"></div>
                            
                            <div  className="laptop"></div>
                            <div  className="laptop"></div>
                            <div  className="laptop"></div> */}
                            <div class="photo" style={{ transitionDelay: "200ms" }}>
                                <img src={laptop} />
                                <h1 className="headding">Skills</h1>
                                <div class="photo-overlay">
                                    <p>My Skills</p>
                                    <p>React JS</p>
                                    <p>HTML5</p>
                                    <p>Java Script</p>
                                    <p>Jquery</p>
                                    <p>CSS & Animations</p>
                                </div>
                            </div>
                            <div class="photo">
                                <img src={laptop} />
                                <h1 className="headding">Projects</h1>
                                <div class="photo-overlay">
                                    <p>My Projects</p>
                                    <p>Atlantis (Data Analysis)</p>
                                    <p>Credit Monitoring (Data Analysis)</p>
                                    <p>Popins Website (Business Analysis)</p>
                                    <p>J&K Bank (Banking)</p>
                                </div>
                            </div>
                            <div class="photo">
                                <img src={laptop} />
                                <h1 className="headding">Hobby</h1>
                                <div class="photo-overlay">
                                    <p>This is just some dummy text</p>
                                </div>
                            </div>
                            <div class="photo">
                                <img src={laptop} />
                                <h1 className="headding">Hobby</h1>
                                <div class="photo-overlay">
                                    <p>This is just some dummy text</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <div className='col-md-12'>
                    <div className='my_card flex-row justify-content-between w-100 px-5 ' >
                        <h1>💼</h1>
                        <h1 className='background_Img ' style={{ fontSize: "60px", fontWeight: "bolder", textAlign: "center" }}> ✨{user.myUser.username} Portfolio✨  </h1>
                        <div className="mode " onClick={handelMode}><span>{mode === true ? "Dark" : "Light"}</span> <img className={mode === true ? "rotate" : ""} src={mode === true ? icon.dark_mode.src : icon.light_mode.src} alt="dark" /></div>
                    </div>
                </div> */}
            </div>
            <div className="container">
                <div className="row mt-5">
                    {myPortfolio?.map((ele, ind) => {
                        return (
                            <div className="col-md-3">
                                <div className={ind % 2 === 0 ? "box_shadow p-3 my_section" : "box_shadow p-3 mt-5 my_section"} key={ind}>
                                    <div className="movingRadius"></div>
                                    <h1>{ele.name}</h1>
                                    <p>{ele.description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="row   mb-3 p-3">
                    <div className="col-md-12">
                        <div className=' align-items-start '>
                            <div className="d-flex justify-content-between w-100 px-2">
                                <h5 className="m-0 font-weight-bold"><strong>My Profile</strong></h5>
                                <div role="button" className="d-flex align-items-baseline" onClick={handelShow}>
                                    <h6 className="m-0">{show_Me ? "Show Less" : "Show More"}</h6>
                                    <img className="mx-2" src={icon.downarrow.src} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {show_Me ?
                        <>
                            <div className="col-md-3  ">
                                <div className="d-flex mt-3 my_card align-items-center flex-column ">
                                    <img className="img_cover zoom_me" src={profilePic} alt="pic" />
                                    <h5 className="m-2"><strong>Varun Hemant Lad</strong></h5>
                                    <h6 style={{ fontSize: "14px" }} className="text-secondary">Panvel | Maharashtra 📌</h6>
                                    <h6 style={{ fontSize: "14px" }} className="text-secondary">  📧 varunlad5@gmail.com</h6>
                                    <h6 style={{ fontSize: "14px" }} className="text-secondary"> 📱 +91 9834978189</h6>
                                    <h6 style={{ fontSize: "14px" }} className="text-secondary">
                                        Known more on &nbsp;
                                        <a target="_blank" href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos" style={{ fontSize: "14px" }} className="text-secondary">
                                            Linkedin
                                        </a>
                                    </h6>
                                </div>
                            </div>
                            <div className=" col-md-9 flex-column ">
                                <div className="d-flex mt-3  about_section p-3 align-items-center flex-column ">
                                    <strong>About</strong>
                                    <p className="">
                                        <br />
                                        ⚽ <strong>Sports Enthusiast:</strong> You'll often find me cheering for my favorite teams on the football pitch and cricket ground. I can talk for hours about that last-minute goal or a thrilling last-over finish!
                                        <br />
                                        🌌<strong>Starry-Eyed Explorer:</strong>  Beyond the Earthly bounds, I've got a deep fascination for astronomy. Gazing at the night sky, learning about constellations and distant galaxies is my idea of relaxation.
                                        <br />
                                        🧑‍💻 <strong> Engineer by Day:</strong>  I wear the hat of an engineer, crafting solutions to real-world challenges. My work as a software developer allows me to blend my love for technology with my analytical mindset.
                                        <br />
                                        📚 <strong>Forever a Learner:</strong>  I thrive on knowledge and believe that learning never stops. Whether it's mastering a new programming language or delving into the mysteries of the cosmos, I'm always up for the challenge.
                                        <br />    🌟 <strong>Dedicated and Hardworking:</strong>  My commitment and work ethic are the driving forces behind my success. I believe that dedication and perseverance can turn dreams into reality.I'm passionate about life and always on the lookout for new horizons to explore.</p>
                                </div>
                            </div>
                        </>
                        : null}
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">Tech Stack</h3>
                        <div className='my_card noShadow'>
                            <div className="main_tabs">
                                <ul>
                                    {tabsOption?.map((ele, ind) => {
                                        return (
                                            <li className={tabs === ind ? "active tab" : "tab"} onClick={() => { handelTabs(ind) }} key={ind}>{ele.tabName}</li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                tabs === 0 ?
                    <ReactJS /> :
                    tabs === 1 ?
                        <JavaScript /> :
                        tabs === 2 ?
                            <HTML /> : <Css />
            }
        </>
    )
}

export default (HomePage)