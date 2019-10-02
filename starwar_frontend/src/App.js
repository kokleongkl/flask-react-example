import React from "react";
import Appbar from "./Component/Appbar";
import Searchbar from "./Component/Searchbar";

function App() {
  return (
    <div className="App">
      <Appbar />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
