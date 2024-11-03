import React from 'react';
import { Button, message } from 'antd';

export default function ShowOrders() {
  // Function to handle checkout button click
  const handleCheckout = () => {
    message.info('Payment method is not integrated yet');
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title">Total Orders</h2>
      <div className="orders-message">
        <p className="orders-notice">There are no orders because the user has not completed the payment.</p>
      </div>
      <Button type="primary" className="checkout-button" onClick={handleCheckout}>
        Checkout
      </Button>
    </div>
  );
}
