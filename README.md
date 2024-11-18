Here’s the **README.md** file text for your project, including the necessary instructions for installing dependencies and running the project:

---

# File Management System

A simple file management system built with React (frontend) and Node.js (backend) that allows users to:

- Create, view, and edit text files.
- Download files.
- Store files locally on the server.

## Features
- **Create new files** with a specified name and content.
- **View files** to see their content.
- **Edit files** and save the updated content.
- **Download files** as `.txt` files.
- Built with **React** (frontend) and **Node.js** (backend).

---

## Project Setup

### **Prerequisites**

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [git](https://git-scm.com/)

### **1. Frontend Setup (React)**

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

This will start the React frontend application on `http://localhost:3000`.

---

### **2. Backend Setup (Node.js)**

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Create a folder named `uploads` in the `backend` directory to store the files:
   ```bash
   mkdir uploads
   ```

4. Start the Node.js backend server:
   ```bash
   npm start
   ```

This will start the backend API on `http://localhost:5000`.

---

## API Endpoints

The following API endpoints are available:

- **POST** `/api/create-file` - Create a new file with a given name and content.
  - **Request Body**: `{ "filename": "file.txt", "content": "File content" }`
  - **Response**: Success or error message.

- **GET** `/api/files` - Retrieve a list of all stored files.
  - **Response**: `{ "files": ["file1.txt", "file2.txt", ...] }`

- **GET** `/api/files/:filename` - Retrieve the content of a specific file.
  - **Response**: `{ "content": "File content" }`

- **PUT** `/api/edit-file/:filename` - Edit the content of an existing file.
  - **Request Body**: `{ "content": "Updated content" }`
  - **Response**: Success or error message.

- **GET** `/api/download/:filename` - Download the file as `.txt`.
  - **Response**: Downloads the specified file.

---

## File Structure

The file structure for both frontend and backend is as follows:

```
frontend/
├── src/
│   ├── components/
│   │   ├── FileCreationForm.jsx
│   │   ├── FileListViewer.jsx
│   │   ├── FileEditor.jsx
│   ├── App.jsx
│   ├── api.js
│   ├── index.js
│   └── App.css
backend/
├── controllers/
│   └── fileController.js
├── routes/
│   └── fileRoutes.js
├── uploads/
├── server.js
├── package.json
```

---

## Running the Project Locally

1. **Start the Backend Server**:  
   In the `backend` folder, run:
   ```bash
   npm start
   ```

2. **Start the Frontend Server**:  
   In the `frontend` folder, run:
   ```bash
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to use the file management system.

---

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, fs (file system)
- **Styling**: Custom CSS

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Troubleshooting

- If the backend or frontend doesn't run as expected, ensure that the **`uploads/` folder** exists in the backend directory.
- Make sure there are no conflicting ports. The frontend runs on port `3000`, and the backend runs on port `5000` by default.

---

### **Required Packages**

For **Frontend** (React):
```bash
npm install react react-dom axios
```

For **Backend** (Node.js):
```bash
npm install express cors
```

---

This README file should help users set up the project and get it running on their local machine. Let me know if you need any further details or adjustments!
