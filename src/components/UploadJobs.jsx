import React, { useState } from 'react';

const UploadJobs = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [data, setData] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setData(result.data); // Store parsed data
        setUploadStatus('Upload successful!');
      } else {
        setUploadStatus('Upload failed. Please try again.');
      }
    } catch (error) {
      setUploadStatus('Upload failed. Please try again.');
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Upload Job Data (Excel)</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>

      {data && (
        <div>
          <h3>Job Data</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UploadJobs;
// knikhil uppeniniklgiosnfsdjnalkasciosjICJNOX:JDCIODJSVJLBSDCZN CXKVLZCZNLCSDUVHDFERWDIOAd[aiocnjaifseoiefho[erfncsxdcjioasjcslkdnvnc;cscsCS:Dcsdcsdldscs;claslcscslacs]]