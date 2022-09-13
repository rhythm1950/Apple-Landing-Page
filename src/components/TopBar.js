import React from "react";

const TopBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#">
          <i
            className="fa fa-apple"
            style={{ fontSize: "18px", color: "rgba(240, 255, 255, 0.664)" }}
          ></i>
        </a>
        <a href="#">Store</a>
        <a href="#">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iPhone</a>
        <a href="#">Watch</a>
        <a href="#">AirPods</a>
        <a href="#">TV & Home</a>
        <a href="#">Only on Apple</a>
        <a href="#">Accessories</a>
        <a href="#">Support</a>
        <a href="#">
          <i
            className="fa fa-search"
            style={{ fontSize: "18px", color: "rgba(240, 255, 255, 0.664)" }}
          ></i>
        </a>
        <a href="#">
          <i
            style={{ fontSize: "18px", color: "rgba(240, 255, 255, 0.664)" }}
            className="fa"
          >
            &#xf290;
          </i>
        </a>
      </nav>
    </header>
  );
};

export default TopBar;
