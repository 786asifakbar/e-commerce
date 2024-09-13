import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    country: '',
    city: '',
    postal: '',
  });

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.totalPrice ? Number(cart.totalPrice) : 0;

  const handleOrder = () => {
    const newOrder = {
      products: cart.products, 
      orderNumber: '', 
      shippingInformation: shippingInfo, 
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    alert(`Shipping Info:
      Address: ${shippingInfo.address},
      Country: ${shippingInfo.country},
      City: ${shippingInfo.city},
      Postal: ${shippingInfo.postal}`
    );
    navigate('/order-confirmation');
  };

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 mt-32'>
      <h3 className='text-2xl font-semibold mb-4'>CheckOut Summary</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
          {/* Billing Information */}
          <div className='border p-2 mb-6'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {billingToggle && (
              <div className='space-y-4'>
                <div className='w-full'>
                  <label className='block text-gray-700'>Name</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter Name'
                    className='px-3 w-full py-2 border'
                  />
                </div>
                <div className='w-full'>
                  <label className='block text-gray-700'>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter Email Address'
                    className='w-full px-3 py-2 border'
                  />
                </div>
                <div className='w-full'>
                  <label className='block text-gray-700'>Address</label>
                  <input
                    type='text'
                    name='address'
                    placeholder='Enter Address'
                    className='w-full px-3 py-2 border'
                  />
                </div>
                <div className='w-full'>
                  <label className='block text-gray-700'>Phone</label>
                  <input
                    type='number'
                    name='phone'
                    placeholder='Enter Phone Number'
                    className='w-full px-3 py-2 border'
                  />
                </div>
              </div>
            )}
          </div>

          {/* Shipping Information */}
          <div className='border p-2 mb-6'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {shippingToggle && (
              <div className='space-y-4'>
                <div className='w-full'>
                  <label className='block text-gray-700'>Delivery Address</label>
                  <input
                    type='text'
                    name='address'
                    placeholder='Enter Address'
                    className='px-3 w-full py-2 border'
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, address: e.target.value })
                    }
                  />
                </div>
                <div className='w-full'>
                  <label className='block text-gray-700'>Country</label>
                  <input
                    type='text'
                    name='country'
                    placeholder='Enter Your Country Name'
                    className='w-full px-3 py-2 border'
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, country: e.target.value })
                    }
                  />
                </div>
                <div className='w-full'>
                  <label className='block text-gray-700'>City</label>
                  <input
                    type='text'
                    name='city'
                    placeholder='Enter City Name'
                    className='w-full px-3 py-2 border'
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                  />
                </div>
                <div className='w-full'>
                  <label className='block text-gray-700'>Postal</label>
                  <input
                    type='number'
                    name='postal'
                    placeholder='Enter your Postal Code'
                    className='w-full px-3 py-2 border'
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, postal: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className='border p-2 mb-6'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {paymentToggle && (
              <div className='space-y-4'>
                <div className='w-full flex items-center mb-2'>
                  <input
                    type='radio'
                    name='paymentMethod'
                    checked={paymentMethod === 'Dc'}
                    onChange={() => setPaymentMethod('Dc')}
                  />
                  <label className='block text-gray-700 ml-2'>Debit Card</label>
                </div>
                <div className='w-full flex items-center mb-2'>
                  <input
                    type='radio'
                    name='paymentMethod'
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                </div>
                {paymentMethod === 'Dc' && (
                  <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                    <h3 className='font-semibold'>Debit Card Information</h3>
                    <div>
                      <label>Card Number</label>
                      <input type='text' className='w-full px-3 py-2 border' />
                    </div>
                    <div>
                      <label>Card Holder Name</label>
                      <input type='text' className='w-full px-3 py-2 border' />
                    </div>
                    <div className='flex justify-between space-x-4'>
                      <div>
                        <label>Expiry Date</label>
                        <input type='text' className='w-full px-3 py-2 border' />
                      </div>
                      <div>
                        <label>CVV</label>
                        <input type='text' className='w-full px-3 py-2 border' />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border md:mt-0 mt-4'>
          <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
          <div className='space-y-4'>
            {cart.products.map((product) => (
              <div key={product.id} className='flex justify-between'>
                <div className='flex items-center'>
                  <img
                    src={product.img}
                    alt={product.name}
                    className='w-16 h-16 object-contain rounded'
                  />
                  <div className='ml-4'>
                    <h4 className='text-md font-semibold'>{product.name}</h4>
                    <p className='text-gray-600'>
                      Rs {product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-4 border-t pt-4'>
            <div className='flex justify-between'>
              <span>Total Price:</span>
              <span className='font-semibold'>Rs {totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button
            className='w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mt-6'
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
