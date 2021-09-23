import React from "react";
import { DisplayPicture, SocialMediaBar, TechSkillsList } from "../components";

export const Home = () => {
  return (
    <div className="xl:px-48 2xl:px-60">
      <SectionAboutMe />
      <SectionTechStack />
      <SectionExperience />
    </div>
  );
};

const SectionAboutMe = () => {
  const age = Math.floor((new Date() - new Date(1998, 5, 9)) / 31536000000);
  return (
    <section className="flex flex-col justify-between sm:flex-row mt-4 sm:mt-16">
      <div className="flex flex-col items-center sm:justify-start">
        <DisplayPicture imgURL="https://media-exp1.licdn.com/dms/image/C5103AQFCFNvH-ltnZQ/profile-displayphoto-shrink_800_800/0/1551121319690?e=1637193600&v=beta&t=Lp9okbfvZTTVrLFKEMrFebIfcG2Fo8Rz8s_4UxzrnIY" />
        <SocialMediaBar />
      </div>
      <div className="sm:w-3/5 flex flex-col items-center sm:justify-start mt-5">
        <h1 className="text-3xl sm:text-4xl pb-2 sm:pb-3">About Me</h1>
        <p className="flex-shrink text-gray-600 w-3/5 text-center sm:w-full">
          Hi I am <strong>Shivaansh Agarwal</strong>, a {age} years old Web
          Developer, currently working at Temenos as a Senior Software Developer
          (Frontend) in Hyerabad, India. <br />I did my bachelors in Computer
          Science and Engineering with Specialization in Data Analytics and
          graduated in 2020. <br />I enjoy working on Frontend side of
          Web-development.
        </p>
      </div>
    </section>
  );
};

const SectionTechStack = () => {
  return (
    <section className="flex flex-col items-center sm:justify-start sm:items-start mt-5 sm:mt-20">
      <h1 className="text-3xl sm:text-4xl pb-2 sm:pb-3">Tech Stack</h1>
      <TechSkillsList />
    </section>
  );
};

const SectionExperience = () => {
  return (
    <section className="flex flex-col items-center sm:justify-start sm:items-start mt-5 sm:mt-20">
      <h1 className="text-3xl sm:text-4xl pb-2 sm:pb-3">Experience</h1>
      WIP
    </section>
  );
};
