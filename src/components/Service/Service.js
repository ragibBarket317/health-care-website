import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Services Section
const Service = ({ service }) => {
    const { id, img, title, describe } = service;
    return (
        <Col>
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {describe}
                    </Card.Text>
                </Card.Body>
                <div className="text-center">
                    <Link to={`details/${id}`}><button className="w-50 btn btn-primary my-3">View Details</button></Link>
                </div>
            </Card>
        </Col>
    );
};

export default Service;