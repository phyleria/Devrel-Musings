import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="Home">
      <div className="max-w-5xl mx-auto p-5 bg-[#f6f4ef] mt-5 mb-20 rounded-lg shadow-lg">
        <header className="flex flex-wrap justify-between items-center mb-10 p-5 font-sans">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10 w-full md:w-auto">
            <a href="/" className="text-2xl font-bold mr-0 md:mr-20">Me</a>
            <nav>
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14 text-lg w-full md:w-auto md:ml-10">
                <li><a href="/devrel" className="hover:text-gray-600">Learnings from DevRel</a></li>
                <li><a href="/Musings" className="hover:text-gray-600">Musings</a></li>
                <li><a href="/Music" className="hover:text-gray-600">Music</a></li>
              </ul>
            </nav>
          </div>
          <a href="/Work">
            <button className="mt-4 md:mt-0 px-4 py-2 border border-black hover:bg-gray-100 rounded-full">
              See my work
            </button>
          </a>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16 mb-8 mt-2">
            {/* Left side - About Me Content */}
            <div className="flex flex-col justify-start flex-1 order-2 md:order-1">
              <h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-2">
                Hi, I'm Phylis 👋🏽
              </h1>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                • I'm a DevRel with experience in community management, currently transitioning into Venture Capital.
                <br/><br/>
                • I love doing a lot of things, and someone (I look up to) once asked me, "Why not just master one?" 
                But I think I have the time so why not? (at least for now, lol).
                <br/><br/>
                • I have been in DevRel for about 3 years and I sometimes share my experiences in the 
                "Learnings from DevRel" page, if you'd like to check it out.
                <br/><br/>
                • As I transition to VC, I write deep dives on my Medium account and you can read them <a href="https://medium.com/@atienophyllis" target="_blank" rel="noopener noreferrer">here</a>.
                <br/><br/>
                • I love music!!! I honestly don't think I say it enough. Anyway, I write and play when I have bursts of creativity 
                (which seemed a lot more before adulting hit me). You'll find some of the recordings in the "Music" page.
                <br/><br/>
                • I adore writing, and one day, I'd love to retire as a writer, documenting different cultures. 
                I want to start with the Luo culture, then learn more about the Mali Empire. After that, who knows?
              </p>
            </div>
          </div>

          <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="text-xl font-semibold ml-1 mb-4">Socials</h4>
              <div className="flex items-center space-x-10 ml-1 mb-4">
                <a href="https://www.linkedin.com/in/phylis-atieno-ab7826182/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <a href="https://www.instagram.com/___leria_____/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
                <a href="https://github.com/phyleria" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
