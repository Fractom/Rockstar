"use client"
import { useState } from 'react';


const ImageSlider = ({ images }:any) => {
  
  const [current, setCurrent] = useState(0);

 
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

 
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="left-arrow"> &lt; </button>
      <img src={images[current]} alt="" className="image" />
      <button onClick={nextSlide} className="right-arrow"> &gt; </button>
    </div>
  );
};
export default ImageSlider;