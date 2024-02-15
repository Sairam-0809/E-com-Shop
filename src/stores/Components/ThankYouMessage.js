import React from 'react';
import "../../App.css";
import { useNavigate } from 'react-router-dom';
const ThankYouMessage = () => {
  const Navigate=useNavigate();
  return (
    <>
    <div className='message'>
      <h2>Thank you for shopping with us!</h2>
      <p>Your payment was successful.</p>
      <p>We appreciate your business and look forward to serving you again.</p>
    </div>

    <button className='goHome' onClick={()=>Navigate('/')}>Go Home</button>
    </>
  );
};

export default ThankYouMessage;
