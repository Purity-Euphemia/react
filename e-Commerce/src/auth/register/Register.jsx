import React from "react";
import { Link } from "react-router";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="firstname">FirstName:</label>
          <input type="text" placeholder="firstName"/>
        </div>

        <div>
          <label htmlFor="lastname">LastName:</label>
          <input type="text" placeholder="lastName"/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="email"/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder="Password"/>
        </div>
      </form>
      
      <div className={styles.linkToLogin}>
        <p> Already have an account?</p> 
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Register;
