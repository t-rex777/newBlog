import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  title,
  content,
  page = "",
  image,
  differentSiteLink = "",
}) {
  return (
    <div className="row space">
      <div className="col">
        <div className="card text-center" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Hello World"></img>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="text">{content}</p>
            {page !== "" ? (
              <Link to={page} className="btn btn-outline-info">
                Read
              </Link>
            ) : (
              <a className="differentSiteLink" href={differentSiteLink}>Read</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
