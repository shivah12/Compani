import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Common = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname
}) => {
    useEffect(() => {
        AOS.init({ duration: 3000 }); 
    }, []);

    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" data-aos="fade-up">
                                <h1> 
                                     {name}
                                     {isCompName ? <strong className="brand-name"> {compName}</strong> : ""}
                                    
                                </h1>
                                <h2 className="my-3">
                                    We are the team of talented developer making websites
                                </h2>
                                <div className="mt-3">
                                    <NavLink to={visit} className="btn-get-started ">
                                        {btnname}
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-image radial-gradient(circle, #1E1857, #C5C5C6, #19162D)" data-aos="fade-left">
                                <img src={imgsrc} className="img-fluid animated" alt="Home Img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Common;
