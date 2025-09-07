import React from "react";
const skills = [
  { name: "HTML", icon: "devicon-html5-plain colored", link: "https://www.w3schools.com/html/" },
  { name: "CSS", icon: "devicon-css3-plain colored", link: "https://www.w3schools.com/css/" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored", link: "https://www.w3schools.com/js/" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", link: "https://tailwindcss.com/docs" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", link: "https://getbootstrap.com/docs/" },
  { name: "React.JS", icon: "devicon-react-original colored", link: "https://react.dev/" },
  { name: "Node.JS", icon: "devicon-nodejs-plain-wordmark colored", link: "https://nodejs.org/docs/latest/api/" },
  { name: "GitHub", icon: "devicon-github-original", link: "https://docs.github.com/" },
  { name: "Express.JS", icon: "devicon-express-original", link: "https://expressjs.com/en/guide/routing.html" },
  { name: "C++", icon: "devicon-cplusplus-plain colored", link: "https://cplusplus.com/doc/tutorial/" },
];

const Skills = () => {
  return (
    <div className="mt-10">
      <h2 className="text-5xl text-center font-bold">My Skills</h2>
      <div className="my-5 mx-5 flex flex-wrap items-center justify-center gap-5">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Learn more about ${skill.name}`}
            className="w-36 md:w-52 h-40 md:h-56 bg-gray-200 text-8xl md:text-9xl 
                       flex flex-col justify-evenly items-center border cursor-pointer 
                       hover:bg-gray-300 transition-all duration-300"
          >
            <i className={skill.icon}></i>
            <h2 className="text-2xl md:text-4xl font-bold">{skill.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
