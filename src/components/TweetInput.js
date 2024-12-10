import { useState } from "react";
import { createTweet } from "../services/tweetService";
import { useAuth } from "../context/AuthContext";
import { downArrow } from "../assets/images/downArrow";
import { tweetIcons } from "../assets/images/tweetIcons";


function TweetInput() {
  const [content, setContent] = useState("");
  const { currentUser } = useAuth();

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("image-upload").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Tweet cannot be empty");

    try {
      await createTweet(content, currentUser.uid);
      setContent(" ");
    } catch (error) {
      console.error("Error creating tweet:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tweet-form">
      <span className="everyone">
        Everyone{" "}
        <span>
          <img src={downArrow} alt="arrow icon" style={{ width: "25px" }} />
        </span>
      </span>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
      />
      <div className="reply-control">
        <img src="./logo192.png" alt="World" />
        Everyone can reply
      </div>
      <input
        type="file"
        id="image-upload"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload}
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="preview"
          style={{ width: "100%", borderRadius: "10px", height: "15rem" }}
        />
      )}

      <div className="icons-and-submit-wrapper">
        <div className="icons-wrapper">
          {tweetIcons.map((icon, idx) =>
            icon.title !== "image" ? (
              <img
                src={icon.icon}
                alt={icon.title}
                key={idx}
                style={{ height: "2rem" }}
              />
            ) : (
              <img
                src={icon.icon}
                alt={icon.title}
                key={idx}
                style={{ height: "2rem" }}
                onClick={handleClick}
              />
            )
          )}
        </div>

        {content || imagePreview ? (
          <button type="submit">Tweet</button>
        ) : (
          <button type="submit" disabled>
            Tweet
          </button>
        )}
      </div>
    </form>
  );
}

export default TweetInput;
