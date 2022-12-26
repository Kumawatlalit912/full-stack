import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Users from "./components/Users";

const App = () => {
  return (
    <Router>
      <Header />
      <Link to="/users">users</Link>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
