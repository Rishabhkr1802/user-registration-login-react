import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Emailer from './Emailer';
import Error from './Error';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [logindata, setLoginData] = useState([]);
    const [menu, setMenu] = useState('home');
    const history = useNavigate();

    useEffect(() => {
        onCheckValidUser();
    }, [])

    const onCheckValidUser = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);
        }
    }

    const selectedMenu = (props) => {
        setMenu(props)
    }

    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }

    return (
        <>
            {logindata.length === 0 ? <Error /> :
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-xs-2">
                            <Sidebar page={menu} onSelectionMenu={selectedMenu} />
                        </div>
                        <div className="col-lg-9 col-md-4 col-xs-2 mt-2">
                            {menu === 'home' ? <div className="d-flex justify-content-between">
                                <h1>Welcome - {logindata[0].name}</h1>
                                <Button variant="primary" onClick={userlogout} style={{ background: "rgb(67, 185, 127)" }} >LogOut</Button>
                            </div> : <Emailer />}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Dashboard;