import React from 'react';

const ServiceDataTable = ({services}) => {
    
    return (
        
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Project Details</th>
            <th className="text-secondary" scope="col">Status</th>
            
            </tr>
        </thead>
        <tbody>
            {
              services.map((service, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.age}</td>
                    <td>{service.service}</td>
                    <td>{service.status}</td>
                    
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default ServiceDataTable;