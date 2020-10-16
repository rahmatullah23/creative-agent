import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart,faCommentDots, faHdd,faPlus,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4008/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar mx-4" >
            <ul className="list-unstyled mt-4">
                <li>
                    <Link to="/dashboard" className="">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/servicelist" className="">
                        <FontAwesomeIcon icon={faHdd} /> <span>Service list</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                    <Link to="/servicedata" className="">
                        <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addservice" className="">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addadmin" className="">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                </div>}
                
                
                
            </ul>
            
        </div>
    );
};

export default SideBar;