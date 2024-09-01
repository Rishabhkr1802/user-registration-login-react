import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LandingpageImage from './LandingpageImage';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {

    const history = useNavigate();
    const [data, setData] = useState([]);
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

    const addData = (e) => {
        e.preventDefault();
        const { name, email, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('please enter valid email address', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {
            history("/login")
            localStorage.setItem("User", JSON.stringify([...data, inpval]));
        }
    }

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    return (
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>User Registration Form</h3>

                    <Form >
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login </NavLink></span> </p>
                </div>
                <LandingpageImage />
            </section>
            <ToastContainer />
        </div>
    )
}

export default Home;