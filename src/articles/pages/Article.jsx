import React from "react";
import ArticleList from "../components/ArticleList";
import { ARTICLES } from "../../dummyData";

const Article = () => {
  return <ArticleList articles={ARTICLES} />;
};

export default Article;
