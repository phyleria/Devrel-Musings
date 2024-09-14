import React from "react";
import "../App.css";

const shows = [
  {
    date: "Cover",
    title: "Georgia",
    image: process.env.PUBLIC_URL + "/assets/Cover.jpg",
    url: "https://youtu.be/jFxso9YJriE?si=np3ABzfDvwcK1eWG",
  },
  {
    date: "Original",
    title: "Mwisho",
    image: process.env.PUBLIC_URL + "/assets/Cover2.jpeg",
    url: "https://youtu.be/i37cs6f9Tuo?si=lkDYaKVggJcF6-7o",
  },
  {
    date: "Cover",
    title: "No, No",
    image: process.env.PUBLIC_URL + "/assets/Cover3.jpeg",
    url: "https://youtu.be/yc0fKDwCszM?si=DHbENYXuGor7zGYy",
  },
  {
    date: "Original",
    title: "Samahani",
    image: process.env.PUBLIC_URL + "/assets/Cover4.jpg",
    url: "https://youtu.be/FuydTn5AVlM?si=mr8p8SMiw_gbuHvC",
  },
];

const Musings = () => {
  return (
    <div className="Music">
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
        <section
          className="flex flex-col rounded-lg items-center justify-center text-center py-20 bg-gray-800"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Cover.jpg)`,
          }}
        >
          <button
            className="bg-orange-500 text-white px-8 py-4 rounded mt-4"
            onClick={() =>
              window.open(
                "https://youtube.com/@___leria?si=wlOGQIqjCRH4dGxl",
                "_blank"
              )
            }
          >
            SUBSCRIBE ON YOUTUBE
          </button>
        </section>
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Covers & Originals{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {shows.map((show, index) => (
              <a
                key={index}
                href={show.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brown-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-400">{show.date}</p>
                  <h3 className="font-bold text-lg mt-2">{show.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Musings;
