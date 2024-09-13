import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import Modal from './Modal';
import ChangeAddress from './ChangeAddress';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [address, setAddress] = useState("main Karachi Pakistan postal 75800");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Scroll to the top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Ensure totalPrice is a number, fallback to 0 if it's not
    const totalPrice = Number(cart.totalPrice) || 0;

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 mt-32'>
            {cart.products.length > 0 ? (
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>Shopping Cart</h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p>Products</p>
                                <div className='flex space-x-8'>
                                    <p>PRICE</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>

                            <div>
                                {cart.products.map((product) => (
                                    <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                                        <div className='md:flex'>
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className='w-16 h-16 object-contain rounded'
                                            />
                                            <div className='flex-1 ml-4'>
                                                <h3 className='text-lg font-semibold'>{product.name}</h3>
                                            </div>
                                        </div>
                                        <div className='flex space-x-12 items-center'>
                                            <p>Rs {product.price}</p>
                                            <div className='flex items-center justify-center border'>
                                                <button
                                                    className='text-xl font-bold px-1.5 border-r'
                                                    onClick={() => dispatch(decreaseQuantity(product.id))}
                                                >
                                                    -
                                                </button>
                                                <p className='text-xl px-2'>{product.quantity}</p>
                                                <button
                                                    className='text-xl px-1 border-1'
                                                    onClick={() => dispatch(increaseQuantity(product.id))}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <p>Rs {(product.quantity * product.price).toFixed(2)}</p>
                                            <button
                                                className='text-red-500 hover:text-red-700'
                                                onClick={() => dispatch(removeFromCart(product.id))}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border md:mt-0 mt-4'>
                            <h3 className='text-sm font-semibold mb-5'>Total of Your Cart</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>

                            <div className='mb-4 border-b pb-2'>
                                <p>Shipping:</p>
                                <p className='ml-2'>
                                    Shipping to{" "}
                                    <span className='text-xs font-bold'>{address}</span>
                                </p>
                                <button
                                    className='text-blue-500 hover:underline mt-1 ml-2'
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Change Address
                                </button>
                            </div>

                            <div className='flex justify-between mb-4'>
                                <span>Total Price</span>
                                <span>Rs {totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                className='w-full bg-red-600 text-white py-2 hover:bg-red-800'
                                onClick={() => navigate('/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                        <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
                    </Modal>
                </div>
            ) : (
                <div className="flex justify-center items-center ">
                          <div className="text-center">
                            <img
                                 src="../src/Images/EmptyCart.png"
                                 alt="Empty Cart"
                                 className="mx-auto md:h-96 h-56"
                            />
                            <p className="text-xl text-red-500 mt-4">No Product Is Available</p>
                            <span className="block mt-2">Add Some Products and Make Me Happy 😊</span>
                          </div>
                </div>

            )}
        </div>
    );
};

export default Cart;
