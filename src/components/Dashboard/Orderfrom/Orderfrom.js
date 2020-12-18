import React from 'react';
import { useForm } from 'react-hook-form';
import './Orderfrom.css';


const Orderfrom = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        
        fetch('https://whispering-atoll-00953.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                
                alert('Appointment created successfully.');
            }
        })
 
    }
    return (
        <div className="">
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name"  ref={register({ required: true })} placeholder="Your Name / company's name" />
        {errors.name && <span className="error">Name is required</span>}
       
        <input name="email"  ref={register({ required: true })}  placeholder="Your Email address"/>
        {errors.email && <span className="error">Email is required</span>}
       
        <input name="title" ref={register({ required: true })}  placeholder="Graphic Design" />
        {errors.address && <span className="error">Subject is required</span>}
       
        <input name="details" ref={register({ required: true })}  placeholder="Project Details"/>
        {errors.phone && <span className="error">Details required</span>}

        <input name="price" ref={register({ required: true })}  placeholder="Price"/>
        {errors.phone && <span className="error">Price is required</span>}
        
        {/* <input type="submit" /> */}
        <div className="form-group text-left">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
      </form>
            
        </div>
    );
};

export default Orderfrom;