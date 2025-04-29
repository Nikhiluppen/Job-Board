require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const XLSX = require('xlsx');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// ——— Middlewares ———
app.use(cors());
app.use(express.json());

// ——— MySQL Pool ———
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// ——— Multer Setup ———
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, 'uploads/'),
  filename: (_, file, cb) =>
    cb(null, `${Date.now()}${path.extname(file.originalname)}`),
});

const upload = multer({ storage });

// ——— Routes ———

// 1) Excel file upload & parse
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  const filePath = path.join(__dirname, 'uploads', req.file.filename);
  try {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet);
    console.log('Parsed Excel data:', jsonData);
    res.json({ message: 'File uploaded!', data: jsonData });
  } catch (err) {
    console.error('Error parsing Excel:', err);
    res.status(500).send('Error processing Excel file.');
  }
});

// 2) Signup
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password required.' });

  try {
    const hash = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (email, password_hash) VALUES (?, ?)',
      [email, hash]
    );
    res.status(201).json({ message: 'User created.' });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY')
      return res.status(409).json({ message: 'Email already in use.' });
    console.error(err);
    res.sendStatus(500);
  }
});

// 3) Signin
app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password required.' });

  try {
    const [rows] = await pool.query(
      'SELECT id, password_hash FROM users WHERE email = ?',
      [email]
    );
    if (rows.length === 0)
      return res.status(401).json({ message: 'Invalid credentials.' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) return res.status(401).json({ message: 'Invalid credentials.' });

    res.json({ id: user.id, email });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// ——— Start Server ———
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
