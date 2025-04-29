import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Optional external styling (or you can inline styles if needed)

const HomePage = () => {
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

  return (
    <div className="home-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="logo">JobBoard</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
          <li><Link to="/savedjobs">Saved dwdqwJobs</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/jobboard">JobBoard</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>
      </nav>

      {/* ✅ Category Section */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <Link to="/category/full-stack-development" className="category">Full-Stack dwqdqwd</Link>
          <Link to="/category/frontend-development" className="category">Frontend Development</Link>
          <Link to="/category/backend-development" className="category">Backend Development</Link>
          <Link to="/category/cloud-security" className="category">Cloud Security</Link>
          <Link to="/category/data-science" className="category">Data Science</Link>
          <Link to="/category/ai-machine-learning" className="category">AI & Machine Learning</Link>
        </div>
      </section>

      {/* ✅ Job Listings */}
      <section className="job-listings">
        <h2>Available Jobs</h2>
        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <Link to={`/apply/${index}`} className="apply-btn">Apply Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer>
        <p>&copy; 2025 Job Board. All rights reserved.</p>
      </footer>

      {/* ✅ Embedded styles for layout */}
      <style>{`
        .home-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #2563eb;
          color: white;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 1rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-btn {
          background: white;
          color: #2563eb;
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .categories {
          padding: 2rem;
          background-color: #f3f4f6;
        }

        .categories h2 {
          margin-bottom: 1rem;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .category {
          background-color: #e0e7ff;
          color: #1e3a8a;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
        }

        .job-listings {
          padding: 2rem;
        }

        .job-list {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .job-card {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .apply-btn {
          margin-top: 0.5rem;
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: white;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background-color: #f3f4f6;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Optional external styling (or you can inline styles if needed)

const HomePage = () => {
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

  return (
    <div className="home-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="logo">JobBoard</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
          <li><Link to="/savedjobs">Saved dwdqwJobs</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/jobboard">JobBoard</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>
      </nav>

      {/* ✅ Category Section */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <Link to="/category/full-stack-development" className="category">Full-Stack dwqdqwd</Link>
          <Link to="/category/frontend-development" className="category">Frontend Development</Link>
          <Link to="/category/backend-development" className="category">Backend Development</Link>
          <Link to="/category/cloud-security" className="category">Cloud Security</Link>
          <Link to="/category/data-science" className="category">Data Science</Link>
          <Link to="/category/ai-machine-learning" className="category">AI & Machine Learning</Link>
        </div>
      </section>

      {/* ✅ Job Listings */}
      <section className="job-listings">
        <h2>Available Jobs</h2>
        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <Link to={`/apply/${index}`} className="apply-btn">Apply Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer>
        <p>&copy; 2025 Job Board. All rights reserved.</p>
      </footer>

      {/* ✅ Embedded styles for layout */}
      <style>{`
        .home-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #2563eb;
          color: white;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 1rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-btn {
          background: white;
          color: #2563eb;
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .categories {
          padding: 2rem;
          background-color: #f3f4f6;
        }

        .categories h2 {
          margin-bottom: 1rem;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .category {
          background-color: #e0e7ff;
          color: #1e3a8a;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
        }

        .job-listings {
          padding: 2rem;
        }

        .job-list {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .job-card {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .apply-btn {
          margin-top: 0.5rem;
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: white;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background-color: #f3f4f6;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Optional external styling (or you can inline styles if needed)

const HomePage = () => {
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

  return (
    <div className="home-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="logo">JobBoard</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
          <li><Link to="/savedjobs">Saved dwdqwJobs</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/jobboard">JobBoard</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>
      </nav>

      {/* ✅ Category Section */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <Link to="/category/full-stack-development" className="category">Full-Stack dwqdqwd</Link>
          <Link to="/category/frontend-development" className="category">Frontend Development</Link>
          <Link to="/category/backend-development" className="category">Backend Development</Link>
          <Link to="/category/cloud-security" className="category">Cloud Security</Link>
          <Link to="/category/data-science" className="category">Data Science</Link>
          <Link to="/category/ai-machine-learning" className="category">AI & Machine Learning</Link>
        </div>
      </section>

      {/* ✅ Job Listings */}
      <section className="job-listings">
        <h2>Available Jobs</h2>
        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <Link to={`/apply/${index}`} className="apply-btn">Apply Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer>
        <p>&copy; 2025 Job Board. All rights reserved.</p>
      </footer>

      {/* ✅ Embedded styles for layout */}
      <style>{`
        .home-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #2563eb;
          color: white;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 1rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-btn {
          background: white;
          color: #2563eb;
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .categories {
          padding: 2rem;
          background-color: #f3f4f6;
        }

        .categories h2 {
          margin-bottom: 1rem;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .category {
          background-color: #e0e7ff;
          color: #1e3a8a;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
        }

        .job-listings {
          padding: 2rem;
        }

        .job-list {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .job-card {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .apply-btn {
          margin-top: 0.5rem;
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: white;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background-color: #f3f4f6;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

// export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Optional external styling (or you can inline styles if needed)

// const HomePage = () => {
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

  return (
    <div className="home-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <div className="logo">JobBoard</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pages">Pages</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
          <li><Link to="/savedjobs">Saved dwdqwJobs</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/jobboard">JobBoard</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>
      </nav>

      {/* ✅ Category Section */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <div className="category-list">
          <Link to="/category/full-stack-development" className="category">Full-Stack dwqdqwd</Link>
          <Link to="/category/frontend-development" className="category">Frontend Development</Link>
          <Link to="/category/backend-development" className="category">Backend Development</Link>
          <Link to="/category/cloud-security" className="category">Cloud Security</Link>
          <Link to="/category/data-science" className="category">Data Science</Link>
          <Link to="/category/ai-machine-learning" className="category">AI & Machine Learning</Link>
        </div>
      </section>

      {/* ✅ Job Listings */}
      <section className="job-listings">
        <h2>Available Jobs</h2>
        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <Link to={`/apply/${index}`} className="apply-btn">Apply Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer>
        <p>&copy; 2025 Job Board. All rights reserved.</p>
      </footer>

      {/* ✅ Embedded styles for layout */}
      <style>{`
        .home-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #2563eb;
          color: white;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 1rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-btn {
          background: white;
          color: #2563eb;
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .categories {
          padding: 2rem;
          background-color: #f3f4f6;
        }

        .categories h2 {
          margin-bottom: 1rem;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .category {
          background-color: #e0e7ff;
          color: #1e3a8a;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
        }

        .job-listings {
          padding: 2rem;
        }

        .job-list {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .job-card {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .apply-btn {
          margin-top: 0.5rem;
          display: inline-block;
          padding: 0.5rem 1rem;
          background-color: #2563eb;
          color: white;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
        }

        footer {
          text-align: center;
          padding: 1rem;
          background-color: #f3f4f6;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
};

// export default HomePage;
