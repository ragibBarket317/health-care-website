import React from 'react';
import banner4 from '../../images/banner/banner4.jpg';
import hospital from '../../images/services/hospital.jpg'
import './About.css';

const About = () => {
    return (
        <div>
            <div>
                <img className="w-100 height-fixed" src={banner4} alt="" />
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <h1 className="fw-bold mb-4">Our Mission</h1>
                        <h4 className="text-muted">Health Solution exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.</h4>
                        <p className="fs-5">We believe that everyone should have access to convenient, affordable, and high-quality care. </p>
                        <p className="fs-5">We are on a mission to change how healthcare is delivered in Bangladesh. We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.</p>
                        <p className="fs-5">Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.</p>
                    </div>
                    <div className="col-lg-6 mt-5 p-5">
                        <img className="img-fluid" src={hospital} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;