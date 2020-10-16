import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={testimonial.img} width='60' alt="" />
                <div>
                    <h6>{testimonial.name}</h6>
                    <p className="m-0">{testimonial.location}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary"> {testimonial.description}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;