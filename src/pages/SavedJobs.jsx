import React, { useEffect, useState } from 'react';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    setSavedJobs(saved);
  }, []);

  const handleDelete = (index) => {
    // Remove the job at the given index from state only
    setSavedJobs(jobs => jobs.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>
      {savedJobs.length > 0 ? (
        savedJobs.map((job, index) => (
          <div
            key={index}
            className="border p-4 rounded mb-4 flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold">{job.job_title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.job_location}</p>
              <p><strong>Skills:</strong> {job.job_skills}</p>
              <a
                href={job.job_link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View & Apply
              </a>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="
                 bg-red-500 hover:bg-red-600     /* background color */
                 text-white                        /* text color */
                text-lg                           /* font size */
                  font-semibold                     /* font weight */
                  py-2 px-4                         /* vertical/horizontal padding */
                  rounded                           /* rounded corners */
                  ml-4                              
                                   "
                                      >
                              Delete
                            </button>

          </div>
        ))
      ) : (
        <p>No saved jobs found in the list.</p>
      )}
    </div>
  );
};

export default SavedJobs;
