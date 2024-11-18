const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const uploadDir = path.join(__dirname, "uploads");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Start server
const PORT = 3001;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

// Create a new file
app.post("/create-file", (req, res) => {
  const { filename, content } = req.body;

  if (!filename || /[\\/]/.test(filename)) {
    return res.status(400).json({ message: "Invalid filename." });
  }

  const filePath = path.join(uploadDir, filename);

  if (fs.existsSync(filePath)) {
    return res.status(400).json({ message: "File already exists." });
  }

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error creating file." });
    }
    res.json({ message: "File created successfully." });
  });
});

// List all files
app.get("/files", (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching files." });
    }
    res.json({ files });
  });
});

// Get file content
app.get("/files/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(uploadDir, filename);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).json({ message: "File not found." });
    }
    res.json({ content: data });
  });
});

// Edit file content
app.put("/edit-file/:filename", (req, res) => {
  const { filename } = req.params;
  const { content } = req.body;
  const filePath = path.join(uploadDir, filename);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error updating file." });
    }
    res.json({ message: "File updated successfully." });
  });
});

// Download file
app.get("/download/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(uploadDir, filename);

  res.download(filePath, (err) => {
    if (err) {
      res.status(404).json({ message: "File not found." });
    }
  });
});
