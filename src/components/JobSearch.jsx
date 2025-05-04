import React, { useState, useEffect } from 'react';
import jobsData from '../data/jobs_data.json';
import './JobSearch.css';

const JobSearch = () => {
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');
  const [jobLevel, setJobLevel] = useState('');
  const [jobType, setJobType] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setFilteredJobs(jobsData);
  }, []);

  const handleSearch = () => {
    const results = jobsData.filter((job) => {
      const skillMatch = skill
        ? job.job_skills?.toLowerCase().includes(skill.toLowerCase())
        : true;

      const locationMatch = location
        ? job.job_location?.toLowerCase().includes(location.toLowerCase())
        : true;

      const levelMatch = jobLevel
        ? job["job level"]?.toLowerCase() === jobLevel.toLowerCase()
        : true;

      const typeMatch = jobType
        ? job.job_type?.toLowerCase() === jobType.toLowerCase()
        : true;

      return skillMatch && locationMatch && levelMatch && typeMatch;
    });

    setFilteredJobs(results);
  };

  const handleSaveJob = (job) => {
    const saved = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    const alreadySaved = saved.some(
      (j) => j.job_link === job.job_link || j.job_title === job.job_title
    );

    if (!alreadySaved) {
      saved.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(saved));
      alert("Job saved successfully!");
    } else {
      alert("Job already saved.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Jobs</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Skill (e.g., Python)"
          className="border px-3 py-2 rounded w-full"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location (e.g., Austin)"
          className="border px-3 py-2 rounded w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded w-full"
          value={jobLevel}
          onChange={(e) => setJobLevel(e.target.value)}
        >
          <option value="">All Job Levels</option>
          <option value="Intern">Intern</option>
          <option value="Entry">Entry</option>
          <option value="Associate">Associate</option>
          <option value="Mid senior">Mid senior</option>
          <option value="Manager">Manager</option>
        </select>

        <select
          className="border px-3 py-2 rounded w-full"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">All Job Types</option>
          <option value="Onsite">Onsite</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Contract">Contract</option>
        </select>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="border p-4 rounded shadow mb-4">
              <h3 className="font-semibold">{job.job_title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.job_location}</p>
              <p><strong>Skills:</strong> {job.job_skills}</p>
              <p><strong>Job Level:</strong> {job["job level"]}</p>
              <p><strong>Job Type:</strong> {job.job_type}</p>

              <div className="flex gap-4 mt-3">
                <a
                  href={job.job_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  View & Apply
                </a>
                <button
                  className="bg-yellow-500 text-black px-4 py-2 rounded"
                  onClick={() => handleSaveJob(job)}
                >
                  Save & Apply Later
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No jobs to show. Try different filters.</p>
        )}
      </div>
    </div>
  );
};

export default JobSearch;
// eqwewdfwdqwdqd fewfv few wdqqwdqwdq   qwdqwds  qsq s 
// s qs  qs  qs  qs s qs  q