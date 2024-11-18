import React, { useState } from "react";
import FileCreationForm from "./components/FileCreationForm";
import FileListViewer from "./components/FileListViewer";
import FileEditor from "./components/FileEditor";

const App = () => {
  const [editingFile, setEditingFile] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshFiles = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <h1>File Management System</h1>
      {!editingFile && (
        <>
          <FileCreationForm refreshFiles={refreshFiles} />
          <FileListViewer
            setEditingFile={setEditingFile}
            refreshKey={refreshKey}
          />
        </>
      )}
      {editingFile && (
        <FileEditor
          editingFile={editingFile}
          closeEditor={() => setEditingFile(null)}
        />
      )}
    </div>
  );
};

export default App;
