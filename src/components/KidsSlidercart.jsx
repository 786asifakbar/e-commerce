import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const KidsSlidercart = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl md:text-4xl mb-10 text-center md:text-left'>Kid's Collection</h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true} // Allow infinite loop
                showThumbs={false}
                autoPlay={false}
                interval={3000}
                dynamicHeight={true} // Adjust height based on content
                emulateTouch={true}
                swipeable={true}
                showStatus={false} // Hide status text (e.g., "1 of 10")
                transitionTime={500} // Duration of transition
                renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <button
                            type="button"
                            onClick={clickHandler}
                            title={labelPrev}
                            className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 bg-gray-800 text-white p-2 rounded-md w-12 h-12 md:h-16 md:w-16"
                        >
                            &#8249;
                        </button>
                    )
                }
                renderArrowNext={(clickHandler, hasNext, labelNext) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={clickHandler}
                            title={labelNext}
                            className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 bg-gray-800 text-white p-2 rounded-md w-12 h-12 md:h-16 md:w-16"
                        >
                            &#8250;
                        </button>
                    )
                }
            >
                {/* Render each grid of images individually */}
                {createSlides(data).map((slide, index) => (
                    <div key={index} className='p-4'>
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {slide.map((d, idx) => (
                                <div
                                    key={idx}
                                    className='relative text-black rounded-xl overflow-hidden group'
                                >
                                    <img
                                        src={d.img}
                                        alt={d.collection}
                                        className='w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                                    />
                                    <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4'>
                                        <p className='text-sm md:text-lg mb-2'>{d.collection}</p>
                                        <p className='text-center text-xs md:text-sm mb-4'>{d.pera}</p>
                                        <button className="bg-white text-gray-800 hover:bg-gray-300 px-3 py-1 md:px-4 md:py-2 rounded-full flex items-center">
                                            <FaShoppingCart className="mr-2" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

// Helper function to create slides with a specified number of images per slide
const createSlides = (data) => {
    const slides = [];
    for (let i = 0; i < data.length; i += 4) { // Adjust chunk size based on the maximum number of images you want per slide
        slides.push(data.slice(i, i + 4));
    }
    return slides;
};

const data = [
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/1.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/2.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/3.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/4.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/5.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/6.jpg",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/7.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/8.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/9.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/10.jpg",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/11.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/12.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/13.jpeg",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/14.jpg",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/15.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/16.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/16.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/17.jpg",
        pera: "Style with our exclusive range of branded clothing.",
    }, 
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/18.jpg",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/18.jpg",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/20.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/21.jpg",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/22.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
    {
        collection: "Kid's Collection",
        img: "../src/Images/Kids/kids/23.webp",
        pera: "Style with our exclusive range of branded clothing.",
    },
   



    
    // Add more items as needed
];

export default KidsSlidercart;
