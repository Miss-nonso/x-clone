import React, { useState } from "react";

const ImageUploader = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Preview the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("image-upload").click();
  };

  return (
    <div>
      {/* The hidden input */}
      <input
        type="file"
        id="image-upload"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload}
      />

      {/* The clickable image */}
      <img
        src={imagePreview || "https://via.placeholder.com/150"} // Default or preview image
        alt="Upload"
        onClick={handleClick}
        style={{
          width: "150px",
          height: "150px",
          cursor: "pointer",
          border: "2px dashed gray"
        }}
      />
    </div>
  );
};

export default ImageUploader;
