import React, { useContext, useEffect, useState } from "react";
import profilePic from "../../Assets/Images/MicrosoftTeams-image.png"
import * as icon from "../../Assets/Images/index";
import "./Common.scss"
import ReactJS from "./ReactJS";
import Css from "./Css";
import HTML from "./HTML";
import JavaScript from "./JavaScript";
import UserContext from "./UserContext";


function HomePage() {
    const user = useContext(UserContext);
    const [tabs, setTabs] = useState(0);
    const [tabsOption, setTabsOption] = useState([{ tabName: "React" }, { tabName: "Java Script" }, { tabName: "HTML" }, { tabName: "CSS & Animations" }]);
    const [mode, setMode] = useState(true);
    const [show_Me, setShow_Me] = useState(true);
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
            <div className="row">
                <div className='col-md-12'>
                    <div className='my_card flex-row w-100 px-5' >
                        <h1 className='background_Img' style={{ fontSize: "60px", fontWeight: "bolder", textAlign: "center" }}> ✨{user.myUser.username} Portfolio✨  </h1>
                        <div className="mode" onClick={handelMode}><span>{mode === true ? "Dark" : "Light"}</span> <img className={mode === true ? "rotate" : ""} src={mode === true ? icon.dark_mode.src : icon.light_mode.src} alt="dark" /></div>
                    </div>
                </div>
            </div>
            <div className="row box_shadow mb-3 p-3">
                <div className="col-md-12">
                    <div className=' align-items-start '>
                        <div className="d-flex justify-content-between w-100 px-2">
                            <h5 className="m-0 font-weight-bold">My Profile</h5>
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
                                <h6 style={{ fontSize: "14px" }} className="text-secondary">Panvel | Maharashtra</h6>
                                <h6 style={{ fontSize: "14px" }} className="text-secondary">varunlad5@gmail.com</h6>
                                <h6 style={{ fontSize: "14px" }} className="text-secondary">9834978189</h6>
                            </div>
                        </div>
                        <div className=" col-md-9 flex-column ">
                            <div className="d-flex mt-3  about_section p-3 align-items-center flex-column ">
                                <strong>About</strong>
                                <p className="zoom_me">Hey there! I'm passionate about life and always on the lookout for new horizons to explore.
                                    <br />
                                    ⚽ <strong>Sports Enthusiast:</strong> You'll often find me cheering for my favorite teams on the football pitch and cricket ground. I can talk for hours about that last-minute goal or a thrilling last-over finish!
                                    <br />
                                    🌌<strong>Starry-Eyed Explorer:</strong>  Beyond the Earthly bounds, I've got a deep fascination for astronomy. Gazing at the night sky, learning about constellations and distant galaxies is my idea of relaxation.
                                    <br />
                                    🧑‍💻 <strong> Engineer by Day:</strong>  I wear the hat of an engineer, crafting solutions to real-world challenges. My work as a software developer allows me to blend my love for technology with my analytical mindset.
                                    <br />
                                    📚 <strong>Forever a Learner:</strong>  I thrive on knowledge and believe that learning never stops. Whether it's mastering a new programming language or delving into the mysteries of the cosmos, I'm always up for the challenge.
                                    <br />
                                    🌟 <strong>Dedicated and Hardworking:</strong>  My commitment and work ethic are the driving forces behind my success. I believe that dedication and perseverance can turn dreams into reality.</p>
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