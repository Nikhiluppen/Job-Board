import React, { useMemo, useState, useDeferredValue } from 'react';
import jobsData from '../data/jobs_data.json';
import './Dashboard.css';
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, ///obtaing charts with the use of recharts package
  XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from 'recharts';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#AF19FF', '#FF4560', '#00A6ED', '#E3008C'
];

export default function Dashboard() {
  const [states, setStates] = useState([]);
  const [levels, setLevels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);

  // 10x performance: Using deferred search values
  const deferredStates = useDeferredValue(states);
  const deferredLevels = useDeferredValue(levels);
  const deferredCategories = useDeferredValue(categories);
  const deferredSkills = useDeferredValue(skills);

  // Enrich jobs
  const jobs = useMemo(() => {
    return jobsData.map(job => {
      const loc = job.job_location || '';
      const match = loc.match(/,?\s*([A-Z]{2})$/);
      const state = match ? match[1] : 'Other';
      const skillsList = (job.job_skills || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
      return { ...job, state, skills: skillsList };
    });
  }, []);

  // Only show TX and MO
  const stateOptions = useMemo(() => ['TX', 'MO'], []);

  // Other options normally
  const levelOptions = useMemo(() => [...new Set(jobs.map(j => j['job level'] || 'Other'))], [jobs]);
  const categoryOptions = useMemo(() => [...new Set(jobs.map(j => j.Category || 'Other'))], [jobs]);

  // Skills cleaned: remove skills starting with numbers
  const skillOptions = useMemo(() => {
    return [...new Set(
      jobs.flatMap(j => j.skills)
    )]
    .filter(skill => !/^\d/.test(skill)) // no skills starting with digit
    .sort();
  }, [jobs]);

  // Filters with deferred values
  const filtered = useMemo(() => {
    return jobs.filter(job => {
      const okState = !deferredStates.length || deferredStates.includes(job.state);
      const okLevel = !deferredLevels.length || deferredLevels.includes(job['job level']);
      const okCat = !deferredCategories.length || deferredCategories.includes(job.Category);
      const okSkill = !deferredSkills.length || job.skills.some(s => deferredSkills.includes(s));
      return okState && okLevel && okCat && okSkill;
    });
  }, [jobs, deferredStates, deferredLevels, deferredCategories, deferredSkills]);

  const countByField = (field) => {
    const counts = {};
    for (let i = 0; i < filtered.length; i++) {
      const key = filtered[i][field] || 'Other';
      counts[key] = (counts[key] || 0) + 1;
    }
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const categoryData = useMemo(() => countByField('Category'), [filtered]);
  const companyData = useMemo(() => countByField('company'), [filtered]);
  const jobTypeData = useMemo(() => countByField('job_type'), [filtered]);
  const locationData = useMemo(() => countByField('job_location'), [filtered]);

  const stackedData = useMemo(() => {
    const allSkills = filtered.flatMap(j => j.skills);
    const top3 = Object.entries(allSkills.reduce((acc, s) => {
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    }, {}))
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([skill]) => skill);

    const byLoc = {};
    for (let i = 0; i < filtered.length; i++) {
      const job = filtered[i];
      const loc = job.job_location || 'Unknown';
      byLoc[loc] = byLoc[loc] || { location: loc };
      top3.forEach(skill => {
        byLoc[loc][skill] = (byLoc[loc][skill] || 0) + (job.skills.includes(skill) ? 1 : 0);
      });
    }
    return Object.values(byLoc);
  }, [filtered]);

  return (
    <div className="dashboard-container">
      <h1 className="title">📊 Skill-Based Job Dashboard</h1>

      {/* Filters */}
      <div className="filters">
        <Autocomplete
          multiple options={stateOptions} value={states} onChange={(_, v) => setStates(v)}
          disableCloseOnSelect getOptionLabel={opt => opt}
          renderOption={(props, opt, { selected }) => (
            <li {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
              {opt}
            </li>
          )}
          renderInput={params => <TextField {...params} label="States" />}
          style={{ minWidth: 180 }}
        />
        <Autocomplete
          multiple options={levelOptions} value={levels} onChange={(_, v) => setLevels(v)}
          disableCloseOnSelect getOptionLabel={opt => opt}
          renderOption={(props, opt, { selected }) => (
            <li {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
              {opt}
            </li>
          )}
          renderInput={params => <TextField {...params} label="Levels" />}
          style={{ minWidth: 180 }}
        />
        <Autocomplete
          multiple options={categoryOptions} value={categories} onChange={(_, v) => setCategories(v)}
          disableCloseOnSelect getOptionLabel={opt => opt}
          renderOption={(props, opt, { selected }) => (
            <li {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
              {opt}
            </li>
          )}
          renderInput={params => <TextField {...params} label="Categories" />}
          style={{ minWidth: 180 }}
        />
        <Autocomplete
          multiple options={skillOptions} value={skills} onChange={(_, v) => setSkills(v)}
          disableCloseOnSelect getOptionLabel={opt => opt}
          renderOption={(props, opt, { selected }) => (
            <li {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
              {opt}
            </li>
          )}
          renderInput={params => <TextField {...params} label="Skills" />}
          style={{ minWidth: 240 }}
        />
      </div>

      {/* Charts */}
      <section className="chart-section">
        <h2>Job Count by Type</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={jobTypeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={COLORS[0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section className="chart-section">
        <h2>Job Count by Location</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={locationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={COLORS[1]} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="chart-section">
        <h2>Top Companies Hiring</h2>
        <table className="data-table">
          <thead>
            <tr><th>Company</th><th>Count</th></tr>
          </thead>
          <tbody>
            {companyData.sort((a, b) => b.value - a.value).slice(0, 10).map((it, i) => (
              <tr key={i}><td>{it.name}</td><td>{it.value}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="chart-section">
        <h2>Jobs by Category (Pie)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {categoryData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </section>

      <section className="chart-section">
        <h2>Top 3 Skills by Location (Stacked)</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={stackedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" />
            <YAxis />
            <Tooltip />
            <Legend />
            {stackedData[0] && Object.keys(stackedData[0])
              .filter(k => k !== 'location')
              .map((skill, i) => (
                <Bar key={skill} dataKey={skill} stackId="a" fill={COLORS[i % COLORS.length]} />
              ))}
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}

