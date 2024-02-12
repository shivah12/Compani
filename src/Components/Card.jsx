import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const Card = ({ 
    imgsrc,
    title
}) => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <>
            <div className="col-md-4 col-10 mx-auto" data-aos="fade-up">
                <div className="card rounded-3"> 
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title text-white">{title}</h5>
                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" className="btn btn-outline-primary mt-3 text-white btn-gradient">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
