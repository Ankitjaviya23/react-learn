import React from "react";
import Button from "../component/Button";
const BlogCard = (props) => {
  return (
    <>
      <div className="flex mt-5 ml-5 mr-5 flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="p-4 md:p-5 mt-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {props.data.title}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-400">
            {props.data.body}
          </p>
          <a
            className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href={`/blog/${props.data.id}`}
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
