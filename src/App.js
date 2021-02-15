import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Planets from "../src/components/Planets";
import People from "../src/components/People";

function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className='App'>
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className='content'>
        {page === "Planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
