import React, { useEffect, useState } from "react";

const LoadingWithData = (WrapComp) => {
  return function HOCComponent(props) {
    const [isload, setLoader] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
      setLoader(true);
      fetch(props.url)
        .then((res) => res.json())
        .then((fetchedData) => {
          setData(fetchedData);
          setLoader(false);
        });
    }, [props.url]);

    if (isload) {
      return <span className="text-center">Loading....</span>;
    }
    return <WrapComp {...props} posts={data} />;
  };
};

export default LoadingWithData;
