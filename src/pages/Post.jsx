import React from "react";
import LoadingWithData from "../component/HOC/LoadingIndicator";

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p className="text-center">No posts to display.</p>;
  }

  return (
    <div className="p-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 mb-4 rounded shadow">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const EnhancedPostList = LoadingWithData(PostList);

// 3. Define the main Post component.
const Post = () => {
  return (
    <div>
      <h1 className="text-center m-10 text-6xl">Latest Post!</h1>

      <EnhancedPostList url="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
};

export default Post;
