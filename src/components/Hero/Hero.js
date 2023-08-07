import React from "react";
import Link from "next/link";
import classes from "./hero.module.css"
const Hero = () => {
  return (
   
   
    <div className={classes.container}>
      <div className={classes.videoContainer}>
      <video autoPlay loop muted className={classes.show}  type="video/mp4">
        <source src="/video.mp4" />
      </video>
      </div>
      <div className={classes.content}>
      <h1>PHOTOGRAGHY STUDIO</h1>
      <p>     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          repellendus voluptatem dolores quae possimus esse necessitatibus</p>
          <Link href="/services">
          <button className={classes.btn}>Get Started</button>

          </Link>
         

      </div>
     
      
      
    </div>
   
  );
};

export default Hero;
