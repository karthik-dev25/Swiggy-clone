import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div id="container">
      <div id="logo">
        <img  src="./assets/download.png" />
      </div>
      <div id="search-bar">
        <input type="search" />
      </div>
      <div id="user-icon">User icon</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
