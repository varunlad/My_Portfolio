import React, { useContext, useState } from "react";
import * as icon from "../../Assets/Images/index";
import UserContext from "../../Contex/UserContext";
import "./Common.scss";

function OngoingStudies() {
  const user = useContext(UserContext);
  const [ongoingStudy, setOnGoingStudy] = useState([
    {
      headdind: "Node JS",
      description:
        "  I am learning Node.js to enhance my skills in server-side development and build scalable network applications. This involves mastering asynchronous programming and creating robust back-end solutions, furthering my capabilities as a full-stack developer.",
    },
    {
      headdind: "Mongo DB",
      description:
        "I am learning MongoDB to improve my proficiency in NoSQL databases. This involves understanding data modeling, querying, and optimizing performance, enhancing my ability to manage and utilize large datasets effectively in application development.",
    },
    {
      headdind: "Next JS",
      description:
        "I am learning Next.js to advance my skills in React-based web development. This includes mastering server-side rendering, static site generation, and building high-performance, SEO-friendly web applications.",
    },
  ]);
  return (
    <div className="container my_smooth_animation">
      <p>
        In my Ongoing Studies, I am actively engaging in a variety of coding
        technologies to broaden my knowledge and skills. This section highlights
        the current courses and self-directed learning projects I am involved
        in. By continuously updating my expertise in various subjects, I aim to
        stay at the forefront of my field and ensure my professional growth
        remains dynamic and informed.
      </p>
      {user.windownView === 0 ? (
        <div className="row ">
          {ongoingStudy?.map((ele, ind) => {
            return (
              <div key={ind} className="col-md-4 box_shadow mb-4">
                <h1 style={{ color: "#1ed760" }}>{ele.headdind}</h1>
                <p>{ele.description}</p>
                {ele.headdind === "Node JS" && (
                  <a
                    style={{ color: "#1ed760" }}
                    target="_blank"
                    href="https://github.com/varunlad/mycontacts-backend"
                  >
                    Github 
                    <i class="bi bi-github mx-2"></i>
                  </a>
                )}
                {ele.headdind === "Next JS" && (
                  <a
                    style={{ color: "#1ed760" }}
                    target="_blank"
                    href="https://github.com/varunlad/NextJS-FoodApp"
                  >
                    Github 
                    <i class="bi bi-github mx-2"></i>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="row box_shadow" style={{ minHeight: "100vh" }}>
          {ongoingStudy?.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="col-md-4 "
                style={{ position: "relative" }}
              >
                <div className="OngoingStudies_cards">
                  <div class="content">
                    <div class="front">
                      <h1>{ele.headdind}</h1>
                    </div>
                    <div class="back">
                      <p>{ele.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OngoingStudies;
