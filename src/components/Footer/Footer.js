import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-3">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-4 col-12 ">
                        <h3 className="mb-4">About us</h3>
                        <p>Health Solution exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics, and much more.</p>
                    </div>
                    <div className="col-lg-4 col-12 px-lg-5">
                        <h3 className="mb-4">Latest news & tips</h3>
                        <h6>The face you will remember</h6>
                        <small>June 22, 2021</small>
                        <h6>This is a healthy gallery</h6>
                        <small>September 10, 2021</small>
                        <h6>Armani spring collection 2020</h6>
                        <small>June 22, 2020</small>
                    </div>
                    <div className="col-lg-4 col-12 px-lg-5">
                        <h3 className="mb-4">Contact us</h3>
                        <h6>Plot 9, Road 17, Block C, Banani<br /> Dhaka 1212, Bangladesh</h6>
                        <h6>ragibrahman@gmail.com</h6>
                        <h6>call : 01774086317</h6>
                    </div>
                </div>
                <div className="border-top mt-4 text-center">
                    <p className="mt-2">copyright@ragib2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;