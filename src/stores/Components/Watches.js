import {  watchData } from "../data/watch";
import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";

function Watches(){
const firstFiveImage=watchData.slice(0,5);
    return (


        <>
        <h2 className="proTitle">Watches</h2>
        <div className="proSection">
        {firstFiveImage.map((item)=>{
            return (
                <Link to={`/watches/${item.id}`}>
                <div className="imgBox">
                      <Link to='/watch'>
                         <img className='proImage' src={item.image} alt="" />
                        </Link>

                    {/* <img src={item.image} className="proImage" alt="not found"/> */}
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

export default Watches;