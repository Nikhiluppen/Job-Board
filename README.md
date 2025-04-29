Below is a comprehensive **README.md** you can drop into the root of your project. Feel free to tweak any paths, URLs or environment-variable names to match your setup.

```markdown
# SkillOverTitle Job Portal

A full-stack job board platform built with React, Node.js/Express, MongoDB and AWS services.  
It allows job-seekers to create profiles (including resume upload & skill matching), browse/filter jobs, and view interactive dashboards of job trends. Employers can post, update and manage job listings via a REST API.

---

## 📁 Project Structure

```text
/
├── job-board/               # React frontend (Vite + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI & charts
│   │   ├── data/            # Sample JSON data (jobs_data.json)
│   │   ├── pages/           # Dashboard, Home, Signup, etc.
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
│
├── job-search-backend/      # Node.js + Express API
│   ├── controllers/         # Route handlers
│   ├── models/              # Mongoose schemas
│   ├── routes/              # Express routers
│   ├── middleware/          # Auth, file-upload, security, etc.
│   ├── utils/               # Helpers (e.g. resume parser)
│   ├── public/uploads/      # Stored resumes
│   ├── .env.example         # Env var template
│   ├── app.js
│   └── package.json
│
├── README.md                # ← You are here
└── .gitignore
```

---

## 🚀 Features

### Frontend (job-board)

- **Responsive React UI** driven by Vite & Tailwind CSS  
- **Multi-select filters** (state, level, category, skills)  
- **Charts & dashboards** using Recharts  
  - Job count by type (bar chart)  
  - Job count by location (line chart)  
  - Jobs by category (pie + bar)  
  - Top companies (table)  
  - Top 3 skills by location (stacked bar)  
- **Profile signup** with resume upload & automatic skill match  
- **Dynamic job listing** based on user’s profile skills  

### Backend (job-search-backend)

- **RESTful API** with Express.js  
- **MongoDB + Mongoose** for data persistence  
- **User & employer auth** via JWT & secure cookies  
- **Resume upload** endpoint (validates PDF/DOCX)  
- **Search & filter** jobs by title, type, location, skills, etc.  
- **Admin role** to manage users and jobs  
- **Security**: rate-limiting, helmet headers, mongo-sanitize, XSS protection  

---

## 🔧 Getting Started

### Prerequisites

- Node.js ≥ 16, npm or Yarn  
- MongoDB (local or Atlas)  
- AWS account for S3/email (optional)  

### 1. Clone & install

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Frontend
cd job-board
npm install

# Backend
cd ../job-search-backend
npm install
```

### 2. Environment Variables

Copy `.env.example` → `.env` in **job-search-backend** and fill in:

```dotenv
PORT=4000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/jobportal
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=…
AWS_SECRET_ACCESS_KEY=…
AWS_S3_BUCKET=…
EMAIL_SERVICE=…
EMAIL_USER=…
EMAIL_PASS=…
```

### 3. Run Locally

#### Backend

```bash
cd job-search-backend
npm run dev           # nodemon on port 4000
```

#### Frontend

```bash
cd ../job-board
npm run dev           # Vite on port 5173
```

Open `http://localhost:5173` in your browser.

---

## 📦 Available Scripts

### Frontend (`job-board`)

- `npm run dev`  
- `npm run build`  
- `npm run preview`

### Backend (`job-search-backend`)

- `npm run dev`  (uses nodemon)  
- `npm start`

---

## 📄 API Documentation

Full API docs (endpoints, request/response schemas) are available via Postman:

🔗 https://documenter.getpostman.com/view/your-postman-doc

---

## 📫 Deployment

- **Frontend**: build with `npm run build`, then host on Vercel / Netlify / S3 + CloudFront  
- **Backend**: deploy on Heroku / AWS Elastic Beanstalk / DigitalOcean  
- Connect environment variables in your chosen host.

---

## 🤝 Contributing

1. Fork the repo  
2. Create your branch: `git checkout -b feature/YourFeature`  
3. Commit your changes: `git commit -m "Add awesome feature"`  
4. Push to branch: `git push origin feature/YourFeature`  
5. Open a Pull Request

---

## ⚖️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Copy that into your `README.md`, adjust any URLs or service links, and you’ll have a clear, structured project overview for anyone browsing your repo.
# Job-Portal
