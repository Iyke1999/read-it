import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../features/posts/postsSlice';

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search posts..."
      onChange={(e) => dispatch(setQuery(e.target.value))}
    />
  );
}
