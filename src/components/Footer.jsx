import React from 'react';
import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-900 text-white'>

            {/* Input for contact div */}
            <div className='md:flex md:justify-between md:items-center md:px-12 px-6 bg-[#ffffff19] py-8 '>
                <h1 className='lg:text-4xl text-3xl lg:leading-normal font-semibold md:w-2/5'>
                    <span className='text-teal-400'>Feel</span> Free To Contact Our Team For Your Desired Branding
                </h1>
                <div className='md:mt-0 mt-6 space-y-2'>
                    <input type='text' placeholder='Enter Your Email' className='text-gray-800 sm:w-72 w-full mr-1 py-2.5 rounded px-3 focus:outline-none'/>
                    <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full'>
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Main footer section */}
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-6 py-16 text-base md:text-xl'>

                <div>              
                    <h1 className='md:text-4xl text-2xl md:mx-7 mx-auto mb-4'>Brand's Seller</h1>
                    <p className='md:mx-7 mx-auto'>25/C 4th Floor Textile Plaza M.A Jinnah Road Karachi</p>
                    <p className='md:mx-7 mx-auto'>brandseller277@gmail.com</p>
                    <p className='md:mx-7 mx-auto'>0333-5081913</p>
                </div>

                <div>
                    <h1 className='md:text-3xl text-2xl mb-4'>Shopping & Categories</h1>
                    <p>Men's Shopping</p>
                    <p>Women's Shopping</p>
                    <p>Kid's Shopping</p>
                    <p>Branding's Shopping</p>
                    <p>Accessories Shopping</p>
                </div>

                <div>
                    <h1 className='md:text-3xl text-2xl mb-4'>Useful Links</h1>
                    <li>Home page</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </div>

                <div>
                    <h1 className='md:text-3xl text-2xl mb-4'>Our Brands</h1>
                    <p>GULL AHMED</p>
                    <p>BONANZA</p>
                    <p>Carina</p>
                    <p>AL KARAM</p>
                    <p>J.</p>
                    <p>SAYA</p>
                    <p>OTHERS</p>
                </div>
            </div>

            {/* Copyright and Social Media Icons */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 text-gray-400 text-sm pb-8'>
                <span className='md:text-xl'>© 2024 Apply All Right reserved</span>
                <span className='md:text-xl'>Brand'Seller terms and Privacy</span>
                <div className='space-x-8'>
                    <FaFacebook className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95'/>
                    <FaInstagramSquare className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95'/>
                    <FaTwitter className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95'/>
                    <FaYoutube className='text-teal-500 cursor-pointer inline-flex items-center rounded-full md:text-4xl text-2xl mx-1.5 hover:text-gray-100 hover:bg-teal-500 duration-300 hover:scale-95'/>
                </div>
            </div>

            </footer>
        </>
    );
};

export default Footer;
