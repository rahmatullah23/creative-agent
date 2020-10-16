import React from 'react';
import './Testimonial.css';
import testimonial1 from '../../../images/Ellipse 1.png';
import testimonial2 from '../../../images/Ellipse 2.png';
import testimonial3 from '../../../images/Ellipse 3.png';
import TestimonialCard from '../../Home/TestimonialCard/TestimonialCard';


const Testimonial = () => {
    const testimonialData = [
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, neque fugiat porro molestias et ',
            name: 'Nash Patrik',
            location: 'CEO, Msnpol',
            img: testimonial1,
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, neque fugiat porro molestias et eius odio ',
            name: 'Miriam Barron',
            location: 'CEO, Manpol',
            img: testimonial2,
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, neque fugiat porro molestias et eius odio excepturi ',
            name: 'Bria Malone',
            location: 'CEO, Manpol',
            img: testimonial3,
        }
    ]
    return (
        <section className="testimonial my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h1> Clients <span className="brand-text">Feedback</span> </h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial} >  </TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;