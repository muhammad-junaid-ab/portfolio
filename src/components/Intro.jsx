import React from "react";
import myProfile from '../../public/assets/Junaid_Profile.png';
import myCV from '../../public/assets/mJunaidCV.pdf';
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  const buttonClasses =
    "bg-yellow-500 px-6 text-white py-1 text-lg border-3 border-transparent hover:border-yellow-500 hover:bg-white hover:text-yellow-500 rounded-full font-bold cursor-pointer";

  return (
    <div className="flex flex-col md:flex-row md:mx-5">
      {/* Left Side */}
      <section className="w-full md:w-1/2 flex flex-col justify-end gap-10 text-center md:text-start">
        <div className="flex flex-col gap-5 pt-5 md:gap-3">
          <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold">
            HI, I'm Muhammad Junaid
          </h2>
          <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold text-yellow-500">
            Web Developer
          </h2>
        </div>
        <p className="text-gray-600">
          I craft sleek, responsive websites blending creativity and technology.
          Focused on performance, usability, and innovation, I transform ideas
          into digital experiences that inspire, engage, and deliver real
          impact.
        </p>
        <div className="flex gap-5 items-center justify-center md:justify-start">
          <button
            onClick={() => navigate("/contact")}
            className={buttonClasses}
          >
            Contact
          </button>
          <a
            href={myCV}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Right Side */}
      <figure className="w-full md:w-1/2 flex justify-center">
        <img
          src={myProfile}
          alt="Muhammad Junaid Profile Picture"
          className="w-full md:w-full lg:w-4/5"
          loading="lazy"
        />
      </figure>
    </div>
  );
};

export default Intro;
