
import Work from "../work/Work";
import classes from "./works.module.css";

const Works = ({filterByCategory,allCategory,data}) => {
    
    const onFilter =(cat)=>{
filterByCategory(cat)
    };

    return (
        <div className={classes.container}>
            <h1>My Works</h1>
            <div className={classes.wrapper}>
            
               {allCategory.length >= 1 ?(allCategory.map((cat)=>{
                return(
                    <div key={cat.id}  className={classes.cat}>
                    <button onClick={()=>onFilter(cat)}>
                      {cat}
                    </button>
                    
                </div>
            
                )
               })):<h1>No More</h1>}
               
                        
                           
                       
               
                    
              
                
            </div>
            <Work data={data}/>
        </div>
    );
};

export default Works;
