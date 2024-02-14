import { useParams } from "react-router-dom";
import { computerData} from "../stores/data/computers";
import "../App.css"
import Navbar from "../stores/Components/Navbar";
import Footer from "../stores/Components/Footer";

import { UseCart } from "../stores/context/cartContext";

function ComputerSingle(){
const {id}=useParams();
const{addToCart,cartItems}=UseCart()


const product=computerData.find((item)=>item.id===id);

console.log(id);
    return(
<>
{/* <h1>Welcome To Mobile Page</h1> */}
<Navbar />
<div className="ind-page" >
    <div className="ind-img">

        <img src={product.image} alt="Not found" />
    </div>
    <div className="ind-detail">
    <div className="ind-model">
        <h3>{product.model}</h3>
    </div>
    <div className="ind-price">
        <h2>{product.price}</h2>
    </div>
    <button onClick={()=>addToCart(product)}>Add To cart</button>
    </div>

</div>
<Footer />

</>


    )
}

export default ComputerSingle;