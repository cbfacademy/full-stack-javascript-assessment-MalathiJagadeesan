import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBook from "./Pages/CreateBooks";

import ShowBook from "./Pages/ShowBook";
import EditBook from "./Pages/EditBook";
import DeleteBook from "./Pages/DeleteBook";

const App = () => {
  const apiurl = import.meta.env.VITE_API_URL;
  console.log(apiurl);
  return (
    <Routes>
      <Route path="/" element={<Home apiurl={apiurl} />} />
      <Route path="/books/create" element={<CreateBook apiurl={apiurl} />} />
      <Route path="/books/details/:id" element={<ShowBook apiurl={apiurl} />} />
      <Route path="/books/edit/:id" element={<EditBook apiurl={apiurl} />} />
      <Route
        path="/books/delete/:id"
        element={<DeleteBook apiurl={apiurl} />}
      />
    </Routes>
  );
};

export default App;
