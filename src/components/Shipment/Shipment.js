import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const  [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => console.log(data);
 
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={loggedInUser.name} placeholder="Enter your name"name="name" ref={register({ required: true })} />
      {errors.name && <span className="error" >Name is required</span>}
      
      <input defaultValue={loggedInUser.email} placeholder="Enter your email"name="email" ref={register({ required: true })} />
      {errors.email && <span className="error" >E-mail is required</span>}
      
      <input defaultValue={loggedInUser.phoneNumber} placeholder="Enter your phoneNumber"name="phoneNumber" ref={register({ required: true })} />
      {errors.phoneNumber && <span className="error" >Phone Number is required</span>}
      
      <input placeholder="Enter your address-01"name="address-01" ref={register({ required: true })} />
      {errors.address01 && <span className="error" >Address-01 is required</span>}
      
      <input placeholder="Enter your address-02"name="address-02" ref={register({ required: true })} />
      {errors.address02 && <span className="error" >Address-02 is required</span>}

      
      <input type="submit" />
    </form>
  );
};

export default Shipment;