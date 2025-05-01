import React from 'react';
import { useParams } from 'react-router-dom';
import jobsData from '../data/jobs_data.json'; // Ensure your JSON uses keys like "Category", "job_title", etc.

const CategoryPage = () => {
  // Retrieve the "category" parameter from the URLjb h.uhhghugl,
  const { category } = useParams();

  // Normalize the URL parameter: convert hyphens to spaces, trim, and convert to lowercase.
  // For example, "frontend-development" becomes "frontend development".
  const normalizedCategory = category.replace(/-/g, ' ').trim().toLowerCase();

  // If the category is "frontend development", display the specific welcome message.
  if (normalizedCategory === 'frontend development') {
    return (
      <div className="category-container">
        <h1>Hi Nikhil, welcome to frontend learned developer</h1>
        {/* Embedded CSS Styling */}
        <style>{`
          .category-container {
            padding: 2rem;
            background-color: #f9f9f9;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            

              
          }
        `}</style>
      </div>
    );
  }

  // For other categories, filter jobs to show only those that have a matching "Category"
  const filteredJobs = jobsData.filter(
    (job) =>
      job.Category &&
      job.Category.trim().toLowerCase() === normalizedCategory
  );

  return (
    <div className="category-container">
      <h1 className="category-title">Jobs for: {normalizedCategory}</h1>
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.job_title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Skills:</strong> {job.job_skills}</p>
              <p><strong>Location:</strong> {job.job_location}</p>
              <p><strong>Summary:</strong> {job.job_summary}</p>
              <a
                href={job.job_link}
                className="apply-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now and you can see jobs are redirected to LINKED in
              </a>
            </div>
          ))
        ) : (
          <p>No jobs available in this category.</p>
        )}
      </div>

      {/* Embedded CSS Styling */}
      <style>{`
        .category-container {
          padding: 2rem;
          background-color: #f9f9f9;
          min-height: 100vh;
          font-family: Arial, sans-serif;
        }
        .category-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-transform: capitalize;
          color: #333;
        }
        .job-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .job-card {
          background-color: #fff;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .apply-btn {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #28a745;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        .apply-btn:hover {
          background-color: #218838;
        }
      `}</style>
    </div>
  );
};

export default CategoryPage;
