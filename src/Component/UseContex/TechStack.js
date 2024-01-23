import React, { useContext, useEffect, useState } from "react";
import * as icon from "../../Assets/Images/index";
import "./Common.scss"
import ReactJS from "./ReactJS";
import Css from "./Css";
import HTML from "./HTML";
import JavaScript from "./JavaScript";
import UserContext from "../../Contex/UserContext";

function TechStack() {
    const user = useContext(UserContext);
    const [tabs, setTabs] = useState(0);
    const [tabsOption, setTabsOption] = useState([{ tabName: "React" }, { tabName: "Java Script" }, { tabName: "HTML" }, { tabName: "CSS & Animations" }]);
    const handelTabs = (e) => {
        setTabs(e);
    }
    const handelTechStack = (techVal) => {
        user.updateTechStack(techVal)
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="mx-2 p-2" style={{transform:"rotate(90deg)", cursor:"pointer", border:"1px solid #fff", borderRadius:"3px"}} onClick={() => { handelTechStack(!user.techStack) }} src={icon.new_white_down_icon.src}/>
                        <h3 className="text-center m-0">Tech Stack</h3>
                    </div>
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
                {
                    tabs === 0 ?
                        <ReactJS /> :
                        tabs === 1 ?
                            <JavaScript /> :
                            tabs === 2 ?
                                <HTML /> : <Css />
                }
            </div>
        </div>
    )
}

export default TechStack