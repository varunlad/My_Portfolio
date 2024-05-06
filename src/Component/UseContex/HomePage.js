import React, { useContext, useEffect, useState } from "react";
import profilePic from "../../Assets/Images/my_dp.jpg"
import laptop from "../../Assets/Images/laptop.jpg"
import vision from "../../Assets/Images/vision.jpg"
import project from "../../Assets/Images/project.jpg"
import hobby from "../../Assets/Images/hobby.jpg"
import * as icon from "../../Assets/Images/index";
import "./Common.scss"
import UserContext from "../../Contex/UserContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay} from "swiper/modules";
import TechStack from "./TechStack";
import Footer from "../../Common/Footer";




function HomePage() {
    const user = useContext(UserContext);
    const [currentURl, setCurrentURL] = useState(window.location.href);
    const [show_Me, setShow_Me] = useState(true);
    const [myExperience, setMyExperience] = useState();
    const [myPortfolio, setMyPortFolio] = useState([
        { name: "Crafting Excellence", description: "As an engineer, I am dedicated to the pursuit of excellence. My work is a testament to my unwavering commitment to quality and innovation. Whether it's developing cutting-edge software solutions or mastering the intricacies of technology, I approach every challenge with passion and precision." },
        { name: "Passion for Technology", description: "My passion for technology knows no bounds. With a profound love for both football and cricket, I understand the importance of teamwork, strategy, and dedication qualities that transcend sports and are embedded in my work." },
        { name: "Limitless Learning", description: "In my world, learning is a lifelong adventure. I thrive on exploring new horizons, mastering new skills, and staying at the forefront of technological advancements. Every day is an opportunity to learn, grow, and adapt." },
        { name: "Starry Dreams", description: "Beyond the realm of programming, my fascination with astronomy takes me on celestial journeys. Gazing at the stars, I find inspiration, wonder, and a reminder of the limitless possibilities in our universe." }]);
    const [aboutMe, setAboutMe] = useState([
        { heading: "Forever a Learner", description: "I thrive on knowledge and believe that learning never stops. Whether it's mastering a new programming language, exploring advanced algorithms, or delving into the mysteries of the cosmos, I'm always up for the challenge. I find joy in expanding my understanding of complex systems and pushing the boundaries of what's possible. With each new subject I tackle, I gain valuable insights that fuel my curiosity and drive for continuous improvement. My passion for learning extends beyond the realm of technology, as I eagerly explore diverse fields to broaden my perspective and deepen my understanding of the world around me.",         backgrounImg: "../../Assets/Images/hardworking.jpg" },
        { heading: "Dedicated and Hardworking", description:"My unwavering commitment and tireless work ethic are the cornerstone of my success, driving me to surpass expectations and achieve remarkable results. I firmly believe that dedication and perseverance, coupled with a relentless pursuit of excellence, have the power to transform dreams into tangible realities. Fueled by an insatiable thirst for knowledge and a boundless curiosity, I approach each endeavor with unwavering enthusiasm and a determination to leave no stone unturned. Passion courses through my veins, infusing every project with a sense of purpose and vitality. I thrive on the thrill of discovery, constantly seeking out new horizons to explore and challenges to conquer.", backgrounImg: "../../Assets/Images/sport_pitch.jpg" },
        { heading: "Engineer by Day", description: "As an engineer, I tackle real-world problems head-on. Working as a software developer, I fuse my love for technology with a knack for analysis. I craft solutions that are not only effective but also intuitive. Every project I undertake is an opportunity to create something meaningful, where simplicity and efficiency are key. My goal is to make technology accessible and user-friendly, one line of code at a time.", backgrounImg: "../../Assets/Images/sport_pitch.jpg" },
        { heading: "Sports Enthusiast", description: "You'll often find me fully engaged in the vibrant atmosphere of the football pitch or the competitive spirit of the cricket ground, passionately cheering for my favorite teams. With every match, I'm captivated by the excitement of a last minute goal or the tension of a thrilling last-over finish. From analyzing tactics to debating player performances, I can effortlessly engage in discussions, sharing insights that reveal my deep love for the game.", backgrounImg: "../../Assets/Images/sport_pitch.jpg" },
        { heading: "Starry-Eyed Explorer", description: "Beyond the confines of Earth, I'm captivated by the vastness of the cosmos. With each glimpse into the night sky, constellations and distant galaxies beckon me on an endless journey of discovery. Astronomy isn't just a hobby it's a profound exploration of the unknown, a quest to unravel the mysteries of existence and find my place within the cosmic tapestry.", backgrounImg: "../../Assets/Images/sport_pitch.jpg" },
    ]);
    
    useEffect(()=>{

        let currentDate = new Date(); 
        let currentYear = currentDate.getFullYear();
        setMyExperience(currentYear - 2022);
        scrollTop();
    },[]);
    const scrollTop = () => {
        //let myheight = document.documentElement.scrollHeight  
        window.scrollTo({
          top: 1,
          behavior: 'smooth'
        });
    }

    const handelTechStack = (techVal) => {
        user.updateTechStack(techVal)
    }
    return (
        <>
            {!user.techStack ?
                <>
                    <div className="row ">
                        <div className="col-md-5">
                            <div className=" d-flex portfolio_bg">
                                <div className="slider-thumb"></div>
                                <div className="wrap flex-column">
                                </div>
                                {user.windownView === 0 &&
                                <button onClick={() => { handelTechStack(!user.techStack) }} className="myTech" style={{whiteSpace:"nowrap"}}>Tech Stack <img src={icon.new_white_down_icon.src} /></button> }
                            </div>
                        </div>
                        <div className="col-md-7 ">
                            <div className=" wrap ">
                                <div className="d-flex">
                                    <p className="m-0 pt-3"><h1>Welcome to my</h1></p>
                                    <p className="flip"><span>Portfolio</span>
                                        <span>Profile</span>
                                        <span>Story</span>
                                    </p>
                                </div>
                                {user.windownView === 1 &&
                                <button onClick={() => { handelTechStack(!user.techStack) }} className="myTech" style={{whiteSpace:"nowrap"}}>Tech Stack <img src={icon.new_white_down_icon.src} /></button> }
                            </div>
                            <h1 className="developer_headding">  <br /><span style={{whiteSpace:"nowrap"}}>  I'm a Web</span>  <strong className="gradient_headdng">Developer</strong></h1>
                            <p className="developer_description "> As web development expert I possesses in-depth knowledge and experience in creating and maintaining websites and web applications. My expertise extends to various web technologies such as HTML, CSS, JavaScript, Jquery, Typescript, React Js. I excel in designing user-friendly, responsive, and secure web solutions, ensuring optimal performance and user experience.</p>

                        </div>
                    </div>
                    <div className="container">
                        <div className="row   mb-3 p-3">
                            <div className="col-md-12 ">
                                <div className=' align-items-start '>
                                    <div className="d-flex w-100 px-2">
                                        <div className="movingRadius"></div>
                                        <h1 className="mb-4 mt-2 position-relative fw-bold">My Profile</h1>
                                    </div>
                                </div>
                            </div>
                            {show_Me ?
                                <>
                                    <div className="col-md-3  ">
                                        <div className="d-flex mt-3 my_card align-items-center flex-column  ">
                                            <img className="img_cover zoom_me" src={profilePic} alt="pic" />
                                            <h5 className="m-2"><strong className="myColor">{user.myUser.username}</strong></h5>
                                            <h6 style={{ fontSize: "14px" }} className="text-secondary d-flex"><span className="mx-1 myColor" style={{ fontSize: "16px",fontWeight:700 }}>{myExperience}+</span> years of experience </h6>
                                            <h6 style={{ fontSize: "14px" }} className="text-secondary">Panvel | Maharashtra <i class="bi bi-geo-alt"></i> </h6>
                                            <h6 style={{ fontSize: "14px" }} className="text-secondary"> varunlad5@gmail.com <i class="bi bi-envelope-at-fill"></i></h6>
                                            <h6 style={{ fontSize: "14px" }} className="text-secondary"> +91 9834978189 <i class="bi bi-phone"></i></h6>
                                            <h6 style={{ fontSize: "14px" }} className="text-secondary d-flex">
                                                Known more on &nbsp;
                                                <a target="_blank" href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos" style={{ fontSize: "14px" }} className="text-secondary d-flex">
                                                    Linkedin   <i className=" mx-1 bi bi-linkedin"></i>
                                                </a>
                                            </h6>

                                        </div>
                                    </div>
                                    <div className=" col-md-9 flex-column ">
                                        <div className="d-flex mt-3  about_section p-3 align-items-center flex-column box_shadow ">
                                            <Swiper
                                                autoplay={{
                                                    delay: 3000,
                                                }}
                                                pagination={({ dynamicBullets: false }, { clickable: true })}
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
                                                        <SwiperSlide key={ind} style={{ backgroundImage: `url(${currentURl + "/" + ele.backgrounImg})` }} className="mySwiper">
                                                            <h1 className="myColor">{ele.heading}</h1>
                                                            <p className="p-3 w-75">{ele.description}</p>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>

                    </div>
                    <div className="container mt-5 mb-5">
                        <div className="my_laptop row">
                            <div className="col-md-3">
                                <div className="photo  " style={{ transitionDelay: "200ms" }}>
                                    <img src={laptop} />
                                    <h1 className="headding">Skills</h1>
                                    <div className="photo-overlay">
                                        <p>My Skills</p>
                                        <p>React JS</p>
                                        <p>HTML5</p>
                                        <p>Java Script</p>
                                        <p>Jquery</p>
                                        <p>CSS & Animations</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="photo ">
                                    <img src={project} />
                                    <h1 className="headding">Projects</h1>
                                    <div className="photo-overlay">
                                        <p>My Projects</p>
                                        <p>Atlantis (Data Analysis)</p>
                                        <p>Credit Monitoring (Data Analysis)</p>
                                        <p>Popins Website (Business Analysis)</p>
                                        <p>J&K Bank (Banking)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="photo ">
                                    <img src={vision} />
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

                            <div className="col-md-3">
                                <div className="photo ">
                                    <img src={hobby} />
                                    <h1 className="headding">Hobby</h1>
                                    <div className="photo-overlay">
                                        <p>My Hobbies</p>
                                        <p>Football & Cricket Enthusiast</p>
                                        <p>Music Appreciation</p>
                                        <p>Outdoor Adventurer</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="row  ">
                        <div className="sun">
                            <div className="container">
                                <div className={user.windownView === 0 ? "row my_mobile_movingRadius " : "row mt-5 mb-5"}>
                                    <div className="movingRadius"></div>
                                    <h1 className="mb-5 position-relative fw-bold">Career Objective</h1>
                                    {myPortfolio?.map((ele, ind) => {
                                        return (
                                            <div className="col-md-3">
                                                <div className={ind % 2 === 0 ? "box_shadow p-3 my_section" : "box_shadow p-3 mt-5 my_section"} key={ind}>
                                                    {/* <div className="movingRadius"></div> */}
                                                    <h1 >{ele.name}</h1>
                                                    <p>{ele.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </>
                :
                <TechStack />
            }
            <Footer />
        </>
    )
}

export default (HomePage)