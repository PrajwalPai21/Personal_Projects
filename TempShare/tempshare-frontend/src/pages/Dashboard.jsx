import React, { useState } from "react";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="min-h-screen bg-gray-100 px-6">
      <h1 className="text-3xl fond-bold mt-15 mb-8 text-center text-blue-600">
        Upload & Share Files Instantly!
      </h1>
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-4">Select a File to Upload</h2>
        <input
          type="file"
          className="w-full mb-4"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => alert("Upload feature coming soon!")}
        >
          Upload File
        </button>
      </div>
      <div className="max-w-xl mx-auto mt-10">
        <h2 className="bg-white shadow rounded-lg p-4 text-gray 600">
          No Uploads Yet.
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
