import React from 'react'

function Footer() {
    return (
        <div className='footer d-flex p-2 mt-3  justify-content-between'>
            <div className='d-flex'>
            <p>Connect me on  </p>
            <a target="_blank" href="https://www.linkedin.com/in/varun-lad-6b34b3215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPG6r6a8SYyRcCfQMdhc6w%3D%3D&fbclid=PAAaa7Ogg7THiTe16HWdeYkMere4DGria0OjCrA24NY8Hz-uu2oaMYxS-KZEo_aem_ASMj_ALQTrcTENFdFAYPjBV6dxl_eMCi51FPIilhHcZt5DEw05YO3Jl49hSSEmerAos" style={{ fontSize: "16px" }} className="text-secondary gradient_headdng d-flex ms-3">
                Linkedin   <i class=" mx-1 bi bi-linkedin"></i>
            </a>
            <p className='text-secondary gradient_headdng d-flex ms-3'>varunlad5@gmail.com <i class=" mx-1 bi bi-envelope-at-fill"></i> </p>
            </div>
            <p className='text-secondary  myColor d-flex ms-3'>Happy Coding <i class="mx-1 bi bi-emoji-smile-fill"></i></p>
        </div>
    )
}

export default Footer