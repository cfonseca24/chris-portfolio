import React from "react";
import { projects } from "../data";
import image5 from "../airplane.jpg";

function Project() {
  return (
    <main>
      <img
        src={image5}
        alt="Sky with Plane"
        className="absolute object-cover w-full h-full"
      />
      <div className="text-black-400 bg-white body-font text-center container px-5 py-32 mx-auto  lg:px-38">
        <div className="flex flex-wrap mx-auto bg-black opacity-80 rounded-lg shawdow-2xl flex p-10 ">
        <h1 className="container sm:text-4xl text-3xl font-medium cursive mb-4 text-white text-center">
            PROJECTS
          </h1>
          {projects.map((project) => (
              
            <a
              href={project.link}
              target="blank"
              key={project.image}
              className="sm:w-1/2 w-200 p-4"
            >
              <div className="flex relative rounded ">
                <img
                  alt="gallery"
                  className=" relative inset-0 w-max h-max object-contain shawdow-lg rounded-lg "
                  src={project.image}
                />
                <div className="absolute px-10 py-10 z-10 w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80 rounded-lg">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-200 font-bold cursive mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-white text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Project;
