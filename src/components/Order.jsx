import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate = useNavigate();

  // Check if the order object is null or undefined
  if (!order || !order.products) {
    // Redirect to checkout or display a message if the order object is missing
    return (
      <div className="container mx-auto py-8 px-16 lg:px-24 mt-24">
        <h2 className='text-2xl font-semibold mb-4'>No Order Found</h2>
        <p className='md:text-xl'>It looks like there is no order information available. Please go back to the checkout page and try again.</p>
        <button
          className='bg-blue-500 text-white py-2 px-4 hover:bg-blue-700'
          onClick={() => navigate('/checkout')}
        >
          Go to Checkout
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-16 lg:px-24 mt-24">
      <h2 className='text-2xl font-semibold mb-4'>Thank You For Your Order</h2>
      <p className='md:text-xl'>Your order has been successful, and you will receive an email confirmation shortly.</p>

      <div className='mt-4 p-4 border rounded-lg bg-gray-100'>
        <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div className='mt-4'>
          <h2 className='text-md font-semibold mb-2'>Shipping Information</h2>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3>Products Ordered</h3>
          {order.products.map((product, index) => (
            <div key={index} className='flex justify-between'>
              <p>{product.name} x {product.quantity}</p>
              <p>{product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className='mt-4 flex justify-between'>
          <span>Total Price</span>
          <span className='font-semibold'>{order.totalPrice}</span>
        </div>
        <div className='space-x-2 py-1 space-y-1 text-center'>
          <button className='bg-green-500 text-white md:py-2 md:px-4 py-1 px-3 rounded hover:bg-green-800 sm:text-xs'>Order Tracking</button>
          <button className='bg-red-500 text-white md:py-2 md:px-4 py-1 px-2 rounded hover:bg-red-800 sm:text-xs'>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
