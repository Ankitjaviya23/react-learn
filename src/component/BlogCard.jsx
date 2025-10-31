import React from "react";
import Button from "../component/Button";
const BlogCard = (props) => {
  return (
    <>
      <div className="blogCard">
        <h4>{props.data.title}</h4>
        <img className="blogimg" src="https://dummyimage.com/svga" />
        <p>{props.data.body}</p>
        <Button content={props.data} btnName={"Read more"} isDownload={false} />
        <Button
          content={props.data}
          btnName={"Download Content"}
          isDownload={true}
        />
      </div>
    </>
  );
};

export default BlogCard;
