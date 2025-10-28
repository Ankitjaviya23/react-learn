import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
const App = () => {
  return (
    <>
      <Header />
      <h1>Main Screen</h1>
      <h3>Content Section</h3>
      <div id="mainContain">Container section</div>

      <Card />

      <Footer />
    </>
  );
};

export default App;
