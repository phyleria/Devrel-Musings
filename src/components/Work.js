import React from "react";
import "../App.css";

const Devrel = () => {
  return (
    <div className="devrel">
      <div className="max-w-5xl mx-auto p-5 bg-[#f6f4ef] mt-5 mb-20 rounded-lg shadow-lg">
        <header className="flex flex-wrap justify-between items-center mb-10 p-5">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10 w-full md:w-auto">
            <a href="/" className="text-2xl font-bold mr-0 md:mr-20">
              Me
            </a>
            <nav>
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14 text-lg w-full md:w-auto md:ml-10">
                <li>
                  <a href="/devrel" className="hover:text-gray-600">
                    Learnings from DevRel
                  </a>
                </li>
                <li>
                  <a href="/Musings" className="hover:text-gray-600">
                    Musings
                  </a>
                </li>
                <li>
                  <a href="/Music" className="hover:text-gray-600">
                    Music
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <a href="/Work">
            <button className="mt-4 md:mt-0 px-4 py-2 border border-black hover:bg-gray-100 rounded-full">
              See my work
            </button>
          </a>
        </header>
        <section className="p-6 rounded-lg shadow-md mb-10">
          <p className="text-lg mt-4 text-gray-600">
            Here are some of my featured projects, mostly built for fun.
          </p>
        </section>
        <div className="flex flex-col items-center space-y-8 p-4">

          {/* Songy */}
          <div className="relative overflow-hidden rounded-lg shadow-lg w-4/5">
            <img
              src={process.env.PUBLIC_URL + "/assets/Songy.png"}
              alt="Project 2"
              className="object-cover w-full"
            />
            <div className="flex flex-col justify-center items-center text-black p-4">
              <p className="text-sm">
                A platform where I try to turn people’s personal stories into custom-made songs.

              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end items-end text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a href="https://phyleria.github.io/Songy/" className="text-lg">
                →
              </a>
            </div>
          </div>
          {/* Open Kommunity */}
          <div className="relative overflow-hidden rounded-lg shadow-lg w-4/5">
            <img
              src={process.env.PUBLIC_URL + "/assets/OpenKommunity.png"}
              alt="Project 2"
              className="object-cover w-full"
            />
            <div className="flex flex-col justify-center items-center text-black p-4">
              <p className="text-sm">
                An open-source website template tailored for school clubs and communities.              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end items-end text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a href="" className="text-lg">
                →
              </a>
            </div>
          </div>
            {/* Hobby Amp */}
          <div className="relative overflow-hidden rounded-lg shadow-lg w-4/5">
            <img
              src={process.env.PUBLIC_URL + "/assets/Hobby_amp.png"}
              alt="Project 3"
              className="object-cover w-full"
            />
            <div className="flex flex-col justify-center items-center text-black p-4">
              <p className="text-sm">
                A site that helps you decide where to dine at or cafe to visit.
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end items-end text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <a href="https://hobby-amp.vercel.app" className="text-lg">
                →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devrel;
