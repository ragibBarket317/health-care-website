import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg'
import banner2 from '../../images/banner/banner2.jpg'
import banner3 from '../../images/banner/banner3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="mb-5 pb-5">
                        <div className="mb-5 pb-5 text-color">
                            <h2 className="fw-bold fs-1">Welcome Health Solution</h2>
                            <p>We believe that everyone should have access to convenient, affordable, and high-quality care</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="mb-5 pb-5">
                        <div className="mb-5 pb-5 text-color">
                            <h2 className="fw-bold fs-1">We are a one-stop-shop for your health</h2>
                            <p>We believe that everyone should have access to convenient, affordable, and high-quality care</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5 pb-5">
                        <div className="mb-5 pb-5 text-color">
                            <h2 className="fw-bold fs-1">Better health support</h2>
                            <p>We believe that everyone should have access to convenient, affordable, and high-quality care</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;