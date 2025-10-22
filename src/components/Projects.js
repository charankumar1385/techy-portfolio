import React, { useState } from "react";
import { motion } from "framer-motion";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Projects() {
  const [file, setFile] = useState(null);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");
    try {
      setIsUploading(true);
      const fileRef = ref(storage, `dashboards/${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      setUploadedUrls((prev) => [...prev, url]);
      setFile(null);
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <motion.div
      className="text-center text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* Upload Area */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <input
          type="file"
          onChange={handleFileChange}
          className="block text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer bg-gray-900 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 transition"
        />
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className={`${
            isUploading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          } px-6 py-2 rounded-lg text-white font-medium transition`}
        >
          {isUploading ? "Uploading..." : "Upload Dashboard"}
        </button>
      </div>

      {/* Uploaded Dashboards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {uploadedUrls.length === 0 && (
          <p className="text-gray-400 text-sm col-span-full">
            No dashboards uploaded yet. Start by uploading your first file!
          </p>
        )}
        {uploadedUrls.map((url, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-purple-600/30 transition-all duration-300"
          >
            <iframe
              src={url}
              title={`Dashboard ${index + 1}`}
              className="w-full h-64 rounded-t-lg border-0"
              allowFullScreen
            ></iframe>
            <div className="p-3 border-t border-gray-700 text-sm text-gray-400">
              Dashboard {index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
