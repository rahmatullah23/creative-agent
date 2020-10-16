import React from 'react';

const ServiceListCard = ({service}) => {
    
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex d-flex justify-content-between align-items-start">
                <img src={service.img} width='60' alt="" />
                <button className="btn btn-primary">{service.status}</button>
                <div>
                    
                    <p className="m-0"></p>
                </div>
            </div>
            <div className="card-body">
                <h5>{service.subject}</h5>
                <p className="card-text text-secondary"> {service.description}</p>
            </div>
        </div>
       
    );
};

export default ServiceListCard;