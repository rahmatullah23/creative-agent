import React from 'react';
import './OurClients.css';
import google from '../../../images/logos/google.png'
import airbnb from '../../../images/logos/airbnb.png'
import slack from '../../../images/logos/slack.png'
import netflix from '../../../images/logos/netflix.png'
import uber from '../../../images/logos/uber.png'

const OurClients = () => {
    
    return (
       <section className="ourClient container  " >
           <div className="row logo my-5" >
            <img  src={slack} alt=""/>
            <img  src={google} alt=""/>
            <img  src={uber} alt=""/>
            <img  src={netflix} alt=""/>
            <img  src={airbnb} alt=""/>
           </div>

       </section>
    );
};

export default OurClients;