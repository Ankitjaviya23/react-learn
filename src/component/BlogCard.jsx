import React from "react";
import Button from "../component/Button";
const BlogCard = (props) => {
  return (
    <>
      <div className="blogCard">
        <h4>{props.data.title}</h4>
        <img className="blogimg" src="https://dummyimage.com/svga" />
        <p>{props.data.body}</p>
        <Button />
      </div>
    </>
  );
};

export default BlogCard;
