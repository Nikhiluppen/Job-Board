import React from 'react';
import { useParams, Link } from 'react-router-dom';
import jobsData from '../data/jobs_data.json';

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobsData[jobId];

  if (!job) {
    return (
      <div className="p-4">
        <p className="text-red-500">Job not found.</p>
        <Link to="/" className="underline">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{job.job_title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.job_location}</p>
      <p><strong>Category:</strong> {job.Category}</p>
      <p><strong>Type:</strong> {job.job_type}</p>
      <p><strong>Skills:</strong> {job.job_skills}</p>
      <div className="my-4 whitespace-pre-line">
        <strong>Summary:</strong><br />
        {job.job_summary}
      </div>
      <div className="mt-6">
        <a 
          href={job.job_link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Original Job Link
        </a>
      </div>
      <div className="mt-4">
        <Link to="/jobs" className="underline">← Back to Job Listings</Link>
      </div>
    </div>
  );
};


export default JobDetail;
