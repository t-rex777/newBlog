import React from "react";
import "../bootstrap.min.css";
import "../App.css";

export default function Base({ children }) {
  return (
    
    <div className="container-fluid  ">
      <div className="blog">{children}</div>
      <footer className="text-center">
        <p>Made By Manish Kumar Sahu </p>
        <p style={{ marginBottom: "0px" }}>@2020 </p>
      <i className="fa-2x fab fa-github icons "></i>
      <i className="fa-2x fab fa-facebook icons"></i>
      <i className="fa-2x fab fa-instagram icons"></i>
      </footer>
    </div>
  );
}
