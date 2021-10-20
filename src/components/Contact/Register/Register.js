import React from 'react';
import banner1 from '../../../images/banner/banner1.jpg';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Register.css';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, registerUsingEmailPassword, handleEmail, handlePassword, handleNameChange, setUserName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';

    const emailPasswordRegister = () => {
        registerUsingEmailPassword()
            .then((result) => {
                history.push(redirect_uri)
                setUserName()
                alert('Registration Successful. Please Login')
            })
    }
    return (
        <div className="container py-5">
            <div className="row">
                <div class="col-lg-6 ">
                    <img className="img-fluid mt-5 img-size" src={banner1} alt="" />
                </div>
                <div className="col-lg-6 mt-5 border-2 login register">
                    <div>
                        <h2 className="mb-3">Please Register</h2>
                        <Form.Group className="mb-2" controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <button onClick={emailPasswordRegister} className="btn btn-primary w-100 mt-2" type="submit">Register</button><br />
                        <p className="text-center mt-3">--------------------OR----------------------</p>
                        <div className="text-center mt-2">
                            <button onClick={signInUsingGoogle} className="btn btn-warning w-lg-25 mx-3" type="submit">Google Sign in</button>
                            <p>already have an account? please <Link to="/login">login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;