/** @format */

import React, { useState } from "react";

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <div>
            ReadMore <i class="bi bi-arrow-right"></i>
          </div>
        ) : (
          " show less"
        )}
      </span>
    </p>
  );
};
