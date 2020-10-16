import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../../Dashboard/SideBar/SideBar';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {



        fetch('http://localhost:4008/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {

                    alert('Services Post successfully.');
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
                <div className="col-md-7" ><h4>Order</h4></div>
                <div className="col-md-3" ><h5>{loggedInUser.name}</h5></div>
            </div>
            <div className="container-fluid row " >
                <SideBar />
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                        <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                        {errors.address && <span className="error">Title is required</span>}

                        <input name="co name" ref={register({ required: true })} placeholder="Company's Name & Designation" />
                        {errors.phone && <span className="error">Details required</span>}

                        <input name="description" ref={register({ required: true })} placeholder="Description" />
                        {errors.phone && <span className="error">Details required</span>}

                        <input className="btn-secondary " type="submit" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Review;