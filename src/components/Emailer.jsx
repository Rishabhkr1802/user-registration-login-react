
import React, { useState, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Emailer = () => {

    const form = useRef();
    const [sentEmail, setSentEmail] = useState(false);
    const [inpval, setInpval] = useState({
        email: "",
        name: "",
        message: ""
    })

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const { email, name, message } = inpval;

        if (email === "") {
            toast.error(' Email Field is requred!', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('please enter valid email address', {
                position: "top-center",
            });
        }
        else if (name === "") {
            toast.error('name field is requred', {
                position: "top-center",
            });
        } else if (message === "") {
            toast.error('Message field is requred', {
                position: "top-center",
            });
        } else if (message.length < 5) {
            toast.error('message length greater five', {
                position: "top-center",
            });
        } else {
            emailjs
                .sendForm('service_rhlp599', 'template_g549ch9', form.current, {
                    publicKey: 'WCwE_IjpJ39XzQb2D',
                })
                .then(
                    () => {
                        console.log('Email Sent Successfully');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            e.target.reset();
            setSentEmail(true);
            // localStorage.setItem("Email", JSON.stringify([inpval]));
        }
    }

    return (
        <>
            {sentEmail ? <h2 className='display-4'>Email Sent Successfully</h2> :
                <div className="row">
                    <div className="col-md-offset-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <h3 className="display-6">Mail to:</h3>
                            <div class="form-group m-2">
                                <label for="email">Email address</label>
                                <input type="email" name="email" class="form-control" placeholder="send to" onChange={getdata} />
                            </div>
                            <div class="form-group m-2">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" placeholder="name" onChange={getdata} />
                            </div>
                            <div class="form-group m-2">
                                <label for="messsage">Message</label>
                                <textarea name="message" placeholder='Message' className='form-control' onChange={getdata}></textarea>
                            </div>
                            <button type="submit" class="btn btn-success m-2">Submit</button>
                        </form>
                    </div>
                </div>
            }
            <ToastContainer />
        </>
    );
}

export default Emailer;