import React from 'react'
import classes from "./about.module.css"


const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h3>ESLAM STUDIO PHOTOGRAPHY</h3>
          <h1>Hello, Iam Eslam Mohammed, a professional photographer based on Egypt</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum repudiandae, minima magnam quaerat velit neque molestias repellat delectus, quas ducimus alias nihil vitae sunt debitis incidunt quisquam minus accusantium omnis.</p>
        
            <button className={classes.btn}>Get Started</button>
          
        </div>
        <div className={classes.right}>
          
        </div>
      </div>
    </div>
  )
}

export default About