import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const articles = [
  {
    title: "Developer Experience in My Role",
    category: "DevRel",
    image: process.env.PUBLIC_URL + "/assets/DX.png",
    url: "/blog/DX",
  },
  {
    title: "Empowering Financial Communities Through Open-Source Readiness",
    category: "Open Source",
    image: "https://live.staticflickr.com/65535/53821169042_0d76621f0b_z.jpg",
    url: "/blog/OF",
  },
];

const Devrel = () => {
  return (
    <div className="devrel">
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
          <a href="/Work">
            <button className="mt-4 md:mt-0 px-4 py-2 border border-black hover:bg-gray-100 rounded-full">
              See my work
            </button>
            </a>
        </header>
        <section className="p-6 rounded-lg shadow-md mb-10">
          <p className="text-lg mt-4 text-gray-600">
            This is a curation of blogs where I share the things I'm learning in
            my DevRel career.{" "}
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Link to={article.url}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 bg-[#f6f4ef]">
                <h3 className="font-bold text-lg">{article.title}</h3>
                {article.category && (
                  <p className="text-sm text-gray-600">{article.category}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devrel;
