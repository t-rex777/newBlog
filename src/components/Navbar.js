import React from "react";
import "../bootstrap.min.css";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darken[5] mb-5 p-3">
      <button 
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span> Menu
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100 nav-fill mr-5 ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tech">
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/health">
              Health
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
