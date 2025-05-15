import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLES } from "../../dummyData";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";

const Article = () => {
  const { id } = useParams();
  const isAdmin = true; // Replace with actual admin check logic
  const isAuthor = true; // Replace with actual author check logic
  //   console.log(id);
  const article = ARTICLES.find((article) => article.id === id);
  if (!article) {
    return (
      <>
        <Navbar />
        <div className="flex flex-row justify-center py-10">
          <h2 className="text-2xl font-bold">Article not found.</h2>
        </div>
        <Footer />
      </>
    );
  }

  const deleteArticle = () => {
    const articleIndex = ARTICLES.findIndex(article => article.id === id);
    if (articleIndex !== -1) {
      ARTICLES.splice(articleIndex, 1);
      console.log(ARTICLES);
      // window.location.href = "/articles/all";
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-10">
        <p className="text-2xl font-medium">{article.title}</p>
        <p className="text-base">{article.author}</p>
        <p className="text-base">{article.publishedDate}</p>
        <img src={article.imageUrl} alt="Article Image" className="size-1/2" />
        <p className="text-lg font-normal">{article.content}</p>
        {isAdmin || isAuthor ? (
          <div className="flex flex-row gap-10 py-10">
            <Link
              to={`/article/edit/${article.id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Edit Article
            </Link>
            <button
              onClick={deleteArticle}
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Delete Article
            </button>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Article;
