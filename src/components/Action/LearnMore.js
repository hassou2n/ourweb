/** @format */

import React, { useState } from "react";

export const LearnMore = ({ children }) => {
  const text = children;
  const [isLearnMore, setIsLearnMore] = useState(true);
  const toggleLearnMore = () => {
    setIsLearnMore(!isLearnMore);
  };
  return (
    <p className="text">
      {isLearnMore ? text.slice(0, 100) : text}
      <span onClick={toggleLearnMore} className="read-or-hide">
        {isLearnMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
