import React, { useContext, useState } from 'react'
import UserContext from '../Contex/UserContext';
import profileFav from "../Assets/Images/favicon-32.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper/modules";

function Footer() {
    const user = useContext(UserContext);
    const [myText, setMyText] = useState([
        { text: "Crafting brilliance, one line at a time." },
        { text: "Empowering innovation through elegant code." },
        { text: "Programming isn’t about what you know; it’s about what you can figure out." },
        { text: "Code is where the real drama happens."},
        { text: "The best way to predict the future is to create it." },
    ])

    return (
        <div className={user.windownView === 1 ? 'footer d-flex' : 'footer d-flex mt-4'}>
            <div className={user.windownView === 1 ? 'connect_me_footer' : 'connect_me_footer connect_me_footer_mobile'}>
                <p style={user.windownView === 0 ? {} : { fontWeight: 700 }} className='mb-0'>Connect with me on  </p>
                <a target="_blank" href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos" 
                style={{ fontSize: "16px" }} className="text-secondary gradient_headdng d-flex ms-3">
                    Linkedin <i className=" mx-1 bi bi-linkedin"></i>
                </a>
            </div>
            <div className={user.windownView === 1 ? 'gradient_bg w-100' : 'gradient_bg w-100 flex-column'} >
                <div className={user.windownView === 1 ? 'footer_left' : 'mt-4 footer_left'}>
                    <h6 className='m-0' style={user.windownView === 0 ? {} : { fontWeight: 700 }}>{user.myUser.username}'s Portfolio</h6> <img src={profileFav} className='mx-1' alt='profile' />
                </div>
                <div className={user.windownView === 1 ? 'footer_right d-flex align-items-center' : 'footer_right d-flex mt-3 align-items-center'}>
                    <p className=' d-flex ms-3 mb-0'> <h6 style={user.windownView === 0 ? {} : { fontWeight: 700 }}>Happy Coding</h6>  <i class=" mx-2 bi bi-code-square"></i></p>
                </div>
            </div>
            <div className={user.windownView === 1 ? 'footer_right d-flex align-items-center' : 'footer_right d-flex mt-3 align-items-center'}>
                {/* <p className=' d-flex  mt-3 mb-0' >Crafting brilliance, one line at a time.</p> */}
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
                    {myText?.map((ele, ind) => {
                        return (
                            <SwiperSlide key={ind} className="mySwiper_text">
                                <p className=' d-flex justify-content-center w-100 mt-0  mb-2' style={{ textAlign: "center",color:"#80D0C7" }}>{ele.text}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Footer