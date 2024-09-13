import React from 'react';

const Button = (props) => {
    return (
        <button className='px-10 py-3   md:ml-8 bg-gray-800 text-white hover:bg-slate-100 hover:text-black hover:border border-gray-600 transition-colors duration-300 rounded text-3xl'>
         {props.children}
        </button>
    );
};

export default Button;