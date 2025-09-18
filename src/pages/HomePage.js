import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import PostList from '../features/posts/PostList';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Filters />
      <PostList />
    </>
  );
}
