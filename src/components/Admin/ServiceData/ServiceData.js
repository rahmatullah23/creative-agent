import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../../Dashboard/SideBar/SideBar';
import ServiceDataTable from '../ServiceDataTable/ServiceDataTable';
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceData = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://whispering-atoll-00953.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="row my-3">
                <div className="col-md-2" >
                    <Link to="/">
                        <img src={logo} width="120" className="ml-4" alt="" />
                    </Link>
                </div>
                <div className="col-md-7" ><h4>Order</h4></div>
                <div className="col-md-3" ><h5>{loggedInUser.name}</h5></div>
            </div>
            <div className="container-fluid row " >
                <SideBar />
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <ServiceDataTable services={services} />

                </div>
            </div>
        </div>
    );
};

export default ServiceData;