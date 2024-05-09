import React, { useContext } from 'react'
import UserContext from '../Contex/UserContext';
import profileFav from "../Assets/Images/favicon-32.png"

function Footer() {
    const user = useContext(UserContext);

    return (
        <div className={user.windownView === 1 ? 'footer d-flex' : 'footer d-flex mt-4'}>
            {/* <div className='d-flex'>
            {user.windownView === 1 &&
            <p className='mb-0'>Connect me on  </p> }
            <a target="_blank" href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos" style={{ fontSize: "16px" }} className="text-secondary gradient_headdng d-flex ms-3">
                Linkedin <i className=" mx-1 bi bi-linkedin"></i>
            </a>
            <p className='text-secondary gradient_headdng d-flex ms-3 mb-0'>varunlad5@gmail.com <i className=" mx-1 bi bi-envelope-at-fill"></i> </p>
            </div>
           
            <p style={{fontWeight:600}} className='text-secondary  myColor d-flex ms-3 mb-0'> {user.windownView === 1 && "Happy Coding" } <i className="mx-2 mb-3 bi bi-emoji-smile-fill"></i></p>  */}
            <div className={user.windownView === 1 ? 'connect_me_footer' : 'connect_me_footer connect_me_footer_mobile'}>
                <p style={user.windownView === 0 ? {}:{ fontWeight: 700 }} className='mb-0'>Connect me on  </p>
                <a target="_blank" href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos" style={{ fontSize: "16px" }} className="text-secondary gradient_headdng d-flex ms-3">
                    Linkedin <i className=" mx-1 bi bi-linkedin"></i>
                </a>
            </div>
            <div className='gradient_bg'>
                <div className={user.windownView === 1 ? 'footer_left' : 'mt-3 footer_left' }>
              <h6 className='m-0' style={user.windownView === 0 ? {}:{ fontWeight: 700 }}>{user.myUser.username}'s Portfolio</h6> <img src={profileFav} className= 'mx-1' alt='profile' />
                </div>
                <div className={user.windownView === 1 ? 'footer_right d-flex align-items-center' : 'footer_right d-flex mt-3 align-items-center' }>
                    <p  className=' d-flex ms-3 mb-0'> <h6 style={user.windownView === 0 ? {}:{ fontWeight: 700 }}>Happy Coding</h6>  <i class=" mx-2 bi bi-code-square"></i></p>  
                </div>
            </div>
        </div>
    )
}

export default Footer