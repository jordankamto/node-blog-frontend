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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/not-found" exact element={<Notfound />} />
        <Route path="/test" exact element={<ArticleList />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
