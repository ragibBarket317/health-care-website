import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import banner5 from '../../images/banner/banner5.jpg';
import banner7 from '../../images/banner/banner7.jpg';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <img className="contact" src={banner5} alt="" />
            <h1 className="text-center py-3">Appointment Book</h1>
            <div className="container py-3">
                <div className="row">
                    <di className="col-lg-6 col-12 mb-4 mb-lg-0">
                        <img className="contact-img img-fluid" src={banner7} alt="" />
                    </di>
                    <div className="col-lg-6 col-12">
                        <Form className="py-5 form-color px-4">
                            <h5 className="mb-3">Please fillup this form</h5>
                            <Row className="mb-3">
                                <Form.Group controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Problem</Form.Label>
                                <Form.Control placeholder="discribe your problem" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Appoint For</Form.Label>
                                    <Form.Select defaultValue="Dialysis">
                                        <option>Dialysis</option>
                                        <option>MRI</option>
                                        <option>Child Care</option>
                                        <option>X-RAY</option>
                                        <option>Pregnency</option>
                                        <option>Dental</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary w-100" type="submit">
                                Booking
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;