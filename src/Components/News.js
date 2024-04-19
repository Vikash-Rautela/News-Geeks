import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Image from "../Images/News1.jpg";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const { category } = props;
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=${process.env.API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setTotalResults(data.totalResults);
      } catch (error) {
        setError("An error occurred while fetching news.");
      }
      setLoading(false);
    };

    fetchNews();
  }, [category, page]);

  const fetchData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container my-3">
      {loading && <h4 className="text-center">Loading...</h4>}
      {error && <div className="alert alert-danger">{error}</div>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                sourceName={element.source.name}
                title={element.title}
                desc={element.description}
                imageURL={element.urlToImage ? element.urlToImage : Image}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      {articles.length === 0 && !loading && !error && (
        <p>No articles found for the selected category.</p>
      )}
    </div>
  );
}

export default News;
