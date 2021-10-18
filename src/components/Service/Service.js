import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Link to={`details/${id}`}><button className="btn btn-primary w-50 mx-auto my-3">View Details</button></Link>
            </Card>
        </Col>
    );
};

export default Service;