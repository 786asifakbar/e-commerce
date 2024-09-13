import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const Support = () => {
  const SupportItems= [
    {
      icon:<FaShippingFast className=' text-3xl text-red-600'/>,
      title: "Free Delivery",
      description:"Get Your Order With No Extra Fee Its Just Free"
    },
    {
      icon:<FaHeadset className=' text-3xl text-red-600'/>,
      title: "Customer Support",
      description:"We Are Providing The Customer Support Fully"
    },
    {
      icon:<FaMoneyBillWave className=' text-3xl text-red-600'/>,
      title: "100% Money Back ",
      description:"Get Your money Back With No Extra Fee Charges"
    },
    {
      icon:<FaLock className=' text-3xl text-red-600'/>,
      title: "Payments Secure ",
      description:"100% Secure Your Payments With /us And Secure"
    },
    {
      icon:<FaTags className=' text-3xl text-red-600'/>,
      title: "Discount Available",
      description:"Get Your Order With Your Oder With Good Discount"
    },
  ]
  return (
      <div className='bg-white pb-8 pt-12'>
           <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5'>
              {SupportItems.map((item,index) =>(
              <div key={index} className='flex flex-col items-center p-4 border rounded-lg shadow-lg transform  transition-transform duration-300 hover:scale-105'>
                  {item.icon}
                  <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                  <p className='mt-2 text-gray-500 text-center'>{item.description}</p>
               </div>
               ))}
           </div>
      </div>
  );
};

export default Support;