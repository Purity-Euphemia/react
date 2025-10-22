import React, { useState } from "react";
import { Link } from "react-router";
import styles from "./register.module.css";

const Register = () => {

  const useProfile = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  const [user, setUser] = useState(useProfile)

  const handleChange=(event)=>{
    const {name, value} = event.target
    setUser((prevUser)=>(
      {...prevUser,[name]:value.trim()}
    ))
  }

  // const [firstName, setFirstName] = useState()
  // const [lastName, setLastName] = useState()

  // const handleFirstName=(e)=>{
  //   const firstName = e.target.value.trim()
  //   setFirstName(firstName)
  // }

  // function handleLastName(event) {
  //   const lastName = event.target.value.trim()
  //   setLastName(lastName)
  // }

  

  function handleSubmit(e) {
    e.preventDefault()
  }

  console.log(user)

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="firstname">FirstName:</label>
          <input name='firstName' type="text" onChange={handleChange} placeholder="firstName"/>
        </div>

        <div>
          <label htmlFor="lastname">LastName:</label>
          <input name='lastName' type="text" onChange={handleChange} placeholder="lastName"/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input name='email' type="email" onChange={handleChange} placeholder="email"/>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input name='password'type="password" onChange={handleChange} placeholder="Password"/>
        </div>
        <button type="submit">Register</button>
      </form>

      <div className={styles.linkToLogin}>
        <p> Already have an account? <Link to="/login">Login</Link></p> 
        
      </div>
    </div>
  )
}

export default Register;
