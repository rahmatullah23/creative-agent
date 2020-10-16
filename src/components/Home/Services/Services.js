import React from 'react';
import './Services.css';
import kodi from '../../../images/Ellipse 1.png'
import mitchel from '../../../images/Ellipse 3.png'
import Service from '../Service/Service'
const Services = () => {
    const blogData = [
        {
           
            title : 'Web & Mobile design',
            description : 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            image : kodi,
        },
        {
            
            title : 'Graphic design',
            description : 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            image : mitchel,
        },
        {
            
            title : 'Web development',
            description : 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            image : kodi,
        }
    ]
    return (
        <section className="services">
            <div className="container mb-5">
                <div className="text-center">
                
                <h3> Provide awesome <span className="brand-text">services</span> </h3>
                </div>
                <div className="card-deck mt-5 ">
                    {
                        blogData.map(service => <Service service={service} ></Service>)
                    }

                </div>
                
            </div>

        </section>
    );
};

export default Services;