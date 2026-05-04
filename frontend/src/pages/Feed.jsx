import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://mern-fnb-proj3.onrender.com/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt="image" />
            <h3>{post.caption}</h3>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
};

export default Feed;
