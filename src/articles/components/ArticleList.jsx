import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  if (props.articles.length === 0) {
    return (
      <div className="flex flex-row justify-center py-10">
        <h2 className="text-2xl font-bold">
          No articles found. Maybe create one?
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 py-10">
      {props.articles.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          title={article.title}
          content={article.content}
          imageUrl={article.imageUrl}
          publishedDate={article.publishedDate}
          author={article.author}
        />
      ))}
    </div>
  );
};

export default ArticleList;
