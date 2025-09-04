import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import Note from "./pages/Note";

const App = () => {
  return (
    <div data-theme="business">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<Note />} />
      </Routes>
    </div>
  );
};

export default App;
