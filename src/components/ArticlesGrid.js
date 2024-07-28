import React from "react";

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

const ArticlesGrid = () => {
  return (
    <div className="ArticlesGrid">
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
            <div className="p-4">
              <h3 className="font-bold text-lg">{article.title}</h3>
              {article.category && (
                <p className="text-sm text-gray-600">{article.category}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
