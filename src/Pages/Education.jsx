import React from 'react';
import ICP_LOGO from '../../public/assets/ICP_LOGO.jpg'

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center my-5 gap-5 mx-5">
      <h2 className="text-5xl text-center font-bold">My Education in ICP</h2>
      <div>
        <img
          src={ICP_LOGO}
          alt="Islamia College Peshawar Logo"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold">Bachelor of Science in Software Engineering</h2>
        <h3 className="text-2xl font-bold">Islamia College Peshawar</h3>
        <p className="text-lg font-thin">2022-2026 (In Progress)</p>
      </div>
    </div>
  );
};

export default Education;
