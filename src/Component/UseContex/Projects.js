import React, { useContext, useState } from "react";
import "./Common.scss";
import * as icon from "../../Assets/Images/index";
import UserContext from "../../Contex/UserContext";

function Projects() {
  const user = useContext(UserContext);

  const [myProject] = useState([
    {
      name: "Atlantis (Data analysis)",
      description:
        "Atlantis is complete analysis of the key performing factors of your brand on a bird’s eye view to the deep analysis possible. It provide a single platform where you can view and understand your brand’s KPI, download them, view and schedule KPI and reports. It also give option for the users to view and schedule alerts to be sent to their mobile via SMS, WhatsApp and by email and track them.",
      icon: icon.atlantis.src,
      technologyUsed:
        "React JS ,Fusion charts, High charts, Apex charts, Material UI, Bootstrap",
    },
    {
      name: "Credit Monitoring (Financial analysis)",
      description:
        "Credit Monitoring is a comprehensive project designed to provide detailed financial insights into various brands, encompassing critical aspects such as sales, profits, losses, credit amounts, and more. Leveraging advanced data analysis techniques, the system offers daily monitoring and reporting capabilities, allowing stakeholders to make informed decisions based on accurate financial data. Through intuitive dashboards and customizable reports, Credit Monitoring empowers users to gain a deeper understanding of brand performance, identify potential risks, and optimize financial strategies for sustainable growth.",
      icon: icon.Growth_white.src,
      technologyUsed: "React JS , Apex charts,  Bootstrap",
    },
    {
      name: "Popins Website (Marketing)",
      description:
        "Popin is more than just a loyalty platform – it's a complete solution designed to make customer engagement easier and help businesses grow. It's especially helpful for small retailers, giving them useful insights to analyze and improve their operations. With Popin, businesses can better connect with customers and boost their profits for the long run.",
      icon: icon.popinsLogo.src,
      technologyUsed: "React JS, Bootstrap, Css animations ",
    },
    {
      name: "Digital Reciept (Billing system)",
      description:
        "Digital Receipt is a dynamic billing system designed to streamline the shopping experience by providing users with comprehensive digital receipts. The system generates itemized bills for purchased products, inclusive of applicable taxes. Additionally, it incorporates an intuitive discount banner feature, ensuring users are informed about available discounts and promotions. This project aims to enhance user satisfaction and facilitate transparent transactions in retail environments.",
      icon: null,
      technologyUsed: "JQuery,Razor pages",
    },
  ]);
  const [personalProjects] = useState([
    {
      name: "Typing Speed Test",
      description:
        "Check your typing speed test measures typing speed and accuracy",
      link: "https://varun-typing-speed-test.vercel.app",
      github: "https://github.com/varunlad/TypingSpeedTest",
    },
    {
      name: "User Data Management System",
      description:
        "Allows efficient searching, editing and deleting with user information.",
      link: "https://factwiseassignment-sage.vercel.app",
      github: "https://github.com/varunlad/FE-Assignment/tree/main/assignment",
    },
  ]);
  const [activeProject, setActiveProject] = useState(0);
  const handelActiveProject = (e) => {
    setActiveProject(e === activeProject ? -1 : e);
  };
  return (
    <div className="container my_smooth_animation">
      <div className="row box_shadow">
        <h3 style={{ color: "#1ed760" }}>Highlighting my key projects</h3>
        {myProject.map((ele, ind) => {
          return (
            <div className="col-md-12" key={ind}>
              <div
                className={
                  user.windownView === 0 && ind === 0
                    ? "my_projects_section mt-4"
                    : "my_projects_section"
                }
              >
                <div
                  className="my_project_heading"
                  onClick={() => {
                    handelActiveProject(ind);
                  }}
                >
                  <h4
                    className={
                      activeProject === ind
                        ? "font_big w-100 d-flex"
                        : "  d-flex w-100"
                    }
                  >
                    {ele.name}{" "}
                    {ele.icon === null ? (
                      <i className="bi bi-receipt mx-2"></i>
                    ) : (
                      <img
                        className={
                          activeProject === ind
                            ? "mx-2 selected_project"
                            : "mx-2"
                        }
                        style={{ maxWidth: "60px", maxHeight: "40px" }}
                        src={ele.icon}
                        alt="project"
                      />
                    )}
                  </h4>
                  <img
                    src={icon.new_white_down_icon.src}
                    className={
                      activeProject === ind ? "rotate_me" : "rotate_me_none"
                    }
                    alt="icon"
                  />
                </div>
                {activeProject === ind ? (
                  <div className="my_project_para grows_left flex-column">
                    <p>{ele.description}</p>
                    <p className="d-flex">
                      {" "}
                      <span className="mx-2"> &#187;</span> {ele.technologyUsed}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
        <div
          style={{
            border: "1px solid #1ed760",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          I played an helpful hand in the successful implementation and
          enhancement of projects such as :
          <ul style={{ color: "#1ed760", margin: 0 }}>
            <li>Clix</li>
            <li>J&K Bank</li>
            <li>BFL Rewards</li>
            <li>Lpass</li>
          </ul>
          It leverage my technical expertise to drive innovation, optimize
          performance, and deliver exceptional results.{" "}
        </div>
        <h3 className="mt-4 mb-4" style={{ color: "#1ed760" }}>
          {" "}
          My personal project portfolio{" "}
        </h3>
        <div className="row">
          {personalProjects?.map((ele, ind) => {
            return (
              <div className="col-md-12" key={ind}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "10px 0",
                    borderBottom: "1px solid #ccc",
                    marginBottom: "10px",
                  }}
                >
                  <h5
                    style={{
                      margin: "0",
                      fontSize: "18px",
                      flex: "1",
                      marginBottom: 10,
                    }}
                  >
                    {ele.name} {" -"}
                  </h5>
                  <p>{ele.description}</p>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      flex: "1",
                      justifyContent: "flex-end",
                    }}
                  >
                    <a
                      href={ele.link}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "#1ed760",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        border: "1px solid #1ed760",
                        transition: "background-color 0.3s",
                        textAlign: "center",
                      }}
                      alt="link"
                      rel="noreferrer"
                    >
                      View
                    </a>
                    <a
                      href={ele.github}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "#1ed760",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        border: "1px solid #1ed760",
                        transition: "background-color 0.3s",
                        textAlign: "center",
                      }}
                      rel="noreferrer"
                      alt="link"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
