import React from "react";
import DefaultImage from "../Images/News1.jpg"; // Fallback image

function NewsItem({ desc, title, imageURL, newsUrl, sourceName }) {
  return (
    <div>
      <div className="card my-3">
        <img
          src={imageURL || DefaultImage}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="w-100 fs-6 text-body-secondary text-end">
            - {sourceName}
          </p>
          <p className="card-text">{desc}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
