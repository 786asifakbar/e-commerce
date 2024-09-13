import React, { useEffect, useState } from 'react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const content = [
    '"Elevate your style with our exclusive branded and casual dresses, where tradition meets modern elegance."',
    'Shop Now Go To Add To Cart In Website and Explore Your Brands',
    'Email: brandseller277@gmail.com',
    'Contact: 0333-5081913',
    'Delivery Charges: 500+ RS',
  ];

  // Duplicating the content array to create an infinite loop effect
  const duplicatedContent = [...content, ...content];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % duplicatedContent.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [duplicatedContent.length]);

  // Resetting the slider back to the start without visible snapping
  useEffect(() => {
    if (currentSlide === content.length) {
      setTimeout(() => {
        setCurrentSlide(0);
      }, 3000); // Delay to let the last slide complete its transition
    }
  }, [currentSlide, content.length]);

  return (
    <div className="bg-white  border border-gray-300 text-black py-2 sticky top-0 z-50">
      <div className="relative h-6 overflow-hidden">
        <div
          className="absolute flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${(currentSlide * 100) / content.length}%)`, width: `${duplicatedContent.length * 100}%` }}
        >
          {duplicatedContent.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 text-center"
              style={{ width: `${100 / duplicatedContent.length}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
