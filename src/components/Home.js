import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="Home">
      <div className="max-w-5xl mx-auto p-5 bg-[#f6f4ef] mt-5 mb-20 rounded-lg shadow-lg">
        {" "}
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
          <button className="mt-4 md:mt-0 px-4 py-2 border border-black hover:bg-gray-100 rounded-full">
            See my work
          </button>
        </header>
        <main>
          <section className="text-center mb-10">
            <img
              src={process.env.PUBLIC_URL + "/assets/Phylo.PNG"}
              alt="Phylis"
              className="w-40 h-40 rounded-full mx-auto mb-5 border border-white"
            />
            <h2 className="text-3xl font-semibold">Hi! I’m Phylis Atieno</h2>
            <p className="text-lg text-gray-600">
              Community & DevRel Manager from Kenya.
            </p>
          </section>

          <section className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-5">
              "Building communities and passion around products"
            </h3>
            <div className="flex justify-center space-x-5">
              <button className="px-4 py-2 border border-black hover:bg-gray-100 hover:text-black rounded-full bg-black text-white">
                Talk with me
              </button>
            </div>
          </section>

          <section className="mb-10">
            <h4 className="text-xl font-semibold mb-5 ml-10">About Me</h4>
            <p className="ml-10 mr-10 text-justify">
              Hi there stranger or friend😉 Welcome to my website. A little bit
              about me; I love artsy stuff and have a deep love for music, alone
              time and connecting with people (sometimes). Professionally,
              helping others achieve their goals makes me very happy. Maybe
              there’s something I can help you with.
              <br />
              <br />
              Currently, I’m a Community and Developer Relations Manager at
              Chimoney. I work closely with developers to help them learn more
              about our product and integrate with it. I love combining my
              passion for technology and community building in my current role.
              Throughout my journey, I've worked with several industries and
              platforms, which has helped me understand and appreciate the tech
              world. I enjoy sharing my knowledge and experiences with the
              community at events and through my writings. Check out some of the
              presentations and articles I’ve contributed to on my Learnings
              from DevRel Page.
              <br />
              <br />
              Outside of work, I am very committed to my music career. I love
              singing and learning new instruments. I share my performances and
              covers through videos and reels. This helps me connect with people
              who appreciate music like I do.
              <br />
              <br />
              Oh, and finally my ideal retirement plan is to become a writer
              documenting cultures. I would like to start with the Luo culture
              but outside my own, I would love to explore the documented Mali
              culture.
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
