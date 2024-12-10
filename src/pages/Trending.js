import { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../services/tweetService";
import PostCard from "../components/PostCard";

function Trending() {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const posts = await fetchTrendingPosts();
      setTrendingPosts(posts);
    };
    loadTrending();
  }, []);

  return (
    <div>
      {trendingPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Trending;
