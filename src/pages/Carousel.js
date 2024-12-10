import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 4; // Number of items visible per slide
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full overflow-hidden  ">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500 "
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full h-[380px]  px-14 flex-shrink-0"
            style={{ flex: "0 0 100%" }}
          >
            {products
              .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
              .map((product, index) => (
                <div
                  key={index}
                  className="bg-[#FDFBFB] w-[300px] px-4  flex gap-2 flex-col   text-center"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={100}
                   
                    className=" object-fill w-[300px]   rounded-lg"
                  />
                  <div className="w-full mb-2 flex items-cente justify-between"> 
                   <h3 className=" font-bold">{product.title}</h3>
                  <p className=" text-[20px] font-semibold">0<sup>€</sup></p>
                  </div>

                <div className="flex justify-between">
                 <p className="text-sm text-gray-400">{product.description}</p>
                  <p className=" text-sm pb-1  bg-[#80808020] rounded-xl  w-[80px]">20 pieces</p>
                </div>

                 </div>
                 
              ))}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#5CD2DD] hover:bg-gray-300 text-black p-2 rounded-sm"
      >
       <FaArrowLeft className="text-white"/>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#5CD2DD] hover:bg-gray-300 text-black p-2 rounded-sm"
      >
        <FaArrowRight className="text-white"/>
      </button>
    </div>
  );
};

export default Carousel; 