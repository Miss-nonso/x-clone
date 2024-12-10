// import { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// function Feed() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const querySnapshot = await getDocs(collection(db, "posts"));
//       const postsArray = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setPosts(postsArray);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.user}</h3>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Feed;

import { useEffect, useState } from "react";
import { listenToPosts } from "../services/tweetService";
import PostCard from "../components/PostCard";
import TweetInput from "../components/TweetInput";
import { Link } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToPosts((newPosts) => setPosts(newPosts));
    return unsubscribe; // Cleanup listener on unmount
  }, []);

  return (
    <div className="user-container">
      <LeftSidebar />{" "}
      <div className="main">
        {" "}
        <Navbar />
        <div className="tweets">
          <div className="tweet-container">
            <img src="./x-logo.png" alt="" />
            <div className="wrapper">
              <TweetInput />
            </div>
          </div>
          <div className="show-post-wrapper">
            <Link href="#">Show 768 posts</Link>
          </div>
          {posts
            .slice()
            .reverse()
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}

export default Feed;
