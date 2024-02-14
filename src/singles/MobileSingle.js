import { useParams } from "react-router-dom";
import { mobileData } from "../stores/data/mobiles";
import "../App.css"
import Navbar from "../stores/Components/Navbar";
import { UseCart } from "../stores/context/cartContext";
import Footer from "../stores/Components/Footer";

function MobileSingle(){
const {id}=useParams();

const{addToCart,cartItems}=UseCart()

const product=mobileData.find((item)=>item.id===id);

console.log(id);
    return(
<>

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
    <button  onClick={()=>addToCart(product)}>Add To cart</button>
    </div>

</div>
<Footer/>

</>


    )
}

export default MobileSingle;