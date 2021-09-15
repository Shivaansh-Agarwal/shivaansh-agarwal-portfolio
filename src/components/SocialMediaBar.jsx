import React from "react";
import iconGithub from "../images/icon-github.svg";
import iconLinkedin from "../images/icon-linkedin.svg";
import iconTwitter from "../images/icon-twitter.svg";

export const SocialMediaBar = () => {
  return (
    <div className="flex flex-row justify-evenly pt-5 w-40">
      <a href="https://github.com/Shivaansh-Agarwal" target="_blank">
        <img
          src={iconGithub}
          alt="Github"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </a>
      <a href="https://www.linkedin.com/in/shivaansh-agarwal/" target="_blank">
        <img
          src={iconLinkedin}
          alt="Linkedin"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </a>
      <a href="https://twitter.com/Shivansh_97" target="_blank">
        <img
          src={iconTwitter}
          alt="Twitter"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </a>
    </div>
  );
};
