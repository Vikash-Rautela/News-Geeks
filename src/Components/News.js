import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Image from "../Images/News1.jpg";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: "",
      loading: false,
    };
  }
  // category = this.props.category;
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element) => {
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
}

export default News;
