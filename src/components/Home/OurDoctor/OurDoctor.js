import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import doctor from '../../../images/doctor.png'
const OurDoctor = () => {
    return (
        
                <div className="col-md-4 text-center">
                    <img className="img-fluid mb-3" src={doctor} alt="" />
                    <h6>Dr.Caudi</h6>
                    
                    <p ><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +61 42200128</p>
                </div>

           
    );
};

export default OurDoctor;