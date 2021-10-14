import React from "react";
import image from "../wynwood.jpg";

function Home() {
  return (
    <main className="">
      <img
        src={image}
        alt="Wynwood Miami"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
        <h1 className="text-6xl  text-green-100 font-blod cursive leading-none lf:leading-snug home-name">
          Olá. I'm Chris.
        </h1>
      </section>
    </main>
  );
}

export default Home;
