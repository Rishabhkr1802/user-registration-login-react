import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import LandingpageImage from './LandingpageImage';

const Login = () => {

    const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const addData = (e) => {
        e.preventDefault();
        const getuserArr = localStorage.getItem("User");
        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
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

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    history("/dashboard")
                }
            }
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
                    <h3 className='text-center col-lg-6'>Login</h3>

                    <Form >
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
                    <p className='mt-3'>New User <span><NavLink to="/">Registration </NavLink></span> </p>
                </div>
                <LandingpageImage />
            </section>
            <ToastContainer />
        </div>
    )
}

export default Login;