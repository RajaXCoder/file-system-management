import React, { useState } from "react";
import API from "../../api";

import "./style.css";

const FileCreationForm = ({ refreshFiles }) => {
  const [filename, setFilename] = useState("");
  const [content, setContent] = useState("");

  const handleCreateFile = async () => {
    try {
      await API.post("/create-file", { filename, content });
      alert("File created successfully!");
      refreshFiles(); // Refresh file list after creation
      setFilename("");
      setContent("");
    } catch (error) {
      alert(error.response?.data?.message || "Error creating file.");
    }
  };

  return (
    <div>
      <h2>Create New File</h2>
      <input
        type="text"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        placeholder="Enter file name (e.g., example.txt)"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter file content"
      ></textarea>
      <button onClick={handleCreateFile}>Create File</button>
    </div>
  );
};

export default FileCreationForm;
