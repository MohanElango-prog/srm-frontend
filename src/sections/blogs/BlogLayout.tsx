import React from 'react';
import images from "../icons/blog1.jpg";

const BlogLayout = () => {
  const latestPosts = [
    {
      id: 1,
      image: images,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      date: 'August 10, 2024'
    },
    {
      id: 2,
      image: images,
      title: 'Maecenas ornare pharetra.',
      date: 'August 9, 2024'
    },
    {
      id: 3,
      image: images,
      title: 'Consectetur adipiscing elit.',
      date: 'August 8, 2024'
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Feature Article */}
        <div className="md:col-span-2 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <img 
            src= {images} 
            alt="Feature Article" 
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="text-3xl font-bold mb-4">
              Lorem Ipsum dolor sit amet consectetur. Maecenas ornare pharetra.
            </h1>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas ornare pharetra nec fusce sollicitudin sociis etiam primis quisque.
            </p>
            <span className="text-sm text-gray-400">August 11, 2024</span>
          </div>
        </div>

        {/* Latest Posts Sidebar */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Latest Posts</h2>
          {latestPosts.map((post) => (
            <div key={post.id} className="flex space-x-4">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-24 h-20 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;