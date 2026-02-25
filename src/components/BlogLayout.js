import React from "react";
import { Link } from "react-router-dom";

const BlogLayout = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-5">
      <nav className="flex items-center justify-between py-4 mb-2">
        <Link to="/" className="text-xl font-bold">Me</Link>
        <div className="flex gap-6 text-sm text-gray-600">
          <Link to="/devrel" className="hover:text-black">DevRel</Link>
          <Link to="/Musings" className="hover:text-black">Musings</Link>
          <Link to="/Music" className="hover:text-black">Music</Link>
          <Link to="/Reads" className="hover:text-black">Reads</Link>
        </div>
      </nav>
      <Link
        to="/Musings"
        className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-4"
      >
        ← Back to all posts
      </Link>
      {children}
    </div>
  );
};

export default BlogLayout;