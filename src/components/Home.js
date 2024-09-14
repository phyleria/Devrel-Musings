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
        <main>
          <section className="text-center mb-10">
            <img
              src={process.env.PUBLIC_URL + "/assets/Phylo.PNG"}
              alt="Phylis"
              className="w-40 h-40 rounded-full mx-auto mb-5 border border-white"
            />
            <h2 className="text-3xl font-semibold">Hi! I’m Phylis Atieno</h2>
           
          </section>

          <section className="text-center mb-10">
            <h3 className="text-2xl mb-5">
              "Exploring Community, DevRel, Music, and Books!"
            </h3>
            <div className="flex justify-center space-x-5">
              <button
                onClick={handleTalkClick}
                className="px-4 py-2 border border-black hover:bg-gray-100 hover:text-black rounded-full bg-black text-white"
              >
                Talk with me
              </button>
            </div>
          </section>

          <section className="mb-10">
            <h4 className="text-xl font-semibold mb-5 ml-10">About Me</h4>
            <p className="ml-10 mr-10 text-justify">
              Hi there stranger or friend😉
            
              I’m Phylis, currently a Community and Developer Relations Manager at Chimoney, 
              I share my thoughts on community building, DevRel, and open source on my 'Learnings from DevRel' page.
              <br />
              <br />
              Feel free to check out some of my creations on the 'Music' page—random songs recorded in my room, 
              usually late at night.
              <br />
              <br />
              Oh, and finally my ideal retirement plan is to become a writer
              documenting cultures. Starting with documenting the Luo culture, 
              then exploring the history of the Mali Empire. After that, I'll see where it takes me.  
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

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              I'd love to hear from you! Send me an email at{" "}
              <a
                href="mailto:atienophyllis032@gmail.com"
                className="text-blue-500 underline"
              >
                atienophyllis032[at]gmail[dot]com
              </a>
            </p>
            <button
              onClick={closePopup}
              className="flex items-center mt-4 px-4 py-2 border border-black hover:bg-gray-100 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
