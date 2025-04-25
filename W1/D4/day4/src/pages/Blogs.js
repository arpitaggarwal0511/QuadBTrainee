// src/pages/Blogs.js
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  { id: 1, title: 'React Basics', summary: 'Intro to components, props, and JSX.' },
  { id: 2, title: 'Understanding useEffect', summary: 'How side effects work in React.' },
  { id: 3, title: 'React Router Made Easy', summary: 'Navigation in modern SPAs.' },
];

function Blogs() {
  return (
    <div>
      <h2>All Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>
              <Link to={`/blogs/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
