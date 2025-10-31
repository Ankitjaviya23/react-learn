import React from "react";

const Button = ({ content, btnName, isDownload }) => {
  const viewMore = (value) => {
    console.log("value", value);
    return value;
  };

  const downloadContent = (item) => {
    console.log("item", item);
    return item;
  };

  return (
    <div>
      <input
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        type="button"
        value={btnName}
        onClick={() =>
          !isDownload ? viewMore(content.id) : downloadContent(content.title)
        }
      />
    </div>
  );
};

export default Button;
