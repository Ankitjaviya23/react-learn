import React, { useEffect, useState } from "react";

const Index = () => {
  const [booksList, setBooklist] = useState([]);
  const apiURL =
    "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech";

  const getProducts = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.data.data.length > 0) {
      setBooklist(data.data.data);
    } else {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="pl-5 pr-5">
        <h2>Product List</h2>
      </div>

      {booksList.length > 0 ? (
        booksList.map((data, index) => (
          <div key={index} className="blogCard">
            <h3>{data.volumeInfo?.title}</h3>
            <p>{data.volumeInfo?.authors?.join(", ")}</p>
            <p>{data.volumeInfo?.publisher}</p>
          </div>
        ))
      ) : (
        <p>Something wrong</p>
      )}
    </>
  );
};

export default Index;
