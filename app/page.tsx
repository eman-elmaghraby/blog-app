"use client"; 

import PostCard from '@/components/PostCard';
import SearchBar from '@/components/SearchBar';
import fetchData from '@/utils/fetchData';
import { Post } from '@/types';
import React from 'react';


export default async function Home() {
  const posts: Post[] = await fetchData('https://jsonplaceholder.typicode.com/posts');

  return <HomeContent posts={posts} />;
}


function HomeContent({ posts }: { posts: Post[] }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
     
        <SearchBar setSearchTerm={setSearchTerm} />

       
        <h1 className="text-4xl font-extrabold text-center text-white my-8">
          Latest Blog Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length === 0 ? (
            <p className="col-span-full text-center text-white opacity-80">
              No posts found.
            </p>
          ) : (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
