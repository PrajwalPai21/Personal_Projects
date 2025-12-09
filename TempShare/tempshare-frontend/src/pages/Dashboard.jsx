import React, { useState } from "react";
// Remove the Scroll , its not needed
const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setDownloadLink(null); //reset link if i am uploading new link
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }
    setUploading(true);

    // time out to send data to the backend
    setTimeout(() => {
      setUploading(false);

      // Temporary fake link frontend only
      setDownloadLink("Https://tempshare.com/file/:" + selectedFile.name);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-20">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Upload & Share FIles Instantly!
      </h1>
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-4">Select a File to Uplaod</h2>

        {/* pick file */}
        <input
          type="file"
          className="w-full mb-4"
          onChange={handleFileChange}
        />
        {/* previewing the file  */}
        {selectedFile && (
          <div className="bg-gray-100 p-3 rounded mb-4 text-sm">
            <p>
              <strong>File:</strong>
              {selectedFile.name}
            </p>

            <p>
              <strong>Size:</strong>
              {(selectedFile.size / 1024).toFixed(2)}KB
            </p>

            <p>
              <strong>Type:</strong>
              {selectedFile.type || "Unknown"}
            </p>
          </div>
        )}

        <button
          className={`w-full text-white py-2 rounded-lg transition ${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>

        {/* Download Link */}
        {downloadLink && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded">
            <p className="font-semibold">File Uploaded Successfully!</p>
            <p className="text-blue-700 break-all">{downloadLink}</p>

            <button
              className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              onClick={() => navigator.clipboard.writeText(downloadLink)}
            >
              Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
