import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Note from "../components/body/Note";
import notes from "../notes";

let App = () => {
  return (
    <div>
      <Header />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} note={note.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
