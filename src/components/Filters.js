import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/posts/postsSlice';

export default function Filters() {
  const dispatch = useDispatch();

  return (
    <select onChange={(e) => dispatch(setFilter(e.target.value))}>
      <option value="all">All</option>
      <option value="hot">Hot</option>
      <option value="new">New</option>
      <option value="top">Top</option>
    </select>
  );
}
