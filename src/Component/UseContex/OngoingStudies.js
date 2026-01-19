import { useState } from "react";
import "./Common.scss";

function OngoingStudies() {
  const [ongoingStudy] = useState([
    {
      headdind: "Node JS",
      description:
        "  I am learning Node.js to enhance my skills in server-side development and build scalable network applications. This involves mastering asynchronous programming and creating robust back-end solutions, furthering my capabilities as a full-stack developer.",
      link: "https://github.com/varunlad/Personal-Finance-Tracker-Backend",
    },
    {
      headdind: "Mongo DB",
      description:
        "I am learning MongoDB to improve my proficiency in NoSQL databases. This involves understanding data modeling, querying, and optimizing performance, enhancing my ability to manage and utilize large datasets effectively in application development.",
      link: "",
    },
    {
      headdind: "Next JS",
      description:
        "I am learning Next.js to advance my skills in React-based web development. This includes mastering server-side rendering, static site generation, and building high-performance, SEO-friendly web applications.",
      link: "https://github.com/varunlad/NextJS-FoodApp",
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
      <div className="row justify-content-around">
        {ongoingStudy?.map((ele, ind) => {
          return (
            <div key={ind} className="col-md-3 box_shadow mb-2 mt-2">
              <h1 style={{ color: "#1ed760" }}>{ele.headdind}</h1>
              <p>{ele.description}</p>
              {ele.link !== "" ? (
                <a
                  style={{ color: "#1ed760" }}
                  target="_blank"
                  href={ele.link}
                  rel="noreferrer"
                >
                  Github
                  <i class="bi bi-github mx-2"></i>
                </a>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OngoingStudies;
