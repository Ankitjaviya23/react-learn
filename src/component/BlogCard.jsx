import React from "react";

const BlogCard = (props) => {
  return (
    <>
      <div className="blogCard">
        <h4>{props.data.title}</h4>
        <img className="blogimg" src="https://dummyimage.com/svga" />
        <p>{props.data.body}</p>
      </div>
    </>
  );
};

export default BlogCard;
