import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div className="container my-5 ">
                <h2 className="text-center fw-bold mb-5">Our Services</h2>
                <Row xs={1} md={2} xl={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Home;