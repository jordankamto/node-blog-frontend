import React from "react";
import { useParams } from "react-router-dom";
import { ARTICLES } from "../../dummyData";

const Article = () => {
  const { id } = useParams();
//   console.log(id);
  const article = ARTICLES.find((article) => article.id === id);
  if (!article) {
    return <p>Article not found</p>;
  }
    const isAdmin = true; // Replace with actual admin check logic
    const isAuthor = true; // Replace with actual author check logic
  return (
    <div className="flex flex-col p-10">
      <p className="text-2xl font-medium">{article.title}</p>
      <p className="text-base">{article.author}</p>
      <p className="text-base">{article.publishedDate}</p>
      <img src={article.imageUrl} alt="Article Image" className="size-1/2" />
      <p className="text-lg font-normal">{article.content}</p>
      {isAdmin || isAuthor ? (<div className="flex flex-row gap-10 py-10">
        <a
          href={`/#edit`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
        >
          Edit Article
        </a>
        <a
          href={`/#delete`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg"
        >
          Delete Article
        </a>
      </div>) : null}
    </div>
  );
};

export default Article;
