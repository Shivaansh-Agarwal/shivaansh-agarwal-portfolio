import React from "react";

export const DisplayPicture = ({ imgURL }) => {
  return (
    <div>
      <img
        src={imgURL}
        alt="Profile"
        className="rounded-full h-40 w-40 sm:h-48 sm:w-48"
      />
    </div>
  );
};
