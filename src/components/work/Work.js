import Image from "next/image";
import classes from "./work.module.css";
import React from "react";

const Work = ({ data }) => {
    return (
        <>
        <div className={classes.container}>
            <div className={classes.wrapper}>
               
               {data.length >= 1 ?(
                data.map((item)=>{
                    return(
                        <div key={item.id} className={classes.imgContainer}>
                               <Image src={item.imgUrl} width={250} height={250} alt="" objectFit="cover"/>
                            </div>
                    )
                })
               ):<h1></h1>} 
                    
                
            </div>
        </div>
        </>
    );
};

export default Work;
