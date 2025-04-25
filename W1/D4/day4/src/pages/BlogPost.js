// src/pages/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogContent = {
  1: 'React is a JavaScript library for building user interfaces...',
  2: 'useEffect is a hook for managing side effects like data fetching...',
  3: 'React Router helps manage client-side routing in SPAs...',
};

function BlogPost() {
  const { id } = useParams();
  const content = blogContent[id];

  return (
    <div>
      {content ? (
        <>
          <h2>Blog Post #{id}</h2>
          <p>{content}</p>
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
}

export default BlogPost;
