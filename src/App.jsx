import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Users from "./users/pages/user";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
