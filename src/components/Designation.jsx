import { useState } from "react";
import { getDurationLength, getDurationString } from "../utilities/utility.js";

export const Designation = ({ position }) => {
  const [isDescriptionCollapsed, setIsDescriptionCollapsed] = useState(true);
  function handleDescriptionCollapse() {
    setIsDescriptionCollapsed(
      (isDescriptionCollapsed) => !isDescriptionCollapsed
    );
  }
  const { designation, employmentType, startDate, endDate, description } =
    position;
  const { years, months } = getDurationLength(startDate, endDate);
  const durationString = getDurationString(startDate, endDate);
  return (
    <section className="my-4 ml-8 pl-12 border-l-4 border-pink-100">
      <div>
        <div className="text-gray-600 font-bold">{designation}</div>
        <div className="text-gray-600 font-light">{employmentType}</div>
        <div className="text-gray-500 font-light mb-2">{`${durationString} (${
          years !== 0 ? `${years} yr ` : ""
        }${months} mos)`}</div>
        {isDescriptionCollapsed ? (
          <div className="relative">
            {description.substr(0, 150)}
            <button
              onClick={handleDescriptionCollapse}
              className="absolute bottom-0 right-0 text-sm text-gray-500 bg-white w-20"
            >
              ...read more
            </button>
          </div>
        ) : (
          <div className="relative">
            {description}
            <button
              onClick={handleDescriptionCollapse}
              className="absolute bottom-0 right-0 text-sm text-gray-500 bg-white w-20"
            >
              ...read less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
