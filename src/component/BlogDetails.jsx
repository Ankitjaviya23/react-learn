import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const BlogDetails = () => {
  let params = useParams();
  let blogId = params?.id;
  const [blogInfo, setBlog] = useState("");
  const [isload, setload] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    getblogs();
  }, [blogId]);

  const getblogs = () => {
    console.log("receive blogid", blogId);

    if (blogId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then((response) => response.json())
        .then((json) => {
          setload(false);
          setBlog(json);
        });
    }
  };

  const handleback = () => {
    navigate("/blog");
  };

  return isload == true ? (
    <h1 className="text-center m-10  text-6xl border border-1 pb-5">
      Loading..
    </h1>
  ) : (
    <div>
      <h1 className="text-center m-10  text-6xl border border-1 pb-5">
        {blogInfo?.title}
      </h1>

      <h2 className="text-center m-10  text-4xl">{blogInfo?.body}</h2>

      <button
        onClick={() => navigate(-1)}
        className="px-2 py-2 m-5 text-white cursor-pointer bg-red-600 rounded-2xl"
      >
        {" "}
        Back to list{" "}
      </button>
    </div>
  );
};

export default BlogDetails;
