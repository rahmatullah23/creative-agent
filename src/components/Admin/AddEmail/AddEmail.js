import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../Dashboard/SideBar/SideBar';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const AddEmail = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {



        fetch('https://whispering-atoll-00953.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {

                    alert('Add Email successfully.');
                }
            })
    }
    return (
        <div>
            <div className="row my-3">
                <div className="col-md-2" >
                    <Link to="/">
                        <img src={logo} width="120" className="ml-4" alt="" />
                    </Link>
                    
                    </div>
                <div className="col-md-7" ><h4>Add Service</h4></div>
                <div className="col-md-3" ><h5>{loggedInUser.name}</h5></div>
            </div>
            <div className="container-fluid row " >
                <SideBar />
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add Service</h5>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                        <p >Email</p>
                        <input name="email" ref={register({ required: true })} placeholder="Your Email address" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input className="btn-primary " type="submit" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddEmail;