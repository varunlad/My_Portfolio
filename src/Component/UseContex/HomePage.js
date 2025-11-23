import { useContext, useEffect, useRef, useState } from "react";
import my_profilePic from "../../Assets/Images/my_profile_pic.jpg";
import my_profilePic2 from "../../Assets/Images/my_profile_pic_2.jpg";

import laptop from "../../Assets/Images/laptop.jpg";
import vision from "../../Assets/Images/vision.jpg";
import project from "../../Assets/Images/project.jpg";
import hobby from "../../Assets/Images/hobby.jpg";
import * as icon from "../../Assets/Images/index";
import { Tilt } from "react-tilt";
import "./Common.scss";
import UserContext from "../../Contex/UserContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import TechStack from "./TechStack";
import ScrollToTopButton from "./ScrollToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import Chart from "react-apexcharts";
import "./chart.css";

function HomePage() {
  const user = useContext(UserContext);
  const [currentURl] = useState(window.location.href);
  const [show_Me] = useState(true);
  const [profileToggel, setProfileToggel] = useState(true);
  const [myExperience, setMyExperience] = useState();
  const [myPortfolio] = useState([
    {
      name: "Crafting Excellence",
      description:
        "As an engineer, I am dedicated to the pursuit of excellence. My work is a testament to my unwavering commitment to quality and innovation. Whether it's developing cutting-edge software solutions or mastering the intricacies of technology, I approach every challenge with passion and precision.",
    },
    {
      name: "Passion for Technology",
      description:
        "My unyielding passion for technology drives my commitment to innovation and excellence. I thrive on collaboration and strategic thinking, leveraging these qualities to push the boundaries of what's possible in my work.",
    },
    {
      name: "Limitless Learning",
      description:
        "In my world, learning is a lifelong adventure. I thrive on exploring new horizons, mastering new skills, and staying at the forefront of technological advancements. Every day is an opportunity to learn, grow, and adapt.",
    },
    {
      name: "Starry Dreams",
      description:
        "Beyond the realm of programming, my fascination with astronomy takes me on celestial journeys. Gazing at the stars, I find inspiration, wonder, and a reminder of the limitless possibilities in our universe.",
    },
  ]);
  const [aboutMe] = useState([
    {
      heading: "Forever a Learner",
      description:
        "I thrive on knowledge and believe that learning never stops. Whether it's mastering a new programming language, exploring advanced algorithms, or delving into the mysteries of the cosmos, I'm always up for the challenge. I find joy in expanding my understanding of complex systems and pushing the boundaries of what's possible. With each new subject I tackle, I gain valuable insights that fuel my curiosity and drive for continuous improvement. My passion for learning extends beyond the realm of technology, as I eagerly explore diverse fields to broaden my perspective and deepen my understanding of the world around me.",
      backgrounImg: "../../Assets/Images/hardworking.jpg",
    },
    {
      heading: "Dedicated and Hardworking",
      description:
        "My unwavering commitment and tireless work ethic are the cornerstone of my success, driving me to surpass expectations and achieve remarkable results. I firmly believe that dedication and perseverance, coupled with a relentless pursuit of excellence, have the power to transform dreams into tangible realities. Fueled by an insatiable thirst for knowledge and a boundless curiosity, I approach each endeavor with unwavering enthusiasm and a determination to leave no stone unturned. Passion courses through my veins, infusing every project with a sense of purpose and vitality. I thrive on the thrill of discovery, constantly seeking out new horizons to explore and challenges to conquer.",
      backgrounImg: "../../Assets/Images/sport_pitch.jpg",
    },
    {
      heading: "Engineer by Day",
      description:
        "As an engineer, I tackle real-world problems head-on. Working as a software developer, I fuse my love for technology with a knack for analysis. I craft solutions that are not only effective but also intuitive. Every project I undertake is an opportunity to create something meaningful, where simplicity and efficiency are key. My goal is to make technology accessible and user-friendly, one line of code at a time.",
      backgrounImg: "../../Assets/Images/sport_pitch.jpg",
    },
    {
      heading: "Sports Enthusiast",
      description:
        "You'll often find me fully engaged in the vibrant atmosphere of the football pitch or the competitive spirit of the cricket ground, passionately cheering for my favorite teams. With every match, I'm captivated by the excitement of a last minute goal or the tension of a thrilling last-over finish. From analyzing tactics to debating player performances, I can effortlessly engage in discussions, sharing insights that reveal my deep love for the game.",
      backgrounImg: "../../Assets/Images/sport_pitch.jpg",
    },
    {
      heading: "Starry-Eyed Explorer",
      description:
        "Beyond the confines of Earth, I'm captivated by the vastness of the cosmos. With each glimpse into the night sky, constellations and distant galaxies beckon me on an endless journey of discovery. Astronomy isn't just a hobby it's a profound exploration of the unknown, a quest to unravel the mysteries of existence and find my place within the cosmic tapestry.",
      backgrounImg: "../../Assets/Images/sport_pitch.jpg",
    },
  ]);
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const [series, setSeries] = useState([
    {
      name: "HTML",
      data: [{ x: "HTML", y: 20 }],
    },
    {
      name: "CSS & Animation",
      data: [{ x: "CSS & Animation", y: 10 }],
    },
    {
      name: "JavaScript",
      data: [{ x: "JavaScript", y: 20 }],
    },
    {
      name: "jQuery",
      data: [{ x: "jQuery", y: 10 }],
    },
    {
      name: "TypeScript",
      data: [{ x: "TypeScript", y: 10 }],
    },
    {
      name: "React JavaScript",
      data: [{ x: "React JS", y: 30 }],
    },
  ]);
  const [options] = useState({
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          var index = config.selectedDataPoints.length;
          handleStrock(index);
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%";
        },
      },
    },
    title: {
      text: "",
      align: "center",
    },
  });
  const [selected, setSelected] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState();
  const [selectedStack, setSelectedStack] = useState("");
  const cursorRef = useRef(null);
  const handleStrock = (index) => {
    switch (index) {
      case 1:
        setSelectedStack("HTML");
        setSelectedSeries([40, 20, 10, 10, 20]);
        handleSelectedOptions([
          "HTML Structure",
          "Flex-Box",
          "Forms",
          "Semantic Tags",
          "Inline & Block Elements",
        ]);
        setSelected([
          "HTML Structure",
          "Flex-Box",
          "Forms",
          "Semantic Tags",
          "Inline & Block Elements",
        ]);
        break;

      case 2:
        setSelectedStack("CSS & Animation");
        setSelectedSeries([30, 20, 30, 20]);
        handleSelectedOptions([
          "Animating Semantic Tags for Smooth Transitions",
          "Styling Form Elements with CSS for Enhanced Appearance",
          "Controlling Layout and Appearance of Inline Elements with CSS",
          "Applying CSS Animations to Block Elements for Dynamic Layout Transitions",
        ]);
        setSelected([
          "Animating Semantic Tags for Smooth Transitions.",
          "Styling Form Elements with CSS for Enhanced Appearance.",
          "Controlling Layout and Appearance of Inline Elements with CSS",
          "Applying CSS Animations to Block Elements for Dynamic Layout Transitions",
        ]);
        break;

      case 3:
        setSelectedStack("JavaScript");
        setSelectedSeries([20, 10, 40, 10, 20]);
        handleSelectedOptions([
          "Arrow Functions",
          "API calling",
          "Async/Await",
          "Template Literals",
          "Spread Operetor",
        ]);
        setSelected([
          "Arrow Functions",
          "API calling",
          "Async/Await",
          "Template Literals",
          "Spread Operetor",
        ]);
        break;

      case 4:
        setSelectedStack("JQuery");
        setSelectedSeries([40, 10, 10, 20, 20]);
        handleSelectedOptions([
          "DOM Manipulation",
          "Event Handling",
          "AJAX Requests",
          "Animations & Effects",
        ]);
        setSelected([
          "DOM Manipulation",
          "Event Handling",
          "AJAX Requests",
          "Animations & Effects",
        ]);
        break;

      case 5:
        setSelectedStack("TypeScript");
        setSelectedSeries([30, 30, 10, 10, 20]);
        handleSelectedOptions([
          "Type Annotations",
          "Interfaces",
          "Enums",
          "Generics",
          "Decorators",
        ]);
        setSelected([
          "Type Annotations",
          "Interfaces",
          "Enums",
          "Generics",
          "Decorators",
        ]);
        break;

      case 6:
        setSelectedStack("React JS");
        setSelectedSeries([10, 30, 20, 20, 20]);
        handleSelectedOptions([
          "Redux",
          "Components",
          "State and Props",
          "Lifecycle Methods",
          "Hooks",
        ]);
        setSelected([
          "Redux",
          "Components",
          "State and Props",
          "Lifecycle Methods",
          "Hooks",
        ]);
        break;

      default:
        console.warn("Invalid index provided");
        break;
    }
  };
  const handleSelectedOptions = (options) => {
    setSelectedOptions({
      legend: {
        show: false,
        color: "#fff",
      },
      chart: {
        type: "polarArea",
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + "%";
          },
        },
      },

      labels: options,
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.9,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    });
  };

  const myExperienceFunction = () => {
    let currentDate = new Date();
    let startYear = 2021;
    let startMonth = 11; // Assuming the start month is January (0-indexed)

    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth(); // 0-indexed month

    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    // If the current month is earlier in the year than the start month,
    // we need to subtract one year and adjust the months
    if (months < 0) {
      years--;
      months += 12;
    }

    let totalExperience = years + months / 12;
    return totalExperience.toFixed(1); // Rounded to 1 decimal place
  };
  useEffect(() => {
    setMyExperience(myExperienceFunction());
    scrollTop();
    ///AOS///
    AOS.init({
      offset: 10,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
      //disable: 'mobile',
      once: true,
    });
    loop(); // start the cursor animation loop
  }, []);
  const scrollTop = () => {
    //let myheight = document.documentElement.scrollHeight
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };

  const handelTechStack = (techVal) => {
    window._paq.push([
      "trackEvent",
      "Tech_Stack_Click",
      "Click",
      "Tech_Stack_Click",
    ]);
    console.log("Tech_Stack_Click");
    user.updateTechStack(techVal);
  };

  const cursor = document.querySelector("#cursor");
  let mouse = { x: 300, y: 300 };
  let pos = { x: 0, y: 0 };
  const speed = 0.1; // between 0 and 1

  const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    if (cursorRef.current) {
      // check if the ref is defined before accessing its properties
      cursorRef.current.style.transform =
        "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
    }
  };

  const updateCoordinates = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener("mousemove", updateCoordinates);

  function loop() {
    updatePosition();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <>
      {/* <div id="cursor" ref={cursorRef}>
                <div className="cursor--inner"></div>
            </div> */}
      {!user.techStack ? (
        <>
          <div className="row ">
            <div className="col-md-5">
              <div className=" d-flex portfolio_bg">
                <div className="slider-thumb"></div>
                <div className="wrap flex-column"></div>
                {user.windownView === 0 && (
                  <button
                    onClick={() => {
                      handelTechStack(!user.techStack);
                    }}
                    className="myTech"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Tech Stack{" "}
                    <img src={icon.new_white_down_icon.src} alt="icon" />
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-7 ">
              <div className=" wrap ">
                <div className="d-flex">
                  <div className="m-0 pt-3">
                    <h1>Welcome to my</h1>
                  </div>
                  <p className="flip">
                    <span>Portfolio</span>
                    <span>Profile</span>
                    <span>Story</span>
                  </p>
                </div>
                {user.windownView === 1 && (
                  <button
                    onClick={() => {
                      handelTechStack(!user.techStack);
                    }}
                    className="myTech"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Tech Stack{" "}
                    <img src={icon.new_white_down_icon.src} alt="icon" />
                  </button>
                )}
              </div>
              <h1 className="developer_headding">
                {" "}
                <br />
                <span style={{ whiteSpace: "nowrap" }}>
                  {" "}
                  I'm a Software
                </span>{" "}
                <strong className="gradient_headdng">Developer</strong>
              </h1>
              <p className="developer_description ">
                {" "}
                As software development expert I possesses in-depth knowledge
                and experience in creating and maintaining websites and web
                applications. My expertise extends to various web technologies
                such as HTML, CSS & Animations, JavaScript, Jquery, Typescript,
                React Js. I excel in designing user-friendly, responsive, and
                secure web solutions, ensuring optimal performance and user
                experience.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row   mb-3 p-3">
              <div className="col-md-12 ">
                <div className=" align-items-start ">
                  <div className="d-flex w-100 px-2">
                    <div className="movingRadius"></div>
                    <h1 className="mb-4 mt-2 position-relative fw-bold">
                      My Profile
                    </h1>
                  </div>
                </div>
              </div>
              {show_Me ? (
                <>
                  <div className="col-md-3">
                    <div
                      className="d-flex mt-3 my_card align-items-center flex-column"
                      style={{ height: "340px" }}
                    >
                      <div
                        onClick={() => setProfileToggel(!profileToggel)}
                        className="my_profile_toggle"
                      >
                        {/* <img
                          style={{ width: "15px" }}
                          src={icon.new_white_down_icon.src}
                          className={profileToggel ? "" : "rotate_me "}
                          alt="icon"
                        /> */}
                        <i className={profileToggel ? "bi bi-arrow-down-up" : "rotate_me bi bi-arrow-down-up"}></i>
                      </div>
                      {isIOS ? (
                        <div className="img_cover">
                          <img
                            src={profileToggel ? my_profilePic : my_profilePic2}
                            alt="profile"
                          />
                        </div>
                      ) : (
                        <Tilt options={defaultOptions}>
                          <div className="img_cover">
                            <img
                              src={
                                profileToggel ? my_profilePic : my_profilePic2
                              }
                              alt="profile"
                            />
                          </div>
                        </Tilt>
                      )}

                      <h5 className="m-2">
                        <strong className="myColor">
                          {user.myUser.username}
                        </strong>
                      </h5>
                      {profileToggel ? (
                        <div className="d-flex flex-column justify-content-center align-items-center fade_me">
                          <div>
                            <h6
                              style={{ fontSize: "14px", color: "#6C757D" }}
                              className="text-secondary d-flex"
                            >
                              <span
                                className="mx-1 myColor"
                                style={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                {myExperience}+
                              </span>{" "}
                              years of experience{" "}
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary"
                            >
                              Panvel | Maharashtra{" "}
                              <i className="bi bi-geo-alt"></i>{" "}
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary"
                            >
                              <a
                                className="text-secondary"
                                href="mailto:varunlad5@gmail.com"
                              >
                                varunlad5@gmail.com
                              </a>{" "}
                              <i className="bi bi-envelope-at-fill"></i>
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary"
                            >
                              {" "}
                              +91 9834978189 <i className="bi bi-phone"></i>
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary d-flex"
                            >
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos"
                                style={{ fontSize: "14px" }}
                                className="text-secondary d-flex"
                                rel="noreferrer"
                              >
                                Linkedin{" "}
                                <i className=" mx-1 bi bi-linkedin"></i>
                              </a>
                              &
                              <a
                                target="_blank"
                                href="https://github.com/varunlad"
                                style={{ fontSize: "14px" }}
                                className="text-secondary d-flex mx-1"
                                rel="noreferrer"
                              >
                                Github <i className=" mx-1 bi bi-github"></i>
                              </a>
                            </h6>
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex flex-column justify-content-center align-items-center ">
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary"
                            >
                              Currently working at
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary d-flex fade_me"
                            >
                              <span
                                className="mx-1 myColor"
                                style={{ fontSize: "12px", fontWeight: 700 }}
                              >
                                SourceMash Technologies
                              </span>
                            </h6>
                          </div>
                          <div>
                            {" "}
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary"
                            >
                              Designation{" "}
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary d-flex fade_me mb-3"
                            >
                              <span
                                className="mx-1 myColor"
                                style={{ fontSize: "12px", fontWeight: 700 }}
                              >
                                {" "}
                                Software Developer
                              </span>
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{ fontSize: "14px" }}
                              className="text-secondary d-flex"
                            >
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos"
                                style={{ fontSize: "14px" }}
                                className="text-secondary d-flex"
                                rel="noreferrer"
                              >
                                Linkedin{" "}
                                <i className=" mx-1 bi bi-linkedin"></i>
                              </a>
                              &
                              <a
                                target="_blank"
                                href="https://github.com/varunlad"
                                style={{ fontSize: "14px" }}
                                className="text-secondary d-flex mx-1"
                                rel="noreferrer"
                              >
                                Github <i className=" mx-1 bi bi-github"></i>
                              </a>
                            </h6>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className=" col-md-9 flex-column ">
                    <div className="d-flex mt-3  about_section p-3 align-items-center flex-column box_shadow ">
                      <Swiper
                        autoplay={{
                          delay: 3000,
                        }}
                        pagination={
                          ({ dynamicBullets: false }, { clickable: true })
                        }
                        navigation={false}
                        modules={[Autoplay, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        speed={3000}
                        className="w-100 "
                        style={{ height: "100%" }}
                      >
                        {aboutMe?.map((ele, ind) => {
                          return (
                            <SwiperSlide
                              key={ind}
                              style={{
                                backgroundImage: `url(${
                                  currentURl + "/" + ele.backgrounImg
                                })`,
                              }}
                              className="mySwiper"
                            >
                              <h1 className="myColor">{ele.heading}</h1>
                              <p className="p-3 w-75">{ele.description}</p>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="container mt-5 mb-5">
            <div className="my_laptop row">
              <div
                className="col-md-3"
                data-aos-duration="750"
                data-aos="fade-right"
              >
                <div className="photo  " style={{ transitionDelay: "200ms" }}>
                  <img src={laptop} alt="skills" />
                  <h1 className="headding">Skills</h1>
                  <div className="photo-overlay">
                    <p>My Skills</p>
                    <p>React JS</p>
                    <p>HTML5</p>
                    <p>Java Script</p>
                    <p>Jquery</p>
                    <p>TypeScript</p>
                    <p>CSS & Animations</p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                data-aos-duration="750"
                data-aos="fade-left"
              >
                <div className="photo ">
                  <img src={project} alt="project" />
                  <h1 className="headding">Projects</h1>
                  <div className="photo-overlay">
                    <p>My Projects</p>
                    <p>Atlantis (Data Analysis)</p>
                    <p>Credit Monitoring(Finance Analysis)</p>
                    <p>Clix (Business Analysis)</p>
                    <p>Digital Reciept (Billing system)</p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                data-aos-duration="750"
                data-aos="fade-right"
              >
                <div className="photo ">
                  <img src={vision} alt="vision" />
                  <h1 className="headding">Vision</h1>
                  <div className="photo-overlay">
                    <p>My Vision</p>
                    <p>Empowering Innovation</p>
                    <p>Digital Inclusivity</p>
                    <p>Continuous Learning and Growth</p>
                    <p>Open Source and Collaboration</p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                data-aos-duration="750"
                data-aos="fade-left"
              >
                <div className="photo ">
                  <img src={hobby} alt="hobby" />
                  <h1 className="headding">Hobby</h1>
                  <div className="photo-overlay">
                    <p>My Hobbies</p>
                    <p>Football & Cricket Enthusiast</p>
                    <p>Music Appreciation</p>
                    <p>Outdoor Adventurer</p>
                  </div>
                </div>
              </div>
              <div
                data-aos-duration="750"
                data-aos={selectedSeries.length > 0 ? "zoom-in" : "fade-left"}
                className={
                  selectedSeries.length > 0
                    ? "col-md-6 mt-4 "
                    : "col-md-12 mt-4"
                }
              >
                <div className=" align-items-start">
                  <div
                    onClick={() => {
                      handelTechStack(!user.techStack);
                    }}
                    className="d-flex align-items-baseline w-100 px-2 cursor-pointer"
                  >
                    <div className="movingRadius"></div>
                    <h1 className="mb-4 mt-2 position-relative fw-bold">
                      My Tech Stack
                      <i className="bi bi-arrow-right-circle-fill mx-2"></i>
                    </h1>
                  </div>
                </div>
                <Chart
                  options={options}
                  series={series}
                  type="treemap"
                  height={350}
                />
              </div>
              {selectedSeries.length > 0 && (
                <div className="col-md-6  mt-4" data-aos="fade-right">
                  <div className=" align-items-start ">
                    <div className="d-flex w-100 px-2">
                      <div className="movingRadius"></div>
                      <h1 className="mb-4 mt-2 position-relative fw-bold">
                        {selectedStack}
                      </h1>
                    </div>
                  </div>
                  <Chart
                    options={selectedOptions}
                    series={selectedSeries}
                    type="polarArea"
                    height={350}
                  />
                  {user.windownView === 0 && (
                    <ul>
                      {selected.map((ele, ind) => {
                        return (
                          <li className="px-4" key={ind}>
                            {ele}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="sun">
              <div className="container">
                <div
                  className={
                    user.windownView === 0
                      ? "row my_mobile_movingRadius "
                      : "row mt-5 mb-5"
                  }
                >
                  <div className="movingRadius"></div>
                  <h1 className="mb-5 position-relative fw-bold">
                    Career Objective
                  </h1>
                  {myPortfolio?.map((ele, ind) => {
                    return (
                      <div
                        data-aos-duration="750"
                        data-aos={ind % 2 === 0 ? "fade-up" : "fade-down"}
                        className="col-md-3"
                        key={ind}
                      >
                        <div
                          className={
                            ind % 2 === 0
                              ? "box_shadow p-3 my_section"
                              : "box_shadow p-3 mt-5 my_section"
                          }
                          key={ind}
                        >
                          <h1 className="gradient_headdng">{ele.name}</h1>
                          <p>{ele.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <TechStack />
      )}
      <ScrollToTopButton />
    </>
  );
}

export default HomePage;
