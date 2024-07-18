import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import Article from "../../components/article/Article";

const ArticleInfo = [
  {
    imageUrl: blog01,
    date: "Sep 26, 2021",
    description: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog02,
    date: "Sep 26, 2021",
    description: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog03,
    date: "Sep 26, 2021",
    description: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog04,
    date: "Sep 26, 2021",
    description: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imageUrl: blog05,
    date: "Sep 26, 2021",
    description: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-blogs">
        <div className="gpt3__blog-blogs__mainarticle">
          <Article imageUrl={ArticleInfo[0].imageUrl} date={ArticleInfo[0].date} description={ArticleInfo[0].description} />
        </div>
        <div className="gpt3__blog-blogs__subarticle">
          {ArticleInfo.slice(1).map((item, index) => (
            <Article
              imageUrl={item.imageUrl}
              date={item.date}
              description={item.description}
              key={item.description + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
