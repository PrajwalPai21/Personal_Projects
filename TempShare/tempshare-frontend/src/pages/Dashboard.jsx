import React, { useState } from "react";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8080/files/upload", {
        method: "POST",
        body: formData, // no headers needed for multipart
      });

      if (!response.ok) {
        setUploadMessage("Upload failed.");
        return;
      }

      const result = await response.json();
      setUploadMessage("Upload successful!");
      setDownloadLink(result.downloadUrl);
    } catch (error) {
      setUploadMessage("Something went wrong.");
    }
  };

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
          onClick={handleUpload}
        >
          Upload File
        </button>

        {uploadMessage && (
          <p className="mt-4 text-center text-gray-700">{uploadMessage}</p>
        )}

        {downloadLink && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-semibold">Shareable Link:</p>
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {downloadLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
