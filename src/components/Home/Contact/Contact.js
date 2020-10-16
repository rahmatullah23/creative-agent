import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="row">

                <div className="col-md-6">
                <div className="section-header  mb-5">
                    
                    <h2>Let us handle your <br/> project, professionally.</h2>
                    <p className="text-secondary my-4">With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
                </div>
                </div>
                <div className="col-md-6 ">
                <form action="">
                        <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your email address "/>
                        </div>
                        <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name / company's name"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" cols="20" rows="10" className="form-control"placeholder="Your Message "></textarea>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary  ">Send</button>
                        </div>

                    </form>
                </div>
                </div>
                
                


            </div>

        </section>
    );
};

export default Contact;