import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  // State to handle the visibility of the popup
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle the button click and show the popup
  const handleTalkClick = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="Home">
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
        <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          {/* Profile Image with modern styling */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative">
              <img
                src="/assets/phyl.png"
                alt="Phylis Atieno"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain border-4 border-white shadow-2xl relative z-10"
              />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Hi! I'm Phylis Atieno
          </h1>
        

          <button
            onClick={handleTalkClick}
            className="group px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg"
          >
            <a href="mailto:atienophyllis032@gmail.com">
            <span className="flex items-center">
              Talk with me
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            </a>
          </button>
        </div>


          <section className="mb-10">
            <h4 className="text-xl font-semibold mb-5 ml-10">About Me</h4>
            <p className="ml-10 mr-10 text-justify">
              I am a Community and Developer Relations Manager at Chimoney,
              where I get to do what I love: building community. I share some of what I’ve learned in 
              DevRel and open source on the <strong>“Learnings from DevRel”</strong> page, if you’d like 
              to check it out.<br/><br/>
              
              Outside of work, I make music, nothing too serious, just songs
              I enjoy creating when the moment feels right. You’ll find a few of them on the <strong>“Music”</strong> page.

             <br/><br/> One day, I’d love to retire as a writer, documenting different cultures. 
              I want to start with the Luo culture, then learn more about the Mali Empire. 
              After that, who knows? <br/><br/>
              Feel free to reach out and connect! 
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-5 ml-10">Socials</h4>
            <div className="flex items-center space-x-10 ml-10 mb-5">
              <a
                href="https://www.linkedin.com/in/phylis-atieno-ab7826182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a
                href="https://www.instagram.com/___leria_____/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
              <a
                href="https://github.com/phyleria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
};

export default Home;
