import React from "react";
import { Link } from "react-router-dom";

const ArticleItem = (props) => {
  return (
    <span className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-2.5">
      <Link to={`/article/${props.id}`}>
        <img className="rounded-t-lg" src={props.imageUrl} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/article/${props.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">
            {props.title}
          </h5>
        </Link>
        <p className="mb-5 font-normal text-gray-700 truncate">
          {props.content}
        </p>
        <Link
          to={`/article/${props.id}`}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-5"
        >
          Read more
        </Link>
        <p className="text-xs text-right">
          {props.publishedDate} • {props.author}
        </p>
      </div>
    </span>
  );
};

export default ArticleItem;
