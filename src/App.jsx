import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import Users from "./users/pages/user";
import Notfound from "./Notfound";
import ArticleList from "./articles/components/ArticleItem";
import Article from "./articles/pages/Article";
import NewArticle from "./articles/pages/NewArticle";
import EditArticle from "./articles/pages/EditArticle";
import SignUp from "./auth/pages/SignUp";
import Login from "./auth/pages/Login";
import EditPassword from "./auth/pages/EditPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/not-found" exact element={<Notfound />} />
        <Route path="/article/:id" exact element={<Article />} />
        <Route path="/article/all" exact element={<Home />} />
        <Route path="/article/new" exact element={<NewArticle />} />
        <Route path="/article/edit/:id" exact element={<EditArticle />} />
        <Route path="/auth/signup" exact element={<SignUp />} />
        <Route path="/auth/login" exact element={<Login />} />
        <Route path="/auth/edit-password" exact element={<EditPassword />} />
        {/* <Route path="/test" exact element={<ArticleList />} /> */}
        <Route path="/users" exact element={<Users />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
