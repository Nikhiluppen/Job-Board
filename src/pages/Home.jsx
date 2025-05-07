import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, CardContent, Avatar, Typography, Grid, Backdrop, CircularProgress } from '@mui/material';
import './home.css';
import jobsImage from '../Images/jobs.jpg'; 
import user1 from '../Images/user1.jpg'; 
import user2 from '../Images/user2.jpg';
import user3 from '../Images/user3.jpg';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonials = [
  {
    name: "Nikhil",
    image: user1,
    text: "This platform helped me land my dream job faster than I imagined!"
  },
    {
    name: "Sathwika",
    image: user2,
    text: "The skill-based matching was a game changer for my job hunt!"
  },
  {
    name: "SaiTeja",
    image: user2,
    text: "The skill-based job matching was a really helped me which eventually landed me in my dream job!"
  },
  {
    name: "Rachana Balasani",
    image: user3,
    text: "I highly recommend this platform to all freshers looking for jobs."
  },
  {
    name: "Pavan",
    image: user2,
    text: "The skill-based matching was a game changer for my job hunt!"
  },
];

const Home = () => {
  const location = useLocation();
  const user = location.state || JSON.parse(localStorage.getItem('userData')) || {};

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [profileData, setProfileData] = useState({ fullName: '', skills: '' });
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [matchedJobs, setMatchedJobs] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);

  const sendNewsletter = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    const email = e.target.user_email.value;

    emailjs.send(
      "service_2z2z9hf",
      "template_fl5jkoc",
      { user_email: email },
      "1CC_7XZ7tVxbs6Q1d"
    )
    .then(() => {
      setSuccessMessage('✅ Subscribed successfully!');
      setLoading(false);
    })
    .catch((error) => {
      console.error(error.text);
      setSuccessMessage('❌ Failed to subscribe. Please try again.');
      setLoading(false);
    });

    e.target.reset();
  };

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setAnalyzing(true);

    setTimeout(() => {
      const skillsText = profileData.skills.toLowerCase();
      const tempMatches = [];
    
      if (skillsText.includes('react') || skillsText.includes('javascript') || skillsText.includes('frontend')) {
        tempMatches.push({ title: 'Frontend Developer', skills: 'React, JavaScript, CSS, HTML', location: 'Remote' });
        tempMatches.push({ title: 'Full Stack Developer', skills: 'React, Node.js, MongoDB', location: 'Remote' });
      }
    
      if (skillsText.includes('node') || skillsText.includes('express') || skillsText.includes('backend')) {
        tempMatches.push({ title: 'Backend Developer', skills: 'Node.js, Express, MongoDB, APIs', location: 'New York' });
        tempMatches.push({ title: 'Full Stack Developer', skills: 'Node.js, React, SQL', location: 'Remote' });
      }
    
      if (skillsText.includes('aws') || skillsText.includes('cloud') || skillsText.includes('terraform') || skillsText.includes('devops')) {
        tempMatches.push({ title: 'Cloud Engineer', skills: 'AWS, Terraform, DevOps, Docker', location: 'Texas' });
        tempMatches.push({ title: 'Site Reliability Engineer', skills: 'AWS, Kubernetes, DevOps', location: 'California' });
      }
    
      if (skillsText.includes('python') || skillsText.includes('sql') || skillsText.includes('power bi') || skillsText.includes('data')) {
        tempMatches.push({ title: 'Data Analyst', skills: 'Python, SQL, Power BI', location: 'Missouri' });
        tempMatches.push({ title: 'Data Engineer', skills: 'Python, AWS, ETL, SQL', location: 'Remote' });
      }
    
      if (skillsText.includes('java') || skillsText.includes('spring') || skillsText.includes('hibernate')) {
        tempMatches.push({ title: 'Java Backend Developer', skills: 'Java, Spring Boot, Hibernate, REST APIs', location: 'Remote' });
        tempMatches.push({ title: 'Full Stack Java Developer', skills: 'Java, React, Spring Boot', location: 'California' });
      }
    
      if (skillsText.includes('machine learning') || skillsText.includes('ml') || skillsText.includes('ai')) {
        tempMatches.push({ title: 'Machine Learning Engineer', skills: 'Python, TensorFlow, Scikit-learn', location: 'Remote' });
        tempMatches.push({ title: 'AI Researcher', skills: 'Deep Learning, NLP, Python', location: 'Remote' });
      }
    
      if (skillsText.includes('cybersecurity') || skillsText.includes('security')) {
        tempMatches.push({ title: 'Cybersecurity Analyst', skills: 'Network Security, Risk Assessment, Incident Response', location: 'Texas' });
      }
    
      if (skillsText.includes('testing') || skillsText.includes('qa') || skillsText.includes('selenium')) {
        tempMatches.push({ title: 'QA Engineer', skills: 'Manual Testing, Selenium, Java', location: 'Remote' });
      }
    
      if (skillsText.includes('project management') || skillsText.includes('scrum') || skillsText.includes('agile')) {
        tempMatches.push({ title: 'Project Manager', skills: 'Agile, Scrum, Project Planning', location: 'Florida' });
      }
    
      // fallback if no match found
      if (tempMatches.length === 0) {
        tempMatches.push({
          title: 'General Tech Intern',
          skills: 'Flexible Skills Required',
          location: 'Open Locations'
        });
      }
    
      setMatchedJobs(tempMatches);
      setShowRecommendations(true);
      setAnalyzing(false);
      setProfileData({ fullName: '', skills: '' });
    }, 2000);     
  };

  return (
    <div className={`home-wrapper ${analyzing ? 'blurred' : ''}`}>

      {/* Analyzing Loader */}
      <Backdrop open={analyzing} style={{ zIndex: 9999, color: '#fff' }}>
        <CircularProgress color="inherit" />
        <Typography variant="h5" style={{ marginLeft: 20 }}>Analyzing your skills...</Typography>
      </Backdrop>

      {/* Hero Section */}
      <section className="hero-banner" style={{
        backgroundImage: `url(${jobsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        color: 'white',
        borderRadius: '10px',
        textAlign: 'center',
        marginBottom: '40px',
      }}>
        <div className="hero-content">
          <h1>Find Jobs Based on What You Know, Not What They Call It.</h1>
          <p>Discover your dream job through skills-based matching.</p>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-card">
          <h3>Frontend Developer</h3>
          <p><strong>Skills:</strong> React, CSS, JavaScript</p>
          <p><strong>Location:</strong> Remote</p>
          <Link to="/apply/1" className="apply-btn">Apply Now</Link>
        </div>
        <div className="job-card">
          <h3>Cloud Engineer</h3>
          <p><strong>Skills:</strong> AWS, Terraform, DevOps, Cloud</p>
          <p><strong>Location:</strong> Texas</p>
          <Link to="/apply/2" className="apply-btn">Apply Now</Link>
        </div>
        <div className="job-card">
          <h3>Data Analyst</h3>
          <p><strong>Skills:</strong> Python, SQL, Power BI</p>
          <p><strong>Location:</strong> Missouri</p>
          <Link to="/apply/3" className="apply-btn">Apply Now</Link>
        </div>
      </section>

      {/* {/* Create Profile Form */}
      <section className="create-profile">
        <h2>Create Your Profile</h2>
        <p>Tell us your skills and get instant job matches.</p>

        <form className="profile-form" onSubmit={handleProfileSubmit}>
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={handleProfileChange}
            placeholder="Enter your full name"
            required
          />
          <textarea
            name="skills"
            value={profileData.skills}
            onChange={handleProfileChange}
            placeholder="Enter your skills (e.g., React, Python, AWS)"
            required
          ></textarea>
          <button type="submit" className="submit-btn">Submit Profile</button>
        </form>
      </section>

      {/* Recommended Jobs Section */}
      {showRecommendations && (
        <section className="job-recommendations">
          <h2>Recommended Jobs for You</h2>
          {matchedJobs.length > 0 ? (
            matchedJobs.map((job, index) => (
              <div key={index} className="job-card">
                <h3>{job.title}</h3>
                <p><strong>Matched Skills:</strong> {job.skills}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <Link to="/apply/4" className="apply-btn">Apply Now</Link>
              </div>
            ))
          ) : (
            <p>No matching jobs found. Try adding more skills!</p>
          )}
        </section>
      )}

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What People Are Saying</h2>
        <AutoPlaySwipeableViews
          interval={3000}
          enableMouseEvents
        >
          {testimonials.map((item, index) => (
            <Grid container direction="column" alignItems="center" key={index}>
              <Card style={{ padding: '20px', maxWidth: '500px', textAlign: 'center', marginBottom: '30px' }}>
                <Avatar src={item.image} style={{ width: 80, height: 80, margin: 'auto' }} />
                <CardContent>
                  <Typography variant="body1" style={{ fontStyle: 'italic', marginTop: 10 }}>
                    "{item.text}"
                  </Typography>
                  <Typography variant="subtitle1" color="primary" style={{ marginTop: 10 }}>
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </AutoPlaySwipeableViews>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Get the latest job openings straight to your inbox</h2>
        <form onSubmit={sendNewsletter}>
          <input type="email" name="user_email" placeholder="Enter your email" required />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Subscribe'}
          </button>
        </form>

        {successMessage && (
          <p style={{ color: successMessage.includes('✅') ? 'green' : 'red', marginTop: '10px' }}>
            {successMessage}
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Contact us: +1 (314) 444-4444</p>
        <ul>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
        </ul>
        <p>Follow us: [FB] [X] [LinkedIn]</p>
        <nbsp></nbsp>
        <p>&copy; 2025 SkillOverTitle. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
