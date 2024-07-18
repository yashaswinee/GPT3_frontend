import React from "react";
import "./article.css";

const Article = ({ imageUrl, date, description }) => {
  return (
    <div className="gpt3__article-container__article">
      <div className="gpt3__article-container__article-image">
        <img src={imageUrl} alt="Blog-Image" />
      </div>
      <div className="gpt3__article-container__article-contents">
        <div>
          <p>{date}</p>
          <h3>{description}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
