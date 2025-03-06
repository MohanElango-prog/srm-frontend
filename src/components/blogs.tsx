import React from "react";
import { Link } from "react-router-dom";
import user from '../icons/user.png'

const BlogHomepage = () => {
  // Sample data for blog posts
  const featuredPost = {
    category: "LATEST NEWS",
    title: "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
    author: "Lorem Ipsum",
    date: "August 01, 2022",
    imageUrl: "/lovable-uploads/og-image.png",
  };

  const posts = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/test.webp", // Placeholder image
      title: "Exploring Coastal Landscapes",
      category: "Travel",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 20, 2025",
    },
    {
      id: 2,
      imageUrl: "/lovable-uploads/test.webp", // Placeholder image
      title: "Urban Photography Techniques",
      category: "Photography",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 15, 2025",
    },
    {
      id: 3,
      imageUrl: "/lovable-uploads/test.webp", // Placeholder image
      title:
        "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Design",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 10, 2025",
    },
    {
      id: 4,
      imageUrl: "/lovable-uploads/test.webp", // Placeholder image
      title: "Exploring Coastal Landscapes",
      category: "Travel",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 20, 2025",
    },
    {
      id: 5,
      imageUrl: "/lovable-uploads/test.webp", // Placeholder image
      title: "Urban Photography Techniques",
      category: "Photography",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 15, 2025",
    },
    {
      id: 6,
      imageUrl: "/lovable-uploads/test.webp", // Placeholder image
      title:
        "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Design",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 10, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-black/80 text-white md:px-[80px]">
      {/* Hero section with featured post */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <img
          src={featuredPost.imageUrl}
          alt="Featured post"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <div className="bg-[#FFB800] rounded-md text-black text-xs font-bold px-3 py-1 inline-block mb-2">
            {featuredPost.category}
          </div>
          <h2 className="text-3xl font-bold mb-2 w-[600px]">{featuredPost.title}</h2>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center mr-2">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-xs mr-2">{featuredPost.author}</span>
            <span className="text-xs text-gray-400">{featuredPost.date}</span>
          </div>
        </div>
      </div>

      {/* Latest Posts heading */}
      <div className="px-6 py-4">
        <h3 className="text-lg font-bold">Latest Post</h3>
      </div>

      {/* Grid of posts - Updated with padded images and inline author/date */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {posts.map((post) => (
          <div key={post.id} className="mb-6 bg-[#111] rounded-lg overflow-hidden">
            <Link to={`/blogs/${post.id}`} className="block">
              <div className="p-4">
                <div className="relative mb-4">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col p-4">
                <div className="mb-3">
                <span className="bg-[#FFB800]/30 text-xs text-[#FFB800] font-medium px-3 py-1 rounded-sm backdrop-blur-md  shadow-md">
                {post.category}
                  </span>
                </div>
                <h3 className="text-4xl font-semibold mb-4">{post.title}</h3>
                <div className="flex items-center mt-6">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                    <img
                      src={user}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-2xl text-gray-300 mr-2">{post.author}</span>
                  <span className="text-2xl text-gray-400">{post.date}</span>
                </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Posts button */}
      <div className="flex justify-center pb-8">
        <button className="bg-yellow-600 text-xs font-bold px-4 py-2 rounded">
          View All Post
        </button>
      </div>
    </div>
  );
};

export default BlogHomepage;