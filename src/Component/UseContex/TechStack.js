import React, { useContext, useEffect, useState } from "react";
import * as icon from "../../Assets/Images/index";
import "./Common.scss";
import ReactJS from "./ReactJS";
import Css from "./Css";
import HTML from "./HTML";
import JavaScript from "./JavaScript";
import UserContext from "../../Contex/UserContext";
import Projects from "./Projects";
import OngoingStudies from "./OngoingStudies";

function TechStack() {
  const user = useContext(UserContext);
  const [tabs, setTabs] = useState(0);
  const [tabsOption, setTabsOption] = useState([
    { tabName: "React JS" },
    { tabName: "Projects" },
    { tabName: "HTML" },
    { tabName: "CSS & Animations" },
    { tabName: "Java Script" },
    { tabName: "Ongoing Studies" },
  ]);

  const handelTabs = (index) => {
    setTabs(index);
    if (user.windownView === 0) {
      const tabElement = document.getElementById(`tab_${index}`);
      const container = document.getElementById("tabsContainer");
      if (tabElement && container) {
        const scrollPosition =
          tabElement.offsetLeft -
          container.offsetWidth / 2 +
          tabElement.offsetWidth / 2;
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    scrollTop();
  }, []);
  const scrollTop = () => {
    //let myheight = document.documentElement.scrollHeight
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };

  const handelTechStack = (techVal) => {
    user.updateTechStack(techVal);
  };
  return (
    <div
      className={
        user.windownView === 0 ? "container-fluid p-4" : "container-fluid p-5"
      }
    >
      <div className="row">
        <div className="col-md-12">
          <div
            className={
              user.windownView === 0
                ? "d-flex align-items-center flex-column"
                : "d-flex justify-content-between align-items-center"
            }
          >
            <button
              onClick={() => {
                handelTechStack(!user.techStack);
              }}
              style={{ paddingLeft: "0px" }}
              className={user.windownView === 0 ? "myTech new_Tech" : "myTech"}
            >
              <img
                src={icon.new_white_down_icon.src}
                className="mx-2"
                style={{ transform: "rotate(90deg)" }}
              />
              Tech Stack
            </button>
            <div className="d-flex">
              <h4 className="m-0" style={{ textAlign: "center" }}>
                {user.myUser.username} <i className="bi bi-person-check"></i> (
                {user.myUser.stack})
              </h4>
            </div>
          </div>
          <div className="my_card noShadow">
            <div className="main_tabs">
              <ul id="tabsContainer">
                {tabsOption?.map((ele, ind) => {
                  return (
                    <li
                      id={`tab_${ind}`}
                      className={tabs === ind ? "active tab" : "tab"}
                      onClick={() => {
                        handelTabs(ind);
                      }}
                      key={ind}
                    >
                      {ele.tabName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {tabs === 0 ? (
          <ReactJS />
        ) : tabs === 1 ? (
          <Projects />
        ) : tabs === 2 ? (
          <HTML />
        ) : tabs === 3 ? (
          <Css />
        ) : tabs === 4 ? (
          <JavaScript />
        ) : (
          <OngoingStudies />
        )}
      </div>
    </div>
  );
}

export default TechStack;
