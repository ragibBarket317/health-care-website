import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner/banner1.jpg';
import './Login.css';


const Login = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div class="col-lg-6 img-field">
                    <img className="img-fluid mt-5 img-size" src={banner1} alt="" />
                </div>
                <div className="col-lg-6 mt-5 border-2 login">
                    <Form>
                        <h2 className="mb-3">Please Login</h2>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <button className="btn btn-primary w-100 mt-5" type="submit">Login</button><br />
                        <p className="text-center mt-3">--------------------OR----------------------</p>
                        <div className="text-center mt-2">
                            <button className="btn btn-warning w-lg-25 mx-3" type="submit">Google Sign in</button>
                            <button className="btn btn-danger w-lg-25" type="submit">GitHub Sign in</button>
                            <p>new user? please <Link to="/register">register</Link></p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;