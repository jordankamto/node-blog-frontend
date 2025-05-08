import React from "react";
import ArticleList from "../components/ArticleList";

const Article = () => {
  const ARTICLES = [
    // {
    //   id: "1",
    //   title: "Article #1",
    //   imageUrl: "../assets/image.png",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus!",
    //   author: "SuperAdmin",
    //   publishedDate: "08/05/2025",
    // },
    // {
    //   id: "2",
    //   title: "Article #2",
    //   imageUrl: "../assets/image.png",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus!",
    //   author: "SuperAdmin",
    //   publishedDate: "08/05/2025",
    // },
    // {
    //   id: "3",
    //   title: "Article #3",
    //   imageUrl: "../assets/image.png",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus!",
    //   author: "SuperAdmin",
    //   publishedDate: "08/05/2025",
    // },
    // {
    //   id: "4",
    //   title: "Article #4",
    //   imageUrl: "../assets/image.png",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus!",
    //   author: "SuperAdmin",
    //   publishedDate: "08/05/2025",
    // },
  ];

  return (
    <ArticleList articles={ARTICLES} />
  );
};

export default Article;
