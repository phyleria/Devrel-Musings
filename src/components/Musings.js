import React from "react";
import "../App.css";

const articles = [
  {
    title: "Faith Changes",
    category: "",
    image: process.env.PUBLIC_URL + "/assets/Faith Changes.jpg",
  },
];

const Musings = () => {
  return (
    <div className="Musings">
      <div className="max-w-5xl mx-auto p-5 bg-[#f6f4ef] mt-5 mb-20 rounded-lg shadow-lg">
        {" "}
        <header className="flex justify-center items-center mb-10">
          <div className="flex items-center space-x-10">
            <a href="#me" className="text-2xl font-bold mr-20">
              Me
            </a>{" "}
            <nav>
              <ul className="flex space-x-14 text-lg">
                {" "}
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
                <li></li>
              </ul>
            </nav>
          </div>
          <button className="px-4 py-2 border border-black hover:bg-gray-100 ml-20 rounded-full">
            See my work
          </button>
        </header>
        <section className="p-6 rounded-lg shadow-md mb-10">
          <p className="text-lg mt-4 text-gray-600">
            This blog is my creative outlet, where I share my passions and
            interests.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
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

export default Musings;
