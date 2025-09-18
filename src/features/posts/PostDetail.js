import React from 'react';

export default function PostDetail({ post }) {
  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>Author: {post.author}</p>
      <p>Upvotes: {post.ups}</p>
      <p>Comments: {post.comments}</p>
      <a href={`https://reddit.com/r/${post.subreddit}/comments/${post.id}`} target="_blank" rel="noreferrer">
        View on Reddit
      </a>
    </div>
  );
}
