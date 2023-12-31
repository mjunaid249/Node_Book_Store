import React from "react";
import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="text-white px-4 py-1 rounded-lg w-fit bg-sky-800"
      >
        <BsArrow90DegLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
