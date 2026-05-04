import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://mern-fnb-proj3.onrender.com/posts").then((res) => {
      setPosts(res.data.posts.reverse());
    });
  }, []);

  return (
    <section className="feed-section">
      <button onClick={() => navigate("/create-post")}>Create</button>
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