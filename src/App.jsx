// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CategoryPage from "./pages/CategoryPage";
import SavedJobs from "./pages/SavedJobs";
import Layout from "./components/Layout";
import JobSearch from "./components/JobSearch";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>    
          <Route path="/" element={<SignUp />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<JobSearch />} />
          <Route path="/apply/:jobId" element={<ApplyJob />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/categories/:category" element={<CategoryPage />} />

          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
