import React from 'react';  
import { FaShoppingCart } from 'react-icons/fa';
import HoverSlidercart from '../components/HoverSlidercart';
import MansSlidercart from '../components/MansSlidercart.jsx';
import WomenSlidercart from '../components/WomenSlidercart.jsx';
import KidsSlidercart from '../components/KidsSlidercart.jsx';
import BrandsSlidercart from '../components/BrandsSlidercart.jsx';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>    
        {/* Main Div */}
        <div className='mt-40 '>
            <h1 className='md:text-5xl text-2xl font-bold text-center'>Explore The Brand's And Different Collection</h1>  
        </div>
          <div className="container mx-auto p-6 mb-4 mt-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Left Side: Single Image */}
               <div className=" flex justify-center items-center ">
               <div className="relative overflow-hidden group">
                <img
               src="../src/Images/Mens/ShalwarKameez 3.jpg"
               alt="Single Image"
               className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg overflow-hidden">
               <div className="p-4 text-center">
                <p className="text-white mb-4 px-4">
                  "Discover premium quality and style with our exclusive range of branded clothing."
               </p>
                   <button className="bg-white text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-full flex items-center mx-auto"  
                   onClick={() => handleAddToCart({
                       id: 1, // Sample ID, change according to your product data
                       name: "Shalwar Kameez",
                       price: 2000, // Sample price
                       img: "../src/Images/Mens/ShalwarKameez 3.jpg"
                   })}>
                      <FaShoppingCart className="mr-2" />
                    Add to Cart
                   </button>
              </div>
                   </div>
             </div>
           </div>

         
                {/* Right Side: Four Images */}
                  {/* one image */}
                    <div className="grid grid-cols-2 gap-4">
                         <div className='flex justify-center items-center'>
                               <div className='relative overflow-hidden group'>
                                  <img src="../src/Images/Brandings/alkaram/Alkaram 1.webp" alt="Image 1" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105" />
                                 <HoverSlidercart/>
                           </div>
                        </div>
                       {/* second Image   */}

                        <div className='flex justify-center items-center'>
                               <div className='relative overflow-hidden group'>
                                  <img src="../src/Images/Mens/ShalwarKameez 4.jpg" alt="Image 2" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105" />
                                  <HoverSlidercart/>
                           </div>
                        </div>
                         {/* Third Image  */}

                        <div className='flex justify-center items-center'>
                               <div className='relative overflow-hidden group'>
                                  <img src="../src/Images/Brandings/alkaram/alkrm5.webp" alt="Image 3" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105" />
                                  <HoverSlidercart/>
                           </div>
                        </div>
                          {/* Forth Image  */}

                        <div className='flex justify-center items-center'>
                               <div className='relative overflow-hidden group'>
                                  <img src="../src/Images/Kids/kids/18.jpg" alt="Image 4" className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105" />
                                    <HoverSlidercart/>
                           </div>
                        </div>
                    </div>
              </div>
              <MansSlidercart/>
              <WomenSlidercart/>
              <KidsSlidercart/>
              <BrandsSlidercart/>
             
          </div>
        </>
    );        
};

export default Home;
