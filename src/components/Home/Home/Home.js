import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import OurClients from '../OurClients/OurClients';
import Services from '../Services/Services';
import Slides from '../Slides/Slides';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div >
            <Header/>
            <OurClients/>
            <Services />
            <Slides/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;