import React from "react";
import Header from "./header";
import Footer from "./footer";
import notesData from "./notesData";
import Note from "./note";

function App() {
  return (
    <div>
      <Header />
      {notesData.map((note) => (
        <Note key={note.id} header={note.header} note={note.note} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
