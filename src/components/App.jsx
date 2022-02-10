import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Note from "../components/body/Note";

let App = () => {
  return (
    <div>
      <Header />
      <Note
        title="Just some random title"
        note="Here is a note I made just from the bottom of my heart. I do really hope
        you love it!"
      />
      <Footer />
    </div>
  );
};

export default App;
