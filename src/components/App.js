import "../App.css";
import React from "react";
import HomePage from "./HomePage";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <Header />  //put navbar components here? */}
      <HomePage />
    </div>
  );
}

export default App;
