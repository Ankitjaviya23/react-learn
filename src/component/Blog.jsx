import React, { useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";

const Blog = () => {
  const [bloglist, setList] = useState([]);

  const getBlogs = () => {
    const data = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setList(json));
  };

  useEffect(() => {
    getBlogs();
  });

  return (
    <div>
      <h1 className="text-4xl dark:text-black text-center mt-5">Blogs</h1>
      {bloglist.map(function (item, index) {
        return <BlogCard data={item} key={index} />;
      })}
    </div>
  );
};

export default Blog;
