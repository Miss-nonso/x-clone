function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src="./x-logo.png" alt="x logo" className="avatar" />
      <div className="post-content">
        {" "}
        <div className="user-details">
          {" "}
          <h3>
            Display name <span>☑️</span>
          </h3>{" "}
          <p>@username</p> <span>. 14h</span>
        </div>
        <p className="post-text">{post.content}</p>
        {post.img && <img src={post.img} alt={`${post.userId}`} />}
        <div className="interaction-btn-wrapper">
          <span> 2.7k</span>
          <span> 10k</span>
          <span> 35k</span>
          <span> 2k</span>
        </div>
      </div>
      <span className="three-dots">...</span>
    </div>
  );
}

export default PostCard;
