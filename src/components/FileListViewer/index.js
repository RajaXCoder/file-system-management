import React, { useState, useEffect } from "react";
import API from "../../api";

import "./style.css";

const FileListViewer = ({ setEditingFile, refreshKey }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await API.get("/files");
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching file list:", error);
      }
    };
    fetchFiles();
  }, [refreshKey]);

  const handleDownload = (filename) => {
    window.open(`${API.defaults.baseURL}/download/${filename}`);
  };

  return (
    <div className="file-list-viewer">
      <h2>Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file}>
            {file}
            <button onClick={() => setEditingFile(file)}>View/Edit</button>
            <button onClick={() => handleDownload(file)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileListViewer;
