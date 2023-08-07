import React from 'react'
import classes from "./blog.module.css"
import blog from "../../image/about2.jpg"
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
    <Image src={blog} className={classes.left} alt=''/>
      <div className={classes.right}>
        <h3>ESLAM STUDIO PHOTOGRAPHY</h3>
        <h1>Hello, Iam Eslam Mohammed, a professional photographer based on Egypt</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum repudiandae, minima magnam quaerat velit neque molestias repellat delectus, quas ducimus alias nihil vitae sunt debitis incidunt quisquam minus accusantium omnis.</p>
      
          <button className={classes.btn}>Get Started</button>
        
      </div>
     
    </div>
  </div>
  )
}

export default Blog