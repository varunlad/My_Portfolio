import React, { useContext } from "react";
import * as icon from "../../Assets/Images/index";
import UserContext from "../../Contex/UserContext";
import "./Common.scss";

function OngoingStudies() {
  const user = useContext(UserContext);
  return (
    <div className="container my_smooth_animation">
      <p>
        {" "}
        In my OngoingStudies, I am actively engaging in a variety of codeing
        technologies to broaden my knowledge and skills. This section highlights
        the current courses and self-directed learning projects I am involved
        in. By continuously updating my expertise in various subjects, I aim to
        stay at the forefront of my field and ensure my professional growth
        remains dynamic and informed.
      </p>
      <div className="row box_shadow" style={{ minHeight: "100vh" }}>
        <div className="col-md-4" style={{ position: "relative" }}>
          <div className="OngoingStudies_cards">
            <div class="content">
              <div class="front">
                <h1>Node JS</h1>
              </div>
              <div class="back">
                <p>
                  I am learning Node.js to enhance my skills in server-side
                  development and build scalable network applications. This
                  involves mastering asynchronous programming and creating
                  robust back-end solutions, furthering my capabilities as a
                  full-stack developer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{ position: "relative" }}>
          <div className="OngoingStudies_cards">
            <div class="content">
              <div class="front">
                <h1>Mongo DB</h1>
              </div>
              <div class="back">
                <p>
                  I am learning MongoDB to improve my proficiency in NoSQL
                  databases. This involves understanding data modeling,
                  querying, and optimizing performance, enhancing my ability to
                  manage and utilize large datasets effectively in application
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{ position: "relative" }}>
          <div className="OngoingStudies_cards">
            <div class="content">
              <div class="front">
                <h1>Next JS</h1>
              </div>
              <div class="back">
                <p>
                  I am learning Next.js to advance my skills in React-based web
                  development. This includes mastering server-side rendering,
                  static site generation, and building high-performance,
                  SEO-friendly web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OngoingStudies;
