import React from "react";
import image2 from "../wynwood5.jpg";

function About() {
  return (
    <main className="">
      <img
        src={image2}
        alt="Wynwood"
        className="absolute object-cover w-full h-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-black opacity-80  rounded-lg shawdow-2xl lg:flex p-28">
          <img
            src="./favicon.ico"
            className="rounded 2-32 lg:h-40 lg:w-64 md:w-32 lf:h-64 mr-8"
            alt="author"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-4xl text-green-300 mb-4">
              Oi there. I'm
              <span className="text-green-100"> Chris Fonseca</span>
            </h1>
            <div className="prose lg:prose-xl text-white text-sm">
              I am a current student at Florida International University
              studying Computer Science. I started to learn to program on my own
              and decided I wanted to further my education in CS. I hope to
              purse a career in software engineering!
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
