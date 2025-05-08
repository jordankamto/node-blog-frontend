import React from "react";

const ArticleItem = (props) => {
  return (
    <span class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-2.5">
      <a href="#">
        <img class="rounded-t-lg" src={props.imageUrl} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">{props.content}</p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
        >
          Read more
        </a>
      </div>
    </span>
  );
};

export default ArticleItem;
