import React, { useState } from "react";
import "./JobListings.css";
import "./JobListings.css"; // Make sure the path is correct


const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", location: "San Francisco, CA" },
    { id: 2, title: "Cloud Security Engineer", company: "Amazon", location: "Seattle, WA" },
    { id: 3, title: "Data Analyst", company: "Facebook", location: "New York, NY" },
    { id: 4, title: "Full Stack Developer", company: "Microsoft", location: "Remote" },
    { id: 5, title: "UI/UX Designer", company: "Apple", location: "Los Angeles, CA" },
  ];

  // Filter jobs based on search term dqwdqwdfqd
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-listings-container">
      <h1>Explore Job Listings</h1>
      <input
        type="text"
        placeholder="Search jobs..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <button className="apply-btn">Apply  not Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobListings;
