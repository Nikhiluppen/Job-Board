import React from "react";

const JobBoard = ({ jobs }) => {
  console.log("Jobs received in JobBoard:", jobs); // Debugging line

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings and total numbwe of jobs</h1>

      {jobs.length === 0 ? (
        <p>No jobs available. Upload a CSV file to add jobs.</p>
      ) : (
        <ul>
          {jobs.map((job, index) => (
            <li key={index} className="border p-2 mb-2 rounded">
              <h2 className="text-lg font-semibold">{job.job_title || "No Title"}</h2>
              <p>Category: {job.category || "No Category"}</p>
              <p>Location: {job.job_location || "No Location"}</p>
              <p>Company: {job.company || "No Company"}</p>
              <a href={`/apply/${index}`} className="text-blue-500">Apply</a>
            </li>
          ))}
          
        </ul>
      )}
    </div>
  );
};


export default JobBoard;
