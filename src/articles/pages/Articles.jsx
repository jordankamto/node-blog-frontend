import React from "react";
import ArticleList from "../components/ArticleList";
import { ARTICLES } from "../../dummyData";

const Articles = () => {
  return <ArticleList articles={ARTICLES} />;
};

export default Articles;
