import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css'
import SideBar from '../SideBar/SideBar';
import Orderfrom from '../Orderfrom/Orderfrom';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://whispering-atoll-00953.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <section>
            <div className="row my-3">
                <div className="col-md-2" >
                    <Link to="/">
                        <img src={logo} width="120" className="ml-4" alt="" />
                    </Link>
                </div>
                <div className="col-md-7" ><h4>Order</h4></div>
                <div className="col-md-3" ><h5>{loggedInUser.name}</h5></div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10 place-order">
                    <Orderfrom />
                </div>


            </div>

            {/* <div>
            <SideBar/>
        </div> */}
        </section>
    );
};

export default Dashboard;