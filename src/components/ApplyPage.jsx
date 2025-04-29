// src/components/ApplyPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ApplyPage = () => {
  const { id } = useParams();  // Get the job index from the URL parameter

  // Job Listings Data (same as in HomePage, could be fetched from backend)
  const jobs = [
    {
      title: "Software Engineer",
      skills: ["Java", "Spring Boot", "SQL"],
      location: "New York, NY",
      description: "Develop scalable web applications and APIs.",
    },
    {
      title: "Cloud Security Specialist",
      skills: ["AWS", "Zero Trust", "Cybersecurity"],
      location: "Remote",
      description: "Implement security measures for cloud infrastructure.",
    },
    {
      title: "Data Scientist",
      skills: ["Python", "TensorFlow", "SQL"],
      location: "San Francisco, CA",
      description: "Analyze large datasets and build predictive models.",
    },
    {
      title: "Frontend Developer",
      skills: ["React", "TypeScript", "CSS"],
      location: "Austin, TX",
      description: "Build responsive UI components for web applications.",
    },
    {
      title: "AI/ML Engineer",
      skills: ["Python", "PyTorch", "Deep Learning"],
      location: "Seattle, WA",
      description: "Design and train AI models for automation.",
    }
  ];

  const job = jobs[id];  // Find the job based on the ID

  return (
    <div className="apply-page">
      <h2>Apply for {job.title}</h2>
      <p><strong>Skills Required:</strong> {job.skills.join(", ")}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      
      {/* Application form or button */}
      <button>Submit Application</button>
    </div>
  );
};

export default ApplyPage;
