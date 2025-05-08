import React from "react";

const ArticleItem = (props) => {
  return (
    <span className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-2.5">
      <a href="#">
        <img className="rounded-t-lg" src={props.imageUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{props.content}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
        >
          Read more
        </a>
        <p className="text-xs text-right">
          {props.publishedDate} • {props.author}
        </p>
      </div>
    </span>
  );
};

export default ArticleItem;
