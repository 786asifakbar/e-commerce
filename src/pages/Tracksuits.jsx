import React, { useEffect } from 'react';
import { Categories, MensTrackSuitData } from '../assets/productData';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Tracksuits = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products); // Adjusted selector path if needed

  useEffect(() => {
    dispatch(setProducts(MensTrackSuitData));
  }, [dispatch]); // Ensure `dispatch` is included in the dependency array

  return (
    <> 
      <div className='bg-white mt-32 px-4 md:px-16 lg:px-24'>
        {/* Categories Section */}
        <div className='container mx-auto py-4 flex flex-col md:flex-row'>
          <div className='w-full md:w-3/12'>
            <div className='bg-red-600 text-white text-xl font-bold px-2 py-4'>Shop By Categories</div>
            <ul className='space-y-4 bg-gray-100 p-3 border'>
              {Categories.map((category, index) => (
                <li key={index} className='flex items-center text-sm font-medium'>
                  <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          
          <div className='w-full md:w-9/12 mt-8 md:mt-0 relative ml-2'>
            <img src='../src/Images/HeroImage.jpg' className='h-full w-full' alt='Hero' />
          </div>
        </div>

        {/* Product Data Details */}
        <div className='container mx-auto py-12'>
          <h2 className='md:text-3xl text-2xl font-bold mb-6 text-center'>Men's Track Suits</h2>
          {/* to display this product into cards we will create productCart components */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer'>
            {products.map((product) => (
               <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracksuits;
