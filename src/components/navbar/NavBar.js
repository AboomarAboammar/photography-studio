import React from "react";
import classes from "./navBar.module.css";
import Link from "next/link";
import Home from "@/pages";
import signiIn from "@/pages";

const NavBar = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
      <div className={classes.left}>
        <Link href="Home" >
          <h1 className={classes.logo}>Eslam Studio</h1>
        </Link>
      </div>
      <div className={classes.center}>
        <ul className={classes.list}>
            <Link href="/home">
            <li className={classes.option}>Home</li>
            </Link>
            <Link href="/home">
          <li className={classes.option}>About</li>
          </Link>
          <Link href="/home">
          <li className={classes.option}>Services</li>
          </Link>
          <Link href="/home">
          <li className={classes.option}>Blog</li>
          </Link>
          <Link href="/home">
          <li className={classes.option}>Portofolio</li>
          </Link>
        </ul>
      </div>
      <div className={classes.right}>
      <Link href="signIn">
        Sign in
      </Link>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
