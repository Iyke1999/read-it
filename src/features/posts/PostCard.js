import React, { useState } from 'react';
import PostDetail from './PostDetail';
import Modal from '../../components/Modal';

export default function PostCard({ post }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="post-card" onClick={() => setOpen(true)}>
        <h3>{post.title}</h3>
        <p>By {post.author}</p>
        <p>{post.ups} upvotes | {post.comments} comments</p>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <PostDetail post={post} />
      </Modal>
    </>
  );
}