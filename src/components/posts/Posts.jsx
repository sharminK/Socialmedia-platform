import React from "react";
import "./Posts.css";
import { PostsData } from "../../Data/PostsData";
import Post from "../post/Post";

function Posts() {
  return (
    <div className="Posts">
      {PostsData.map((post, i) => {
        return <Post data={post} id={i} />;
      })}
    </div>
  );
}

export default Posts;
