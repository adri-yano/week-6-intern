'use client';
import { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Other Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="bg-gray-800 p-4 rounded mb-4">
          <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}