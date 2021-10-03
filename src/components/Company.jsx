import { Designation } from "./Designation.jsx";
import { getDurationLength, getDurationString } from "../utilities/utility.js";

export const Company = ({ experience }) => {
  const {
    companyLogo,
    companyName,
    startDate,
    endDate,
    location,
    designations,
  } = experience;
  const { years, months } = getDurationLength(startDate, endDate);
  const durationString = getDurationString(startDate, endDate);
  return (
    <section className="border-b p-4 my-4 w-full">
      <div className="flex">
        <div>
          <img src={companyLogo} alt="CompanyLogo" className="h-16 w-16" />
        </div>
        <div className="ml-4">
          <div className="text-gray-900 font-semibold text-lg">
            {companyName}
          </div>
          <div className="text-gray-500 font-light">{`${durationString} (${
            years !== 0 ? `${years} yr` : ""
          } ${months} mos)`}</div>
          <div className="text-gray-500 font-light">{location}</div>
        </div>
      </div>
      {designations.map((designation, index) => {
        return <Designation key={index} position={designation} />;
      })}
    </section>
  );
};
