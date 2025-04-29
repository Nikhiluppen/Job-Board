import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <h2>{job.job_title}</h2>
              <p>Category: {job.category}</p>
              <p>Location: {job.job_location}</p>
              <p>Company: {job.company}</p>
              <a href={`/apply/${job.id}`}>Apply</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
