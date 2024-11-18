import React, { useState, useEffect } from "react";
import API from "../../api";

import "./style.css";

const FileEditor = ({ editingFile, closeEditor }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await API.get(`/files/${editingFile}`);
        setContent(response.data.content);
      } catch (error) {
        alert("Error fetching file content.");
      }
    };
    fetchFileContent();
  }, [editingFile]);

  const handleSave = async () => {
    try {
      await API.put(`/edit-file/${editingFile}`, { content });
      alert("File saved successfully!");
      closeEditor();
    } catch (error) {
      alert("Error saving file.");
    }
  };

  return (
    <div>
      <h2>Editing: {editingFile}</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleSave}>Save</button>
      <button onClick={closeEditor}>Cancel</button>
    </div>
  );
};

export default FileEditor;
