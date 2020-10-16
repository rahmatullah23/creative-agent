import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header text-center">
                <img  src={service.image} alt="" width="60"/>
    
            </div>
            <div className="card-body text-center ">
                <h5>{service.title}</h5>
                <p className="card-text text-secondary mt-4">{service.description}</p>
            </div>
        </div>
    );
};

export default Service;