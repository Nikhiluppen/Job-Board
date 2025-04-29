const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const Job = require("../models/Job");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload Excel File
router.post("/upload-excel", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // Read Excel file
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert Excel to JSON
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Format and Save to MongoDB
    const jobs = jsonData.map(job => ({
      b_title: job.b_title,
      company: job.company,
      job_location: job.job_location,
      job_link: job.job_link,
      search_city: job.search_city,
      search_country: job.search_country,
      job_level: job.job_level,
      job_type: job.job_type,
      job_summary: job.job_summary,
      job_skills: job.job_skills ? job.job_skills.split(",") : [],
    }));

    await Job.insertMany(jobs);
    res.status(201).json({ message: "Jobs uploaded successfully!" });

  } catch (error) {
    res.status(500).json({ error: "Failed to process file", details: error.message });
  }
});

// Fetch Jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching jobs" });
  }
});

module.exports = router;
