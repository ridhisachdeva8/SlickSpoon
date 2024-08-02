import React from 'react';

export default function OrderStatus({ title, count }) {
  return (
    <>
    <div className="order-box">
    <p>{count}</p>
      <h3>{title}</h3>
      
    </div>
    </>
      
  
  )
}
