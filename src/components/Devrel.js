import React from "react";
import "../App.css";

const articles = [
  {
    title: "How to optimize your code reviews",
    category: "Guide // Security",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "What we can learn from vintage computing",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "New GitHub CLI extension tools",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "A smarter, quieter Dependabot",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "3 common DevOps antipatterns and cloud native strategies",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "What's in a name? Moving GitOps beyond buzzword",
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Game Off 2022 winners",
    image: "https://via.placeholder.com/600x400",
  },
];

const Devrel = () => {
  return (
    <div className="devrel">
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

export default Devrel;
