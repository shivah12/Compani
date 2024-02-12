import React, { useState, useEffect } from "react";
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'; // Import your CSS file for Contact component

const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 }); // Initialize AOS with your desired duration
    }, []);

    const [data, setData] = useState({
        fullname: "",
        email: "",
        msg: ""
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        });
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        // message can be saved to db or email can be sent from here!
        
        swal("Sent!", "Message Sent Successfully!", "success");
    }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center  text-primary fw-bold mb-3 text-white">Contact Us</h1>
      </div>
      <div className="container contact_div text-white" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control contact-input"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control contact-input"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Your Query/Feedback
                </label>
                <textarea
                  className="form-control contact-input"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
                <div className="col-12 ">
                  <button className="btn btn-outline-primary mt-3 text-white btn-gradient" type="submit">
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
