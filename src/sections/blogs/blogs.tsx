import React from "react";
import { Link } from "react-router-dom";
import user from "../../icons/user.png";
import feat from "../../icons/blog5.jpg";
import image from "../../icons/blog1.jpg";

const BlogHomepage = () => {
  // Sample data for blog posts
  const featuredPost = {
    category: "LATEST NEWS",
    title: "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
    author: "Tracey Williams",
    date: "August 01, 2022",
    imageUrl: feat,
  };

  const posts = [
    {
      id: 1,
      imageUrl: image, // Placeholder image
      title: "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Travel",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 20, 2025",
    },
    {
      id: 2,
      imageUrl: image, // Placeholder image
      title: "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Photography",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 15, 2025",
    },
    {
      id: 3,
      imageUrl: image, // Placeholder image
      title:
        "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Design",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 10, 2025",
    },
    {
      id: 4,
      imageUrl: image, // Placeholder image
      title: "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Travel",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 20, 2025",
    },
    {
      id: 5,
      imageUrl: image, // Placeholder image
      title: "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Photography",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 15, 2025",
    },
    {
      id: 6,
      imageUrl: image, // Placeholder image
      title:
        "Lorem ipsum dolor sit amet consectetur. Maecenas ornare pharetra.",
      category: "Design",
      author: "Lorem Ipsum",
      authorAvatar: "/icons/user.png",
      date: "January 10, 2025",
    },
  ];

  return (
    <div className="bg-black/80 text-white md:px-[100px] pt-[100px]">
      {/* Hero section with featured post */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-lg "></div>
        <img
          src={featuredPost.imageUrl}
          alt="Featured post"
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 p-[50px] z-10">
          <div className="bg-[#FFB800] rounded-md text-black text-lg font-bold px-3 py-1 inline-block mb-2">
            {featuredPost.category}
          </div>
          <h2 className="text-[50px] font-bold mb-2 w-[950px]">
            {featuredPost.title}
          </h2>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center mr-2">
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
            <span className="text-xl font-medium ml-6">
              {featuredPost.author}
            </span>
            <span className="text-xl font-medium ml-4">
              {featuredPost.date}
            </span>
          </div>
        </div>
      </div>

      {/* Latest Posts heading */}
      <div className="px-6 py-8 mt-[50px]">
        <h3 className="text-4xl font-bold">Latest Post</h3>
      </div>

      {/* Grid of posts - Updated with padded images and inline author/date */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-6 bg-[#111] rounded-lg overflow-hidden border border-[#242535]"
          >
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
                    <span className="bg-[#FFB800]/30 text-lg text-[#FFB800] font-medium px-5 py-2 rounded-md backdrop-blur-md shadow-md">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-semibold mb-4 mt-6">{post.title}</h3>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img
                          src={user}
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-2xl text-gray-300">
                      {post.author}
                    </span>
                    
                    </div>
                    <span className="text-2xl text-gray-400">
                        {post.date}
                      </span>
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
