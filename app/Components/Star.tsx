"use client"
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex ml-[200px]">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i} className="inline-block">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseOut={()=> setHover(null)}
              onMouseOver={()=> setHover(ratingValue)}
              className="hidden"
            />
            <FaStar
              className="star"
              color={ratingValue <= ((hover || 0) || (rating || 0)) ? "#ffc107" : "#e4e5e9"}
              size={100}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p className="mt-2 text-white">The rating is {rating || 0}.</p>
    </div>
  );
};
export default StarRating;
