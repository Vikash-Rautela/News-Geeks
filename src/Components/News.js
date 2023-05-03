import { React, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Image from "../Images/News1.jpg";

function News(props) {
  let category = props.category;
  let [articles, setArticles] = useState([]);

  let resultNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  useEffect(() => {
    resultNews();
  });

  return (
    <div className="container my-3">
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                sourceName={element.source.name}
                title={element.title}
                desc={element.description}
                imageURL={element.urlToImage ? element.urlToImage : Image}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
