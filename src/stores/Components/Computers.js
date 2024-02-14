import { computerData } from "../data/computers";
import { Link, useParams } from "react-router-dom";

function Computers(){
const firstFiveImage=computerData.slice(0,5);

const {id} =useParams();
    return (


        <>
        <h2 className="proTitle">Computers</h2>
        <div className="proSection">
        {firstFiveImage.map((item)=>{
            return (

                <Link to={`/computers/${item.id}`}>
                <div className="imgBox">
{/* <Link to={`/computers/${item.id}`} */}
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
        
        
        </>
    )
}

export default Computers;