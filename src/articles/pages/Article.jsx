import React from "react";

const Article = () => {

    const ARTICLES = [
      {
        id: "1",
        title: "Article #1",
        imageUrl: "images/image.png",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusamus!",
        author: "SuperAdmin",
        publishedDate: "08/05/2025",
      },
    ];
  return (
    <>
      <p>Article</p>
    </>
  );
};

export default Article;