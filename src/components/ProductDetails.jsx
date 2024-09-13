import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCarSide } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { addToCart } from '../redux/cartSlice';

const ProductDetails = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1); // Quantity state

    useEffect(() => {
        const newProduct = products.find(product => product.id === parseInt(id));
        setProduct(newProduct);

        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, [id, products]);

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart({ ...product, quantity })); // Pass quantity to cart
        alert("Product Added Successfully");
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24 mt-32'>
            <div className='flex flex-col md:flex-row gap-x-16'>
                {/* Product Image */}
                <div className='w-full md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center'>
                    <img src={product.img} alt={product.name} className='h-full'/>
                </div>
                {/* Product Information */}
                <div className='md:w-1/2 shadow-md p-8 md:p-10 flex flex-col items-center gap-y-4'>
                    <h2 className='md:text-3xl text-xl mb-2'>{product.name}</h2>
                    <p className='text-xl text-gray-800 mb-4'>Rs {product.price}</p>

                    {/* Quantity Counter */}
                    <div className='flex items-center mb-4'>
                        <button 
                            className='px-3 py-1 bg-gray-300 rounded-l' 
                            onClick={decreaseQuantity}
                        >
                            -
                        </button>
                        <span className='px-4 py-1 bg-gray-100'>{quantity}</span>
                        <button 
                            className='px-3 py-1 bg-gray-300 rounded-r' 
                            onClick={increaseQuantity}
                        >
                            +
                        </button>
                    </div>

                    {/* Icons Section */}
                    <div className='flex flex-col gap-y-4 w-full'>
                        <p className='flex items-center justify-start w-full'>
                            <FaCarSide className='mr-2' />
                            Delivery & returns
                        </p>
                        <p className='flex items-center justify-start w-full'>
                            <FaQuestionCircle className='mr-2' />
                            Ask Question Freely
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <div 
                        className="mt-4 w-full flex items-center justify-center bg-red-600 text-white text-sm rounded-full p-2 hover:bg-red-700 transition-all cursor-pointer" 
                        onClick={(e) => handleAddToCart(e, product)}
                    >
                        <FaCartArrowDown className='mr-2' />
                        <span>Add To Cart</span>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className='mt-8'>
                <h3 className='text-xl font-bold mb-2'>Product Description</h3>
                <p>The Product Will Details will Be Shown Here</p>
            </div>
        </div> 
    );
};

export default ProductDetails;
