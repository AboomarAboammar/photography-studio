import React from "react";

import classes from "./signin.module.css";
import Link from "next/link";
const Signin = () => {
 
  const handleSubmit=(e)=>{
e.preventDefault();

  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        
          <form onSubmit={handleSubmit} className={classes.formcontent}>
            <h1>Sign in to your account</h1>
            <label htmlfor="for">Email</label>
            <input type="email" required placeholder="your email"/>
            <label htmlfor="for">Password</label>
            <input type="password" required placeholder="your password"/>
            <Link href="/">
            <button type="submit">continue</button>
            </Link>
           
            <p>Forgot Password</p>
          </form>
        </div>
      
    </div>
  );
};

export default Signin;
