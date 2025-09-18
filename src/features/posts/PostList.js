import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from './postsSlice';
import PostCard from './PostCard';
import ErrorBanner from '../../components/ErrorBanner';

export default function PostList() {
  const dispatch = useDispatch();
  const { items, status, error, query } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(loadPosts('reactjs'));
  }, [dispatch]);

  const filtered = items.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <ErrorBanner message={error} onRetry={() => dispatch(loadPosts('reactjs'))} />;

  return (
    <div className="post-list">
      {filtered.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
