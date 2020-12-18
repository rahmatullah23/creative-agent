import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <main  className = "row d-flex align-items-center my-5 " >
            <div className="col-md-4 offset-md-1">
                <h1>Let's Grow Your <br/> Brand To The <br/> Next Level </h1>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eligendi atque, quis aliquid ducimus commodi.</p>
                <div >
                <Link className="nav-link mr-5 " to="/dashboard"> <p className="btn btn-primary">Hire us</p> </Link>
                </div>
                
            </div>
            <div className="col-md-6">
                <img src={HeroImg} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;