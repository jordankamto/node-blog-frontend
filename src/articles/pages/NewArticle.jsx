import React from "react";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { ARTICLES } from "../../dummyData";

const NewArticle = () => {
  const handleSubmit = () => {
    const id = crypto.randomUUID();
    console.log(id);
    const title = document.getElementById("title").value;
    console.log(title);
    const imageUrl = "/assets/image.png";
    console.log(imageUrl);
    const content = document.getElementById("content").value;
    console.log(content);
    const author = "SuperAdmin"; // Replace with actual author logic
    const publishedDate = new Date()
      .toISOString()
      .split("T")[0]
      .replaceAll("-", "/");
    console.log(publishedDate);
    const newArticle = {
      id,
      title,
      imageUrl,
      content,
      author,
      publishedDate,
    };
    console.log(newArticle);
    ARTICLES.push(newArticle);
    console.log(ARTICLES);
    // window.location.href = "/articles/all";
  };
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-medium text-center my-10">
        New Article Form
      </h1>
      <form className="max-w-xl mx-auto">
        <div className="mb-10">
          <label htmlFor="title" className="font-medium text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-
            blue-500 block w-full p-2.5 mb-5"
          />
          <label htmlFor="imageUrl" className="font-medium text-lg">
            Image
          </label>
          <input
            type="file"
            className="block w-full mb-5 text-lg text-gray-900 border border-gray-300 rounded-lg file:cursor-pointer bg-gray-50 focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-
            blue-500 file:bg-blue-800 file:text-white file:p-0 file:py-3 file:px-2.5  file:mr-2.5 file:h-full"
          />
          <label htmlFor="content" className="font-medium text-lg">
            Content
          </label>
          <textarea
            id="content"
            rows={5}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-
            blue-500 block w-full p-2.5 mb-5"
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg mb-5 py-2.5 px-5"
            onClick={handleSubmit}
          >
            Add Article
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default NewArticle;
