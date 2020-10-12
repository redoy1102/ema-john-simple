import React, { useState } from 'react';

import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFrameWork } from './loginManager';



function Login() {
  const [newUser,setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false, 
    email: '',
    password:''
    
  })

  initializeLoginFrameWork();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: {pathname:"/"} };
    
    
    
const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
    })
}

const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
    })
}

const signOut = () => {
    handleSignOut()
    .then(res => {
        setUser(res);
        setLoggedInUser(res);
    })
}
  

  
//input field condition start
  const handleBlur = (event) => {
    let isFormValid = true;
    if(event.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
    }

    if(event.target.name === 'password'){
      const isPasswordValid = event.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
//input field condition end

//submitting handle start
  const handleSubmit = (event) => {
    // console.log(user.email, user.password)
    if(newUser && user.email && user.password){
      
    }

     if(!newUser && user.email && user.password){
      
    }
    event.preventDefault();
  }

  return (
    <div style={{textAlign: 'center'}}>
      {
        user.isSignedIn ? <button onClick={signOut} >Sign out</button> : 
        <button onClick={googleSignIn} >Sign In</button>
      }
      <br/>
      <button onClick={fbSignIn} >Sign in using Facebook</button>
      {
        user.isSignedIn && 
        <div>
          <p>Welcome, {user.email}</p>
          <p>Your E-mail Address: {user.email}</p>
        </div>
      }
      <h1>Our Own Authentication</h1>
       <input onChange={() => setNewUser(!newUser)} type="checkbox" name="newUser" id=""/>
       <label htmlFor="newUser">New User Sign Up</label>
      
      <form onSubmit = {handleSubmit}>
        { newUser && <input name="name" onBlur={handleBlur} placeholder="Your Name" type="text"/>}
        <br/>
        <input type="text" name="email" onBlur={handleBlur} placeholder="Your E-mail Address" required />
        <br/>
        <input type="text" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
        <br/>
        <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
      </form> 
        <p style={{color:'red'}}>{user.error}</p>
        {user.success && <p style={{color:'green'}}>User {newUser ? 'Created': 'Logged In'} Successfully</p>}
    </div>
  ); 
}

export default Login;
 