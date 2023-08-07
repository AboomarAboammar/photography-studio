import React from "react";
import classes from "./services.module.css";
import Image from "next/image";
import icon2 from "../../image/icon2.png"

const Services = () => {
    return (
        <div className={classes.container}>
            <h1>My Services</h1>
            <div className={classes.wrapper}>
                
                <div className={classes.item}>
                    <Image className={classes.photo} src={icon2}alt="" width={45} height={45}/>
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
                </div>
                <div className={classes.item}>
                    <Image className={classes.photo} src={icon2} alt="" width={50} height={50}/>
                    <h2>Videography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
                </div>
                <div className={classes.item}>
                    <Image className={classes.photo} src={icon2}alt=""width={50} height={50}/>
                    <h2>Photo Retouching</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
                </div>
                <div className={classes.item}>
                    <Image className={classes.photo} src={icon2} alt="" width={50} height={50} />
                    <h2>Photography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
                </div>
                <div className={classes.item}>
                    <Image className={classes.photo} src={icon2} alt="" width={50} height={50}/>
                    <h2>Photo Retouching</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
                </div>
                <div className={classes.item}>
                    <Image className={classes.photo} src={icon2} width={50} height={50} alt="" />
                    <h2>Photo Retouching</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
