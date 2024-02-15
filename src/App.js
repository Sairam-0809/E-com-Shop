// import React, { Children } from "react";
import LandingPage from "./stores/Pages/LandingPage";
// import Mobiles from "./stores/Components/Mobiles";
// import Computers from "./stores/Components/Computers";
// import Watches from "./stores/Components/Watches";
import Paypal from "./Paypa";
import WatchesPage from "./stores/Pages/WatchesPage";
import ComputersPage from "./stores/Pages/ComputersPage";
import MensPage from "./stores/Pages/MensPage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import MobilePage from "./stores/Pages/MobilePage";
import WomensPage from "./stores/Pages/WomensPage";
import MobileSingle from "./singles/MobileSingle";
import ComputerSingle from "./singles/ComputerSingle";
import MensSingle from "./singles/MensSingle";
import WomensSingle from "./singles/WomensSingle";
import WatchSingle from "./singles/WatchSingle";
import UserCart from "./stores/UserCart";
import UserForm from "./UserProfile/UserForm";
import UserRegister from "./UserProfile/UserRegister";
import UserLogin from "./UserProfile/UserLogin"
import ThankYouMessage from "./stores/Components/ThankYouMessage";

function App(){


  return (
    <>


    <BrowserRouter>
    
    <Routes>

<Route path="/" element={<LandingPage />} />
<Route path="/mens" element={<MensPage />} />
 <Route path="/computers" element={<ComputersPage />} />
  <Route path='/watches' element={<WatchesPage />} />
<Route path="/payment" element={<Paypal />} />
<Route path="/mobiles" element={<MobilePage /> } />

<Route path="/womens" element={<WomensPage /> } />

<Route path="/mobiles/:id" element={<MobileSingle/>} />
<Route path="/computers/:id" element={<ComputerSingle/>} />
<Route path="/men/:id" element={<MensSingle />} />
<Route path="/woman/:id" element={<WomensSingle />}  />
<Route path="watch/:id" element={<WatchSingle />} />
<Route path="/cart" element={<UserCart/>} />

      <Route path="/user" element={<UserForm />}>
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          </Route >
          <Route path='/success' element={<ThankYouMessage/>} />

        
    </Routes>
    
    
    </BrowserRouter>

</>
  )
}


export default App;
