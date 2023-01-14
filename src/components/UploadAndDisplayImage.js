import React, { useState } from "react";
import "../style/UploadAndDisplayImage.css";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState();

  function handleInput(e) {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <div className="profile-container">
        <img
          className="profile-pic"
          alt="faça o upload de sua foto"
          src={selectedImage}
        />
        <br />
        {(() => {
          if (selectedImage != undefined) {
            return (
              <button
                className="no-print input-profile"
                onClick={() => setSelectedImage(null)}
              >
                Remover
              </button>
            );
          }
        })()}
        <input
          type="file"
          name="myImage"
          className="no-print input-profile white"
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
