import { comment } from "../assets/images/images";
import { retweet } from "../assets/images/images";
import { heart } from "../assets/images/images";
import { analytics } from "../assets/images/images";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src="./x-logo.png" alt="x logo" className="avatar" />
      <div className="post-content">
        {" "}
        <div className="user-details">
          {" "}
          <h3>
            {post["display-name"]} <span>☑️</span>
          </h3>{" "}
          <p> @{post.username}</p> <span>. 14h</span>
        </div>
        <p className="post-text">{post.content}</p>
        {post["content-img"] && (
          <img src={post["content-img"]} alt={`${post.userId}`} />
        )}
        <div className="interaction-btn-wrapper">
          <button className="interaction-btn">
            {" "}
            <img src={comment} alt="comment icon" />{" "}
            {post.comments
              ? post.comments.length
              : Math.round(Math.random() * 11)}
          </button>
          <button className="interaction-btn">
            {" "}
            <img src={retweet} alt="retweet icon" /> {post.shares}k
          </button>
          <button className="interaction-btn">
            {" "}
            <img src={heart} alt="like icon" /> {post.likes}
          </button>
          <button className="interaction-btn">
            {" "}
            {analytics} {post.analytics}
          </button>
        </div>
      </div>
      <span className="three-dots">...</span>
    </div>
  );
}

export default PostCard;
