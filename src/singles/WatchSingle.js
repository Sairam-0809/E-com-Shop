import { useParams } from "react-router-dom";
import { watchData} from "../stores/data/watch";
import "../App.css"
import Navbar from "../stores/Components/Navbar";
import Footer from "../stores/Components/Footer";

import { UseCart } from "../stores/context/cartContext";

function WatchSingle(){
const {id}=useParams();

const{addToCart}=UseCart()


const product=watchData.find((item)=>item.id===id);

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

export default WatchSingle;