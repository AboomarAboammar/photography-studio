import React from 'react'
import classes from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import face from "/public/facebook-outline.png"
import yout from "/public/R.png"
import instgram from "/public/twiter.png"
import twit from "/public/white-twitter-logo-png-12.png"

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.containContainer}>
            <div className={classes.contain}>
                <h2> About Us</h2>
                <Link href="/"> <h4>Home</h4></Link>
                <Link href="/"> <h4>About</h4></Link>
                <Link href="/"> <h4>Services</h4></Link>
                <Link href="/"> <h4>Blog</h4></Link>

            </div>
            <div className={classes.contain}>
                <h2> About Us</h2>
                <Link href="/"> <h4>Home</h4></Link>
                <Link href="/"> <h4>About</h4></Link>
                <Link href="/"> <h4>Services</h4></Link>
                <Link href="/"> <h4>Blog</h4></Link>

            </div>
            <div className={classes.contain}>
                <h2> About Us</h2>
                <Link href="/"> <h4>Home</h4></Link>
                <Link href="/"> <h4>About</h4></Link>
                <Link href="/"> <h4>Services</h4></Link>
                <Link href="/"> <h4>Blog</h4></Link>

            </div>
            <div className={classes.contain}>
                <h2> About Us</h2>
                <Link href="/"> <h4>Home</h4></Link>
                <Link href="/"> <h4>About</h4></Link>
                <Link href="/"> <h4>Services</h4></Link>
                <Link href="/"> <h4>Blog</h4></Link>

            </div>
            </div>
            <div className={classes.bottomContain}>
               
                    <h1>
                        Eslam Studio
                    </h1>
                    
                
                <p className={classes.center}>
 Copyright © eslam studio All Rights Reserved
                </p>
                <div className={classes.icons}>
                    <Image src={twit} width={30} height={30} alt=''className={classes.face}/>
                    <Image src={face} width={30} height={30} alt='' className={classes.face}/>
                    <Image src={instgram} width={30} height={30} alt=''className={classes.face}/>
                    <Image src={yout} width={30} height={30} alt='' className={classes.face}/>
                </div>

            </div>
           
        </div>
     
    </div>
  )
}

export default Footer
