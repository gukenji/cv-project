import React, { useState } from "react";
import "../style/UploadAndDisplayImage.css";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div className="profile-container">
          <img
            className="profile-pic"
            alt="not fount"
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button
            className="no-print input-profile"
            onClick={() => setSelectedImage(null)}
          >
            Remover
          </button>
          <input
            type="file"
            name="myImage"
            className="no-print input-profile white"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadAndDisplayImage;
