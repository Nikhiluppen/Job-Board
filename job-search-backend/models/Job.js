const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  b_title: String,
  company: String,
  job_location: String,
  job_link: String,
  search_city: String,
  search_country: String,
  job_level: String,
  job_type: String,
  job_summary: String,
  job_skills: [String],
});

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
