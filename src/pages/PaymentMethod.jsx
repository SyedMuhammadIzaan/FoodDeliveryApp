// import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import { useSelector } from 'react-redux';
import "../style/pages/paymentMethod.scss";
import { useNavigate } from "react-router-dom";


const PaymentMethod = () => {
  const navigate=useNavigate();
  const orders=useSelector((state)=>state.order.orders);
  console.log("Orders",orders);
  return (
    <div className="paymentMethod-wrapper">
        <div className="col-container">
          <div className="row-container">
            <div className='header'>
              <div className='left-arrow-wrapper'>
                <button onClick={()=>{navigate("delivery-info")}}><GoArrowLeft size={22} /></button>
              </div>
              <div className='course-icon'>
                <FiDatabase size={22} />
              </div>
              <div className="heading">
                <h4>Course</h4>
              </div>
            </div>
            <div className='price-container'>
              <h4>Pay Courses</h4>
              <p>$ 220.00</p>
            </div>
            <div className='booked-items'>
              <div className="item">
                <div className="item-name">
                  <p>Greek Salad</p>
                  <p>Qty</p>
                </div>
                <div className="item-price">
                  <span>$ 24.00</span>
                  <span>$ 12.00</span>
                </div>
              </div>
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
          <div className="row-container">
            <div className="title">
              <h4>Pay with Card</h4>
            </div>
            <div className="payment-form-container">
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentMethod