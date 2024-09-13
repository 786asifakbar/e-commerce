import React from 'react';
import { FaStar, FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => { // Destructure the 'product' prop
    const dispatch = useDispatch();
    
    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
        alert("Product Added Successfully");
    };

    return (
        <Link  to={`/product/${product.id}`}>
        <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
            {/* Product Image */}
            <img src={product.img} alt={product.name} className="w-56 h-90 object-contain mb-4 mx-auto" />

            {/* Product Title */}
            <h3 className="text-lg font-semibold">{product.name}</h3>

            {/* Product Price */}
            <p className="text-gray-500">Rs {product.price}</p>

            {/* Star Rating */}
            <div className="flex items-center mb-4 mt-4">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                {/* Add more stars or conditionally render stars based on product rating */}
            </div>

            {/* Add to Cart Button */}
            <div 
                className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all" 
                onClick={(e) => handleAddToCart(e, product)}
            >
                <span className="group-hover:hidden">
                    <FaCartArrowDown />
                </span>
                <span className="hidden group-hover:block">Add To Cart</span>
            </div>
        </div>
        </Link>
    );
};

export default ProductCard;
