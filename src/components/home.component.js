import React, { useState } from "react";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;
        console.log(fileContent);
      };

      reader.readAsText(selectedFile);
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h2 className="mb-4">
          Employee Attendance Visualization and Management System
        </h2>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload CSV</button>
      </div>
    </div>
  );
};

export default FileUploadForm;