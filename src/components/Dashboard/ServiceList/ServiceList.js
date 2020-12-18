import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../../Dashboard/SideBar/SideBar';
import logo from '../../../images/logos/logo.png'
import ServiceListCard from '../ServiceListCard/ServiceListCard';
import './ServiceList.css';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    console.log(services)
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
            <div className="row ">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9 service-bg py-3 ">
                    <div className="card-deck service-list mt-2">
                        {
                            services.map(service => <ServiceListCard service={service} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;