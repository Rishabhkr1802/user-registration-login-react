
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LandingpageImage from './LandingpageImage';
import { ToastContainer, toast } from 'react-toastify';

const Emailer = () => {
    const [sentEmail, setSentEmail] = useState(false);
    const [inpval, setInpval] = useState({
        email: "",
        subject: "",
        body: ""
    })

    const addData = (e) => {
        e.preventDefault();
        const { email, subject, body } = inpval;

        if (email === "") {
            toast.error(' Recipent is requred!', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('please enter valid email address', {
                position: "top-center",
            });
        }
        else if (subject === "") {
            toast.error('Subject field is requred', {
                position: "top-center",
            });
        } else if (body === "") {
            toast.error('body field is requred', {
                position: "top-center",
            });
        } else if (body.length < 5) {
            toast.error('body length greater five', {
                position: "top-center",
            });
        } else {
            localStorage.setItem("Email", JSON.stringify([inpval]));
            setSentEmail(true);
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
        <center>
            {sentEmail ? <h2 className='display-4'>Email Sent Successfully</h2> : <Form>
                <h3 className="display-6">Mail to:</h3>
                <Form.Group className="mb-3 col-lg-6" controlId="formRecipentEmail">
                    <Form.Control type="email" name='email' onChange={getdata} placeholder="Recipent email" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formEmailSubject">
                    <Form.Control type="text" name='subject' onChange={getdata} placeholder="Email Subject" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formEmailBody">
                    <Form.Control as="textarea" rows={3} name='body' onChange={getdata} placeholder="Email Body" />
                </Form.Group>

                <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                    Send
                </Button>
            </Form>}
            <ToastContainer />
        </center>
    );
}

export default Emailer;