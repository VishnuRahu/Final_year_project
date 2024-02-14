"use client"

import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleUpload = async() => {
    if (files) {
      // Process the uploaded files here
      console.log(files);
    }
    try{
        await axios.post(
            "http://localhost:8000/api/v1/items",
            files
          );

    }
     catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
        
      <input type="file" multiple onChange={handleFileChange} />
      <button
        className="bg-green text-black hover:opacity-5"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
