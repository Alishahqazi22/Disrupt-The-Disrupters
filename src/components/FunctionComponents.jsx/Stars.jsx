import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


function Stars({ star }) {
  const ratingStars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon" />
        ) : star >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return(
    <Wrapper>
         <div>{ratingStars}</div>
    </Wrapper>
  );
}

export default Stars;
