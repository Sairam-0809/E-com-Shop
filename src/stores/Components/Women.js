import {womanData } from "../data/woman";
// import Footer from "./Footer";
import { Link } from "react-router-dom";

function Women(){
const firstFiveImage=womanData.slice(0,5);
    return (


        <>
        <h2 className="proTitle">Women</h2>
        <div className="proSection">
        {firstFiveImage.map((item)=>{
            return (
                <Link to={`/woman/${item.id}`}>
                <div className="imgBox">
                
                    <img src={item.image} className="proImage" alt="not found"/>
                    <p style={{textAlign:"center"}}>{item.model}</p>
                    {/* <p>{item.description}</p> */}
                    <p style={{textAlign:"center"}}>{item.category}</p>
                    <p style={{textAlign:"center"}}>{item.price}</p>
                
                </div>
                </Link>
                
            )
        })}
        
        </div>
        
        {/* <Footer/> */}
        </>
    )
}

export default Women;