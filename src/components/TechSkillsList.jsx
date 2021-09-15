import React from "react";
import iconJS from "../images/icon-javascript.png";
import iconhtml from "../images/icon-html.png";
import iconcss from "../images/icon-css.png";
import iconReactJS from "../images/icon-reactjs.svg";
import iconTailwindCss from "../images/icon-tailwindcss.svg";

export const TechSkillsList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-start">
      <Skill icon={iconJS} skill="Javascript" />
      <Skill icon={iconReactJS} skill="ReactJS" />
      <Skill icon={iconhtml} skill="HTML5" />
      <Skill icon={iconcss} skill="CSS3" />
      <Skill icon={iconTailwindCss} skill="Tailwind CSS" />
    </div>
  );
};

const Skill = ({ icon, skill }) => {
  return (
    <div className="mr-4 flex flex-col items-center">
      <div>
        <img src={icon} alt={skill} className="h-20 w-20" />
      </div>
      <div>{skill}</div>
    </div>
  );
};
