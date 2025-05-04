



import React, { useState } from "react";
import Papa from "papaparse";

const JobUpload = ({ onJobsParsed }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          onJobsParsed(result.data); // Send parsed jobs to App.jsx
        },
        header: true, // Ensures CSV headers are read correctly qeqweqwqweqwq  ubhgliuyghygyugk
      });
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload Jobs</button>
    </div>
  );
};

export default JobUpload;
