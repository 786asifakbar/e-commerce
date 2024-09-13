import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
const HoverSlidercart = () => {
    return (
        <div>       
                      {/* only hover div */}
                                  <div className='absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-end  items-center opacity-0 group-hover:opacity-100 transition-opacity   duration-700 ease-in-out rounded-lg overflow-hidden text-center text-white '>
                                       "Style with our exclusive range of branded clothing."

                                       {/* Hover button div */}
                                      <button className="bg-white text-gray-800 hover:bg-gray-300 px-2 py-1  md:rounded-full   rounded-full flex items-center mx-auto mb-2">
                                          <FaShoppingCart className="" />
                                           Add to Cart
                                   </button>
                                </div>
        </div>
    );
};

export default HoverSlidercart;